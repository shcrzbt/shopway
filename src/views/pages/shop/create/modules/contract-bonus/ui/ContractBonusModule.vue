<script setup lang="ts">
import { NGrid, NGridItem, NH3 } from "naive-ui"
</script>

<template>
  <n-grid :cols="4">
    <n-grid-item :span="1"> <NH3>Ваш бонус</NH3> </n-grid-item>
    <n-grid-item :span="3"><NH3>Рассчитаем после добавления товара</NH3> </n-grid-item>
  </n-grid>
</template>

<style scoped></style>
