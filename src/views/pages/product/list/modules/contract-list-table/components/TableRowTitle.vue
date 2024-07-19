<script setup lang="ts">
defineProps<{
  row: {
    key: number
    name: string
    age: number
    contractNumber: number
    contractDate: string
    contractBonus: string
    address: string
    tags: string[]
  }
}>()
</script>

<template>
  <div v-if="row" class="table-row-title">
    <div class="title__contract-no">№ {{ row.contractNumber }}</div>
    <span class="title__dot">•</span>
    <div class="title__contract-date">{{ row.contractDate }}</div>
    <span class="title__dot">•</span>
    <div class="title__contract-bonus">{{ $t("product.list.captions.bonuses", { count: row.contractBonus }) }}</div>
  </div>
</template>

<style scoped lang="scss">
.table-row-title {
  @include flex(0.8rem, row, start, center);
}

.title {
  &__contract-no {
    @include font("h16");
    font-weight: bold;
    color: var(--text-primary);
  }

  &__dot,
  &__contract-date {
    @include font("t16");
    font-weight: bold;
    color: var(--text-secondary);
  }

  &__contract-bonus {
    @include font("t16");
    font-weight: bold;
    color: var(--brand-primary-500);
  }
}
</style>
