<script setup lang="ts">
import { ButtonProps, NButton } from "naive-ui"
import { ArrowIcon } from "#icons/svg"

defineProps<{
  expanded: boolean
}>()

const NButtonTertiaryThemeOverrides: NonNullable<ButtonProps["themeOverrides"]> = {
  heightTiny: "3.2rem",
  borderRadiusTiny: "10rem",
  fontSizeTiny: "1.4rem",
  paddingTiny: "1.4rem"
}
</script>

<template>
  <n-button :theme-overrides="NButtonTertiaryThemeOverrides" class="table-expand-trigger" size="tiny" tertiary round>
    <ArrowIcon v-if="expanded" direction="top" :width="20" :height="20" />
    <ArrowIcon v-else direction="bottom" :width="20" :height="20" />
  </n-button>
</template>

<style lang="scss">
.table-expand-trigger {
  @include flex(0, row, center, center);
  width: 100%;

  &.n-button--loading .n-button__content {
    display: none;
    background-color: red;
  }

  .n-icon {
    position: relative;
  }

  .n-button__icon {
    margin: 0;
  }

  .n-button__content {
    min-width: 3.2rem;
    height: 3.2rem;
    justify-content: center;
  }
}
</style>
