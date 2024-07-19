<script setup lang="ts">
import { h, onMounted, ref } from "vue"
import type { DataTableColumns } from "naive-ui"
import { NAvatar, NDataTable } from "naive-ui"
import moment from "moment"
import { fetchColorList, IColor } from "#services/color"
import { useI18n } from "vue-i18n"

const { locale: appLocale } = useI18n()
const loading = ref<boolean>(false)
const list = ref<IColor[]>([])

const columns: DataTableColumns<IColor> = [
  {
    title: "ID",
    key: "id"
  },
  {
    title: "Наименование",
    key: "value_ru",
    render: row => (appLocale.value === "uz" ? row.value_uz : row.value_ru)
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

const getColors = async () => {
  loading.value = true
  try {
    const response = await fetchColorList()
    list.value = response.data
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  await getColors()
})
</script>

<template>
  <div class="shop-list">
    <n-data-table style="width: 100%" class="shop-list-table" :columns="columns" :loading="loading" :data="list" />
  </div>
</template>
