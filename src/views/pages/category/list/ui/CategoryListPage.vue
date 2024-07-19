<script setup lang="ts">
import { h, onMounted, ref } from "vue"
import type { DataTableColumns } from "naive-ui"
import { NDataTable, NTag } from "naive-ui"
import moment from "moment"
import { fetchCategoryList, ICategory } from "#services/category"

const loading = ref<boolean>(false)
const list = ref<ICategory[]>([])

const columns: DataTableColumns<ICategory> = [
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
    title: "SLUG",
    key: "slug"
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
    key: "is_active",
    render: row => {
      if (row.is_active) {
        return h(NTag, { type: "success" }, { default: () => "Активен" })
      }

      return h(NTag, { type: "error" }, { default: () => "Не активен" })
    }
  }
]

const getCategories = async () => {
  loading.value = true
  try {
    const response = await fetchCategoryList()
    list.value = response.data
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  await getCategories()
})
</script>

<template>
  <div class="category-list">
    <n-data-table style="width: 100%" class="category-list-table" :columns="columns" :loading="loading" :data="list" />
  </div>
</template>
