<script setup lang="ts">
import { PlusIcon, TrashIcon } from "@/shared/components/icons"
import { NButton, NCheckbox, NForm, NFormItem, NH2, NIcon, NInput, NInputNumber, NSelect, NSpace, NTreeSelect } from "naive-ui"
import { IEmits, IProps } from "../types"
import useModule from "./useModule"
import { SearchCategoryOptionLabel, TreeSelectLabel } from "../components"
const props = defineProps<IProps>()
const emits = defineEmits<IEmits>()

const {
  formRef,
  formRules,
  searchState,
  unitOptions,
  productState,
  onTryToAddProduct,
  onLoadChildCategory,
  onFetchCategoryByName,
  treeSelectCategoryOptions,
  onSelectSearchedCategory
} = useModule(props, emits)
</script>

<template>
  <n-form
    ref="formRef"
    :rules="formRules"
    :model="productState"
    label-placement="left"
    label-width="15rem"
    :label-align="'left'"
    :disabled="props.isDisabled"
    @submit.prevent="onTryToAddProduct"
    :show-require-mark="false"
  >
    <n-space justify="space-between">
      <n-h2>Первый товар</n-h2>
      <n-icon size="18" color="var(--grey-500)"><TrashIcon /></n-icon>
    </n-space>

    <n-form-item label="Поиск" label-placement="left" :theme-overrides="{ labelHeightMedium: '4.2rem' }">
      <n-select
        @update:value="onSelectSearchedCategory"
        placeholder="Название, категория или ИКПУ"
        filterable
        :options="searchState.options"
        :loading="searchState.loading"
        clearable
        remote
        @search="onFetchCategoryByName"
        :render-label="SearchCategoryOptionLabel"
        label-field="title"
        value-field="id"
      />
    </n-form-item>

    <n-form-item label="Категория" label-placement="left" path="category">
      <n-tree-select
        :disabled="!!searchState.value && !!productState.category"
        v-model:value="productState.category"
        check-strategy="parent"
        clearable
        virtual-scroll
        :show-path="true"
        :cascade="true"
        :options="treeSelectCategoryOptions"
        @load="onLoadChildCategory"
        block-line
        :render-label="TreeSelectLabel"
      />
    </n-form-item>

    <n-form-item label="Код маркировки" label-placement="left" :theme-overrides="{ labelHeightMedium: '4.2rem' }" path="label">
      <n-input v-model:value="productState.label" />
    </n-form-item>

    <n-form-item label="Наименование" label-placement="left" :theme-overrides="{ labelHeightMedium: '4.2rem' }" path="name">
      <n-input v-model:value="productState.name" />
    </n-form-item>

    <n-space :wrap-item="false" :wrap="false" style="gap: 1rem; width: 100%">
      <n-form-item label="Количество" label-placement="left" path="count" style="width: 100%">
        <n-select
          placeholder="Ед.измерения"
          v-model:value="productState.unit_id"
          :options="unitOptions"
          label-field="title"
          value-field="id"
        />
      </n-form-item>
      <n-form-item path="amount">
        <n-input-number v-model:value="productState.amount" />
      </n-form-item>
    </n-space>

    <n-form-item label="Цена и сумма, сум" label-placement="left" path="price">
      <n-space :wrap-item="false" :wrap="false" style="gap: 1rem; width: 100%">
        <n-input placeholder="Цена" v-model:value="productState.price" />
        <n-input
          placeholder="Сумма"
          :value="productState.price && productState.amount ? String(productState.price! * productState.amount!) : null"
          disabled
        />
      </n-space>
    </n-form-item>

    <n-form-item v-if="!productState.isMobileCategory" label="IMEI" label-placement="left">
      <n-input v-model:value="productState.original_name" />
    </n-form-item>

    <n-form-item label="Уточнить данные" label-placement="left">
      <n-checkbox v-model:checked="productState.isTruthWorthy" />
    </n-form-item>

    <n-form-item v-if="productState.isTruthWorthy" label="Наименование" label-placement="left">
      <n-input v-model:value="productState.original_name" />
    </n-form-item>

    <n-form-item v-if="productState.isTruthWorthy && productState.isMobileCategory" label="IMEI" label-placement="left">
      <n-input v-model:value="productState.original_imei" />
    </n-form-item>

    <n-form-item label=" " v-if="!props.isDisabled">
      <n-button round style="width: 100%" tertiary :render-icon="PlusIcon" attr-type="submit">Добавить новый товар</n-button>
    </n-form-item>
  </n-form>
</template>

<style scoped></style>
