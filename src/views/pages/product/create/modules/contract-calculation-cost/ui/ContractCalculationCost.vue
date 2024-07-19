<script setup lang="ts">
import { NForm, NFormItem, NRadioGroup, NRadio, NH3 } from "naive-ui"
</script>

<template>
  <n-form label-placement="left" label-width="15rem" label-align="center">
    <n-form-item>
      <slot label>
        <n-h3 style="width: 15rem">Расчет стоимости</n-h3>
      </slot>

      <n-radio-group style="display: flex; flex-direction: column; gap: 1rem">
        <n-radio label="radio" />
        <n-radio label="radio" />
        <n-radio label="radio" />
      </n-radio-group>
    </n-form-item>
  </n-form>
</template>

<style scoped></style>
