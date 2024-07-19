<script lang="ts" setup>
import { NSelect } from "naive-ui"
import { LocationQueryValue, useRoute, useRouter } from "vue-router"
import { useDeviceReactive } from "#shared/composables"
import { ITab } from "#shared/utils/types"
import { nextTick, onMounted, ref, watch } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue"
import { Navigation } from "swiper/modules"
import type { SwiperClass } from "swiper/types/swiper-class"
import "swiper/css"
import "swiper/css/navigation"

const props = defineProps<{ modelValue: string | LocationQueryValue[]; tabs: ITab[]; disabled?: boolean }>()
const emit = defineEmits(["update:modelValue"])

const { isMobile } = useDeviceReactive()
const router = useRouter()
const route = useRoute()

const slider = ref<SwiperClass | null>(null)
const isDisabled = ref<boolean>(false)
const type = route.query.type

watch(props.tabs, () => {
  if (slider.value) {
    nextTick(() => {
      slider.value?.update()
    })
  }
})

watch(
  () => route.query.type,
  value => {
    if (value) {
      emit("update:modelValue", value)
    }
  }
)

const setModelValue = function (value: string) {
  isDisabled.value = true
  emit("update:modelValue", value)
  router.push({
    ...router.currentRoute.value,
    query: {
      ...router.currentRoute.value.query,
      type: value,
      page: 1
    },
    force: true
  })
  setTimeout(() => (isDisabled.value = false), 1000)
}

const onSwipe = (swiper: SwiperClass) => {
  slider.value = swiper
}

onMounted(() => {
  if (type) {
    emit("update:modelValue", type)
  }

  if (props.tabs && slider.value) {
    const index = props.tabs.findIndex(tab => tab.value === props.modelValue)

    if (index !== -1) {
      slider.value.slideTo(index, 0)
    }
  }
})
</script>

<template>
  <div v-if="!isMobile" class="tabsWrap">
    <Swiper
      :centered-slides="false"
      :loop="false"
      :modules="[Navigation]"
      navigation
      slides-per-view="auto"
      space-between="30"
      @swiper="onSwipe"
    >
      <SwiperSlide v-for="tab in props.tabs" :key="tab.value" style="flex-shrink: initial; width: auto">
        <button
          v-if="tab.show !== false"
          :class="['tab', tab.value === modelValue && 'active']"
          :disabled="props.disabled || isDisabled || tab.disabled"
          @click="setModelValue(tab.value)"
        >
          {{ tab.label }}
        </button>
      </SwiperSlide>
    </Swiper>
  </div>
  <div v-else class="row">
    <span>Фильтрация:</span>
    <n-select :bordered="false" :options="tabs" :value="modelValue" @change="setModelValue"></n-select>
  </div>
</template>

<style lang="scss" scoped>
.tab {
  border: none;
  border-radius: 8px;
  background: none;
  padding: 4px 10px;
  white-space: nowrap;
  color: var(--grey-300);
  @include font("s14");

  &[disabled] {
    opacity: 0.7;
    cursor: not-allowed !important;
  }

  &.active {
    color: #ffffff;
    background-color: var(--brand-primary-500);
  }
}

.tabsWrap {
  margin-left: -2rem;
  margin-right: -2rem;

  :deep(.swiper) {
    padding-left: 27px;
    padding-right: 27px;

    .swiper-button-disabled {
      display: none;
    }

    .swiper-button-prev {
      left: 0 !important;
    }

    .swiper-button-next {
      right: 0 !important;
    }

    .swiper-button-prev:after,
    .swiper-button-next:after {
      content: "";
      font-family: sans-serif;
      background-color: #ffffff;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M6.19374 18.4298L12.6237 11.9998L6.19374 5.56982M12.6237 18.4298L19.0527 11.9998L12.6237 5.56982' stroke='%237000FF' stroke-width='1.2' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round' /%3E%3C/svg%3E");
      background-position: center;
      width: 30px;
      height: 30px;
    }

    .swiper-button-prev:after {
      transform: scaleX(-1);
    }
  }
}

:deep(.n-select .n-base-selection-input) {
  color: map-get($colors, "brand-primary-500") !important;
}

:deep(.n-base-selection .n-base-selection-label) {
  border: none;
  background: transparent;
}

.n-base-selection:not(.n-base-selection--disabled):hover .n-base-selection__state-border {
  border: none;
}

:deep(.n-select .n-base-selection--active, .n-base-selection--focus) {
  border: none;
}
</style>
