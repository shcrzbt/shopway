<script lang="ts" setup>
import { NButton, NPopselect } from "naive-ui"
import { useComponent } from "./useComponent"
import { renderLabel } from "../utils/functions"

const { iconsMap, localeList, appLocale, onUpdateLocale } = useComponent()
</script>

<template>
  <n-popselect
    :on-update-value="onUpdateLocale"
    :options="localeList"
    :render-label="renderLabel"
    :value="appLocale"
    class="lang-picker"
  >
    <n-button class="lang-picker__trigger" icon-placement="right" text>
      <component :is="iconsMap[appLocale]" />
    </n-button>
  </n-popselect>
</template>

<style lang="scss" scoped>
.lang-picker {
  &__trigger {
    @include font("t12");
    color: var(--text-secondary);

    :deep(.n-button__content) {
      gap: 0.6rem;
    }
  }
}
</style>
