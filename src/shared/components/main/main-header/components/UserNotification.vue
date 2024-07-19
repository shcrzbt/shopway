<script lang="ts" setup>
import { NButton, NIcon } from "naive-ui"
import { NotificationIcon } from "#icons/svg"
</script>

<template>
  <NButton text>
    <template #icon>
      <n-icon size="20">
        <NotificationIcon />
      </n-icon>
    </template>
  </NButton>
</template>

<style lang="scss" scoped></style>
