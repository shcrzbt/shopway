<script setup lang="ts">
import { NButton } from "naive-ui"

interface IEmits {
  (e: "handle-close-modal"): void
}

interface IProps {
  title: string
  subtitle?: string
  status?: "danger" | "success"
}

const emits = defineEmits<IEmits>()
const props = defineProps<IProps>()
</script>

<template>
  <div class="main-modal">
    <div class="main-modal__icon" :class="props.status">
      <slot name="icon" />
    </div>

    <div class="main-modal__title">{{ props.title }}</div>
    <div class="main-modal__subtitle" v-show="props.subtitle">{{ props.subtitle }}</div>

    <n-button
      class="main-modal__btn"
      style="background: #7000ff14"
      :bordered="false"
      type="tertiary"
      @click="emits('handle-close-modal')"
    >
      {{ $t("close") }}
    </n-button>
  </div>
</template>

<style scoped lang="scss">
.main-modal {
  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 7.2rem;
    width: 7.2rem;
    margin: auto auto 2.4rem auto;
    border-radius: 50%;
    background-color: map-get($colors, "grey-100");
  }

  .success {
    background-color: map-get($colors, "success-500");
  }

  .danger {
    background-color: map-get($colors, "danger-500");
  }

  &__title {
    @include font("h24");
    text-align: center;
    margin-bottom: 5rem;
  }

  &__subtitle {
    @include font("t16");
    margin-bottom: 4rem;
    text-align: center;
    color: map-get($colors, "text-secondary");
  }

  &__btn {
    width: 100%;
  }
}
</style>
