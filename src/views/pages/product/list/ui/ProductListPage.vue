<script setup lang="ts">
import { onMounted, ref } from "vue"
import type { DataTableColumns } from "naive-ui"
import { NDataTable } from "naive-ui"
import moment from "moment"
import { fetchProductList, IProduct } from "#services/product/product.service"

const loading = ref<boolean>(false)
const list = ref<IProduct[]>([])

const columns: DataTableColumns<IProduct> = [
  {
    title: "ID",
    key: "id"
  },
  {
    title: "Наименование",
    key: "name",
    render: row => row.translation.title
  },
  {
    title: "Штрихкод",
    key: "barcode"
  },
  {
    title: "Цена, сум",
    key: "price",
    render: row => row.price.toLocaleString()
  },
  {
    title: "Создан в",
    key: "created_at",
    render: row => moment(row.created_at).format("DD.MM.YYYY")
  },
  {
    title: "Обновлен в",
    key: "updated_at",
    render: row => moment(row.created_at).format("DD.MM.YYYY")
  },
  {
    title: "Статус",
    key: "status"
  }
]

const getProducts = async () => {
  loading.value = true
  try {
    const response = await fetchProductList()
    list.value = response.data
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  await getProducts()
})
</script>

<template>
  <div class="product-list">
    <n-data-table style="width: 100%" class="product-list-table" :columns="columns" :loading="loading" :data="list" />
  </div>
</template>
