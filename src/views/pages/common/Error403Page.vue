<script lang="ts" setup>
import { NButton, NIcon, NResult } from "naive-ui"
import { XIconThin } from "@/shared/components/icons/svg"
</script>

<template>
  <div class="custom-result">
    <n-result description="У вас нет разрешения на доступ к этой странице" status="403" title="403. Отказано в доступе">
      <template #icon>
        <div class="result-icon">
          <n-icon size="63">
            <x-icon-thin />
          </n-icon>
        </div>
      </template>
      <template #footer>
        <n-button type="primary" @click="$router.back()">Вернуться назад</n-button>
      </template>
    </n-result>
  </div>
</template>

<style lang="scss" scoped>
.custom-result {
  height: calc(100svh - 30rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .result-icon {
    @include flex(0, row, center, center);

    color: var(--text-white);
    width: 11.2rem;
    height: 11.2rem;
    border-radius: 50%;
    background-color: var(--danger-500);
  }

  :deep(.n-result .n-result-header .n-result-header__title) {
    @include font("h20");

    color: var(--text-primary);
    margin-top: 2.4rem;
  }

  :deep(.n-result .n-result-header .n-result-header__description) {
    @include font("t14");

    color: var(--text-secondary);
    margin-top: 0.8rem;
  }
}
</style>
