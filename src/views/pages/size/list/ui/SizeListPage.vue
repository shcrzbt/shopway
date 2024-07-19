<script setup lang="ts">
import { onMounted, ref } from "vue"
import type { DataTableColumns } from "naive-ui"
import { NDataTable } from "naive-ui"
import moment from "moment"
import { fetchSizeList, ISize } from "#services/size"

const loading = ref<boolean>(false)
const list = ref<ISize[]>([])

const columns: DataTableColumns<ISize> = [
  {
    title: "ID",
    key: "id"
  },
  {
    title: "Размер",
    key: "value"
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
  }
]

const getSizes = async () => {
  loading.value = true
  try {
    const response = await fetchSizeList()
    list.value = response.data
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  await getSizes()
})
</script>

<template>
  <div class="size-list">
    <n-data-table style="width: 100%" class="size-list-table" :columns="columns" :loading="loading" :data="list" />
  </div>
</template>
