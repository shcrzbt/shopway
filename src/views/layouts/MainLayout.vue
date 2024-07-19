<script lang="ts" setup>
import { type LayoutInst, NLayout, NLayoutContent } from "naive-ui"
import { computed, ref, watch } from "vue"
import { useRoute } from "vue-router"
import { useI18n } from "vue-i18n"
import { MainHeader, MainPageHeader } from "@/shared/components/main"
import { MainSidebar } from "#shared/components/main"

const route = useRoute()
const { t } = useI18n()

const layoutRef = ref<LayoutInst | null>(null)

const showPageHeader = computed(() => !route.meta?.hideLayoutHeader)
const pageTitle = computed(() => (route.meta?.pageTitle ? t(`${route.meta.pageTitle}`) : ""))

watch(
  route,
  () => {
    layoutRef?.value?.scrollTo({ top: 0, behavior: "instant" })
  },
  { flush: "pre", immediate: true, deep: true }
)
</script>

<template>
  <div class="main-layout">
    <n-layout>
      <MainHeader />
      <n-layout has-sider>
        <main-sidebar />

        <n-layout :native-scrollbar="false" class="main-layout__content" style="height: calc(100svh - 6.6rem)">
          <n-layout-content ref="layoutRef">

            <div class="container" style="padding: 0 3.2rem">
              <MainPageHeader v-if="showPageHeader && pageTitle" :title="pageTitle" />
              <transition name="fade">
                <router-view />
              </transition>
            </div>
          </n-layout-content>
        </n-layout>
      </n-layout>
    </n-layout>
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.main-layout {
  &__content {
    :deep(.n-scrollbar-content),
    :deep(.n-layout-content) {
      height: 100%;
    }
  }
}
</style>
