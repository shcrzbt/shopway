<script setup lang="ts">
import { ContractListTableModule } from "../modules/contract-list-table"
import type { TabsProps } from "naive-ui"
import { NSpace, NTab, NTabs } from "naive-ui"
import { ref } from "vue"
import { useI18n } from "vue-i18n"
import { MainPageHeader } from "#shared/components/main"

const { t } = useI18n()

const tabs = ref<string[]>(["all", "inactive", "active", "moderation", "overdue", "rejected", "closed"])

const NTabsThemeOverrides: NonNullable<TabsProps["themeOverrides"]> = {
  tabGapMediumBar: "2.4rem",
  tabFontSizeMedium: "1.4rem",
  tabFontWeight: "600",
  tabFontWeightActive: "600",
  tabPaddingMediumBar: "1.4rem 0",
  barColor: "var(--text-primary)",
  tabTextColorBar: "var(--text-secondary)",
  tabTextColorActiveBar: "var(--text-primary)"
}

const currentTab = ref<string | number | undefined>("all")
</script>

<template>
  <div class="contract-list container container-xl">
    <MainPageHeader :title="$route.meta.pageTitle" />
    <n-space :size="32" item-style="width:100%" style="margin-top: -2.4rem">
      <n-tabs v-model:value="currentTab" :theme-overrides="NTabsThemeOverrides">
        <n-tab v-for="(tab, i) in tabs" :name="tab" :key="i">{{ t("product.list.statuses." + tab) }}</n-tab>
      </n-tabs>
      <contract-list-table-module />
    </n-space>
  </div>
</template>

<style scoped lang="scss"></style>
