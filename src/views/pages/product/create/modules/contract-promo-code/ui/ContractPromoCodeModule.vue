<script setup lang="ts">
import { NButton, NForm, NFormItem, NH3, NInput, NP, NSpace } from "naive-ui"
</script>

<template>
  <NForm label-placement="left" label-width="15rem" label-align="left">
    <NFormItem>
      <slot label>
        <div style="width: 15rem">
          <NH3 style="width: 15rem; margin-bottom: 0">Промокод</NH3>
          <NP style="margin: 0">Не обезятельно</NP>
        </div>
      </slot>

      <NSpace :wrap-item="false" :wrap="false" style="gap: 1rem; width: 100%">
        <NInput placeholder="Ввести промокод" />
        <NButton round type="primary">Проверить</NButton>
      </NSpace>
    </NFormItem>
  </NForm>
</template>

<style scoped></style>
