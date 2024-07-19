<script setup lang="ts">
import { NSpace } from "naive-ui"
import { UserInfo, IconLabel } from "../components"
import { IconChecked, MoneyIcon } from "@/shared/components/icons"
</script>

<template>
  <transition name="slide-fade">
    <div class="user">
      <n-space justify="space-between" align="center" :wrap="true">
        <UserInfo />

        <IconLabel title="Лимит" subtitle="15 000 000 сум" :icon="MoneyIcon" />

        <IconLabel title="Перс.счет" subtitle="0 сум" :icon="MoneyIcon" />

        <IconLabel title="Статус" subtitle="Верифицирован" :icon="IconChecked" icon-background="var(--brand-green-500)" />
      </n-space>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.user {
  border-bottom: 1px solid map-get($colors, grey-default);
  min-height: 12rem;
  margin-bottom: 6.4rem;
  padding: 2rem 4.8rem;
}
</style>
