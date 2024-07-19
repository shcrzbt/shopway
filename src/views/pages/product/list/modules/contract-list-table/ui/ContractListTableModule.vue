<script setup lang="ts">
import { h, onMounted, ref } from "vue"
import type { DataTableColumns, DataTableProps } from "naive-ui"
import { NAvatar, NDataTable } from "naive-ui"
import { AddClientPhotoModule } from "#pages/product/list/modules/add-client-photo"
import { TableExpandTrigger, TableRowTitle } from "#pages/product/list/modules/contract-list-table/components"
import { fetchProductList } from "#services/product/product.service"
type RowData = {
  key: number
  name: string
  age: number
  contractNumber: number
  contractDate: string
  contractBonus: string
  address: string
  tags: string[]
}

const expandedRowKeys = ref<Array<string | number>>([])
const loading = ref<boolean>(false)


const NDataTableThemeOverrides: NonNullable<DataTableProps["themeOverrides"]> = {
  tdPaddingMedium: "1.6rem .8rem",
  tdColorHover: "transparent",
  borderRadius: "none"
}

const renderExpandIcon = ({ expanded }: { expanded: boolean }) => h(TableExpandTrigger, { expanded })

const columns: DataTableColumns<RowData> = [
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
    key: "name",
    render: row => h(TableRowTitle, { row })
  },
  {
    key: "tags",
    render: row => (expandedRowKeys.value.includes(row.key) ? h(AddClientPhotoModule) : false)
  }
  // {
  //   type: "expand",
  //   expandable: row => row.name !== "Jim Green",
  //   renderExpand: () => h(TableExpandContentModule)
  // }
]

const data: RowData[] = [
  {
    key: 0,
    name: "John Brown",
    age: 32,
    contractNumber: 420,
    contractDate: "28.04.2024",
    contractBonus: "320 276",
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: 1,
    name: "Jim Green",
    age: 42,
    contractNumber: 420,
    contractDate: "28.04.2024",
    contractBonus: "320 276",
    address: "London No. 1 Lake Park",
    tags: ["wow"]
  },
  {
    key: 2,
    name: "Joe Black",
    age: 32,
    contractNumber: 420,
    contractDate: "28.04.2024",
    contractBonus: "320 276",
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
]

const getProducts = async () => {
  loading.value = true
  try {
    const response = await fetchProductList()
    console.log(response, 'responseresponse')
  } finally {
    loading.value = false

  }
}

onMounted(async () => {
  await getProducts()
})
</script>

<template>
  <n-data-table
    style="width: 100%"
    :render-expand-icon="renderExpandIcon"
    :theme-overrides="NDataTableThemeOverrides"
    class="contract-list-table"
    v-model:expanded-row-keys="expandedRowKeys"
    :columns="columns"
    :data="data"
    default-expand-all
  />
</template>

<style lang="scss">
.container {
  max-width: 95rem !important;
}
</style>

<style scoped lang="scss">
.contract-list-table {
  margin: -1.6rem 0;
}

:deep(.n-data-table-td:first-of-type) {
  padding-left: 0;
}

:deep(.n-data-table-td:last-of-type) {
  padding-right: 0;
}

:deep(.n-data-table-wrapper) {
  border: none !important;
}

:deep(.n-data-table-thead) {
  display: none;
}

:deep(.n-data-table-expand-trigger) {
  width: 3.2rem;
  height: 3.2rem;
}
</style>
