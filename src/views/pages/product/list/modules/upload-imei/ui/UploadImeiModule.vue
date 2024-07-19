<script setup lang="ts">
import { NButton } from "naive-ui"
import type { ButtonProps } from "naive-ui"

const NButtonThemeOverrides: NonNullable<ButtonProps["themeOverrides"]> = {
  heightTiny: "4rem",
  borderRadiusTiny: "10rem",
  fontSizeTiny: "1.4rem",
  paddingTiny: "1rem 1.6rem"
}
</script>

<template>
  <n-button style="float: right" :theme-overrides="NButtonThemeOverrides" size="tiny" type="default" tertiary
    >{{ $t("product.list.actions.uploadIMEI") }}
  </n-button>
</template>
