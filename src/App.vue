<script lang="ts" setup>
import { createLocale, NConfigProvider, NLoadingBarProvider, ruRU } from "naive-ui"
import { themeOverrides } from "#shared/utils/overrides"

const customizedLocale = createLocale(
  {
    Select: {
      placeholder: "Выберите"
    }
  },
  ruRU
)
</script>

<template>
  <n-config-provider :locale="customizedLocale" :theme-overrides="themeOverrides">
    <n-loading-bar-provider>
      <component :is="$route.meta.layoutComponent" />
    </n-loading-bar-provider>
  </n-config-provider>
</template>
