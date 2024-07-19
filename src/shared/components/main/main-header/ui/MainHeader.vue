<script lang="ts" setup>
import { NLayoutHeader } from "naive-ui"
import { UserLogout, UserPhone } from "../components"
import { LogoTextVertical } from "#icons/logo"
import { MainLangPicker } from "#shared/components/main"
import { useDeviceReactive } from "#shared/composables"
import UserNotification from "../components/UserNotification.vue"

const { isMobile } = useDeviceReactive()
</script>

<template>
  <n-layout-header class="main-header">
    <div class="main-header__wrapper">
      <div class="main-header__logos">
        <!-- <LogoIcon style="fill: black" />-->
        <LogoTextVertical v-if="!isMobile" style="height: 12px; margin-left: -2rem" />
      </div>

      <div class="main-header__items">
        <UserPhone />

        <div class="main-header__actions">
          <MainLangPicker />

          <UserNotification />

          <UserLogout />
        </div>
      </div>
    </div>
  </n-layout-header>
</template>

<style lang="scss" scoped>
.main-header {
  padding: 1.6rem 2.6rem;
  border-bottom: 1px solid var(--elements-quaternary, #e7e8ea);

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logos {
    display: flex;
    align-items: center;
    gap: 0.9rem;
  }

  &__items {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 4rem;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }
}
</style>
