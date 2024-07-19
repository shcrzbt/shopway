<script setup lang="ts">
import { NButton, NLayoutSider, NMenu } from "naive-ui"
import { DoubleLeftArrowIcon, DoubleRightArrowIcon } from "#shared/components/icons"

import { useDeviceReactive } from "@/shared/composables"
import { useMain } from "./useMain"

const { isMobile } = useDeviceReactive()

const { menuOptions, collapsedWidth, siderCollapsed, currentRouteName, menuUpdated, expandedKeys } = useMain()
</script>

<template>
  <n-layout-sider
    class="u-sidebar"
    bordered
    :show-trigger="isMobile && siderCollapsed"
    :collapse-mode="isMobile ? 'transform' : 'width'"
    :position="!isMobile ? 'static' : 'absolute'"
    :collapsed="siderCollapsed"
    :class="{ 'u-sidebar__mobile': isMobile }"
    :collapsed-width="collapsedWidth"
    :width="240"
    :native-scrollbar="false"
    @collapse="siderCollapsed = true"
    @expand="siderCollapsed = false"
  >
    <div class="u-sidebar__menu">
      <n-menu
        class="u-menu"
        :root-indent="16"
        :value="currentRouteName"
        :collapsed-width="collapsedWidth"
        :collapsed-icon-size="24"
        :options="menuOptions"
        :default-expanded-keys="expandedKeys()"
        @update:value="menuUpdated"
      />
    </div>

    <div class="u-sidebar__bottom">
      <n-button
        class="u-sidebar__toggle-btn"
        icon-placement="right"
        @click="siderCollapsed = !siderCollapsed"
        :render-icon="siderCollapsed ? DoubleRightArrowIcon : DoubleLeftArrowIcon"
        :bordered="false"
        :theme-overrides="{
          paddingMedium: '0',
          rippleColor: 'unset'
        }"
      >
        <span v-if="!siderCollapsed">Закрыть меню</span>
      </n-button>
    </div>
  </n-layout-sider>
</template>

<style lang="scss">
.n-menu-item-content-header {
  line-height: normal;
}

.u-menu {
  --n-border-radius: 1rem !important;

  &.n-menu--collapsed .n-menu-item-content {
    .n-menu-item-content-header {
      display: none;
    }
  }

  .n-menu-item {
    &-content {
      @include font("t14");
      gap: 0.8rem;
    }
  }
}

:deep(.u-sidebar__bottom) {
  .n-button__content {
    width: 100%;
  }
}

.u-sidebar {
  height: 100svh;
  z-index: 99;
  background: var(--bg-primary);

  .n-scrollbar-content {
    height: 100%;
    @include flex(0, column, start, start);

    .u-sidebar__menu {
      flex: 1;
      width: 100%;
    }
  }

  &__mobile {
    box-shadow: 10px 0 10px rgba(0, 0, 0, 0.05);

    &.n-layout-sider--collapsed {
      .n-layout-toggle-button {
        background-color: rgba(var(--brand-primary-500-rgb), 0.1);
        color: var(--brand-primary-500);
        transform: translateX(90%) translateY(-50%);
        border: none;
        box-shadow: none;
        height: 5rem;
        border-radius: 0 1rem 1rem 0;
      }
    }

    .n-layout-toggle-button {
      background-color: rgba(var(--brand-primary-500-rgb), 0.1);
      color: var(--brand-primary-500);
      transform: translateX(0) translateY(-50%);
      border: none;
      box-shadow: none;
      height: 5rem;
      border-radius: 1rem 0 0 1rem;
    }
  }

  &__logo {
    cursor: pointer;
    @include flex(0.6rem, row, start, center);

    background-color: var(--bg-primary);
    width: 100%;
    padding: 1.4rem 1.6rem;
    position: relative;

    &-text {
      position: absolute;
      left: 1.6rem;
      opacity: 0;
      transform: scale(0.4);
      transition: all 0.3s var(--n-bezier);

      &.shown {
        opacity: 1;
        left: 5.6rem;
        transform: scale(1);
      }
    }
  }

  &__bottom {
    width: 100%;
    padding: 2rem 1.6rem;

    .n-button__content {
      width: 100%;
    }
  }

  &__toggle-btn {
    @include flex($justify: space-between);
    @include font("t14");
    width: 100%;
    background-color: transparent;
    border: none;
    color: map-get($colors, "brand-primary-500");
  }
}
</style>
