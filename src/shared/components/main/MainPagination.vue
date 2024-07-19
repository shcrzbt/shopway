<script lang="ts" setup>
import { NButton, NPagination } from "naive-ui"
import { ArrowLeft, ArrowRight } from "../icons/svg"
import { useDeviceReactive } from "#shared/composables"
import { useRouter } from "vue-router"
import { IResponsePagination } from "#shared/utils/types"

const { isMobile } = useDeviceReactive()
const router = useRouter()

withDefaults(
  defineProps<{
    isLoading?: boolean
    disabled: boolean
    pagination: IResponsePagination | undefined
  }>(),
  {
    disabled: false
  }
)

const onUpdatePage = (page: number) => {
  router.push({
    ...router.currentRoute.value,
    query: { ...router.currentRoute.value.query, page }
  })
}
</script>

<template>
  <n-pagination
    v-if="Number(pagination?.meta.total) > pagination?.meta.per_page"
    :disabled="disabled || isLoading"
    :page="Number(pagination?.meta.current_page)"
    :page-count="Number(pagination?.meta.last_page)"
    :page-slot="isMobile ? 5 : 12"
    class="main-pagination"
    @update-page="onUpdatePage"
  >
    <template #prev>
      <n-button
        :bordered="false"
        :disabled="(pagination?.meta.current_page || 1) === 1 || disabled || isLoading"
        :render-icon="ArrowLeft"
        text
        type="primary"
        :theme-overrides="{
          fontWeight: '500'
        }"
      >
        {{ isMobile ? "" : $t("pagination.prev") }}
      </n-button>
    </template>
    <template #next>
      <n-button
        :bordered="false"
        :disabled="(pagination?.meta.current_page || 1) === pagination?.meta.last_page || disabled || isLoading"
        :render-icon="ArrowRight"
        icon-placement="right"
        text
        type="primary"
        :theme-overrides="{
          fontWeight: '500'
        }"
      >
        {{ isMobile ? "" : $t("pagination.next") }}
      </n-button>
    </template>
  </n-pagination>
</template>
<style lang="scss">
.v-binder-follower-content {
  .n-popselect-menu {
    width: fit-content !important;
  }
}
</style>
