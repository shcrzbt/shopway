<script setup lang="ts">
import { NButton } from "naive-ui"
import type { ButtonProps } from "naive-ui"

const NButtonThemeOverrides: NonNullable<ButtonProps["themeOverrides"]> = {
  heightTiny: "3.2rem",
  borderRadiusTiny: "10rem",
  fontSizeTiny: "1.4rem",
  paddingTiny: ".6rem 1.2rem"
}
</script>

<template>
  <n-button style="float: right" :theme-overrides="NButtonThemeOverrides" size="tiny" type="primary">{{
    $t("product.list.actions.addClientPhoto")
  }}</n-button>
</template>
