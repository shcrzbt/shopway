<script lang="ts" setup>
import { NLayoutHeader } from "naive-ui"
import { LogoIcon, LogoTextVertical } from "#icons/logo"
</script>

<template>
  <n-layout-header class="main-header-empty">
    <div class="main-header-empty__wrapper">
      <div class="main-header-empty__logos">
        <LogoTextVertical />
      </div>
    </div>
  </n-layout-header>
</template>

<style lang="scss" scoped>
.main-header-empty {
  padding: 1.6rem 0;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__logos {
    display: flex;
    align-items: flex-end;
    gap: 0.9rem;
  }
}
</style>
