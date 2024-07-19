<script setup lang="ts">
import { NDivider } from "naive-ui"
import { ContractCardModule } from "../modules/contract-card"
import { ContractCalculationCost } from "../modules/contract-calculation-cost"
import { ContractBonusModule } from "../modules/contract-bonus"
import { ContractUserInfoModule } from "../modules/contract-user-info"
import { ContractPromoCodeModule } from "../modules/contract-promo-code"
import usePage from "./usePage"

const { product, products, onAddProduct, onRemoveProduct, onCalculateByPeriod, onCheckPromocode } = usePage()
</script>

<template>
  <ContractUserInfoModule />

  <div class="contract-create container">
    <template v-if="products">
      <ContractCardModule v-for="product in products" :key="product.id" :is-disabled="true" />
    </template>

    <ContractCardModule @handleAddProduct="onAddProduct" />

    <n-divider />

    <ContractCalculationCost />

    <n-divider />

    <ContractPromoCodeModule />

    <n-divider />

    <ContractBonusModule />
  </div>
</template>

<style scoped lang="scss">
.contract-create {
  padding: 0 2rem 4rem 2rem;
}
</style>
