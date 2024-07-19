<script setup lang="ts">
import { NButton, NGrid, NGridItem, NH3, NH4, NInput, NInputGroupLabel, NP, NSelect } from "naive-ui"
</script>

<template>
  <div class="contract-create-type">
    <div class="contract-create-type__container">
      <n-h3 class="contract-create-type__title">Выберите, как хотите создать договор</n-h3>
      <n-p class="contract-create-type__subtitle">Количество ваших бонусов не зависит от варианта</n-p>

      <NGrid cols="4" x-gap="24" y-gap="24">
        <NGridItem span="2">
          <div class="client-qr-code">
            <NH4 class="client-qr-code__title">Показать QR-код клиенту</NH4>
            <NP class="client-qr-code__subtitle">Быстрее для клиента. Продажа товаров происходит через учетную программу магазина.</NP>
            <div class="client-qr-code__qr"></div>
            <NSelect />
          </div>
        </NGridItem>

        <NGridItem span="2">
          <div class="client-phone">
            <NH4 class="client-phone__title">По номеру телефона</NH4>
            <NP class="client-phone__subtitle">Нужно будет добавить товары в этом интерфейсе и сделать фото клиента с ними.</NP>
            <!-- <n-input-group style="display: flex; margin-bottom: 1.6rem">
              <n-input-group-label style="border-radius: 1.6rem 0 0 1.6rem">+998</n-input-group-label>
              <n-input style="border-radius: 0 1.6rem 1.6rem 0" />
            </n-input-group> -->
            <n-input style="margin-bottom: 1.6rem">
              <template #prefix>+9989</template>
            </n-input>
            <NButton type="primary" round style="width: 100%">Найти покупателя</NButton>
          </div>
        </NGridItem>
      </NGrid>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contract-create-type {
  margin-top: 12rem;
  &__container {
    max-width: 78rem;
    margin: 0 auto;
  }

  &__title {
    text-align: center;
  }

  &__subtitle {
    text-align: center;
    margin-bottom: 4rem;
  }
}

.client-qr-code {
  background-color: map-get($colors, grey-50);
  padding: 2.4rem;
  border-radius: 2.4rem;
  max-height: 46rem;
  height: 100%;

  &__title {
    text-align: center;
    margin-bottom: 1.2rem;
  }

  &__subtitle {
    text-align: center;
    margin-bottom: 3.2rem;
  }

  &__qr {
    height: 20rem;
    width: 20rem;
    margin-bottom: 3.2rem;
  }
}

.client-phone {
  background-color: map-get($colors, grey-50);
  padding: 2.4rem;
  border-radius: 2.4rem;
  max-height: 46rem;
  height: 100%;

  &__title {
    text-align: center;
    margin-bottom: 1.2rem;
  }

  &__subtitle {
    text-align: center;
    margin-bottom: 3.2rem;
  }

}
</style>
