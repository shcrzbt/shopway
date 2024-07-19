<script setup lang="ts">
import { h, onMounted, ref } from "vue"
import type { DataTableColumns } from "naive-ui"
import { NAvatar, NDataTable, NTag } from "naive-ui"
import { fetchShopList, IShop } from "#services/shop"
import { phoneFormat } from "#shared/utils/functions"
import moment from "moment"

const loading = ref<boolean>(false)
const list = ref<IShop[]>([])

const columns: DataTableColumns<IShop> = [
  {
    key: "avatar",
    width: 32,
    render: () =>
      h(NAvatar, {
        round: true,
        size: 32,
        src: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      })
  },
  {
    title: "ID",
    key: "id"
  },
  {
    title: "Наименование",
    key: "name"
  },
  {
    title: "Номер телефона",
    key: "phone",
    render: row => phoneFormat(row.phone)
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

const getShops = async () => {
  loading.value = true
  try {
    const response = await fetchShopList()
    list.value = response.data
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  await getShops()
})
</script>

<template>
  <div class="shop-list">
    <n-data-table style="width: 100%" class="shop-list-table" :columns="columns" :loading="loading" :data="list" />
  </div>
</template>
