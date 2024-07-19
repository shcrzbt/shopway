<script setup lang="ts">
import { NPageHeader } from "naive-ui"

defineProps<{
  title?: string
}>()
</script>

<template>
  <n-page-header class="u-page-header">
    <template #title>
      <span v-if="!('title' in $slots) && title">{{ $t(title) }}</span>
      <slot v-else name="title"></slot>
    </template>
    <template #extra>
      <slot name="extra">
        <div id="page-header-teleport-target"></div>
      </slot>
    </template>
  </n-page-header>
</template>

<style scoped lang="scss">
.u-page-header {
  padding: 3.2rem 0;

  :deep(.n-page-header__title) {
    @include font("h28");
    color: var(--text-primary);
  }

  :deep(.n-page-header-header) {
    margin-bottom: 0;
  }
}
</style>
