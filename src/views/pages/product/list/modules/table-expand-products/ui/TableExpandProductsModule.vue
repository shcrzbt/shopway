<script setup lang="ts">
import type { TableProps } from "naive-ui"
import { NTable } from "naive-ui"

const NTableThemeOverrides: NonNullable<TableProps["themeOverrides"]> = {
  tdPaddingMedium: "1.6rem .8rem",
  thPaddingMedium: "1.6rem .8rem",
  thColor: "transparent",
  borderRadius: "none"
}
</script>

<template>
  <n-table :theme-overrides="NTableThemeOverrides" :bordered="false" class="contract-list-table-content" :single-line="true">
    <thead>
      <tr>
        <th>{{ $t("product.list.captions.products") }}</th>
        <th>{{ $t("common.quantityShort") }}</th>
        <th>{{ $t("common.priceOrg") }}, {{ $t("common.uzs") }}</th>
        <th>{{ $t("common.sum") }}, {{ $t("common.uzs") }}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Intel-core i3 10100F 4C\8T 3.6-4,3 GHz, 6M, TRAY, LGA1200, Comet Lake</td>
        <td>1 {{ $t("common.units.item") }}</td>
        <td>1 000 000</td>
        <td>1 000 000</td>
      </tr>
      <tr>
        <td>Magic mouse v2.0 silver</td>
        <td>1 {{ $t("common.units.item") }}</td>
        <td>1 000 000</td>
        <td>1 000 000</td>
      </tr>
      <tr>
        <th colspan="2">Итого</th>
        <th>2 000 000</th>
        <th>2 000 000</th>
      </tr>
    </tbody>
  </n-table>
</template>
<style lang="scss">
.container {
  max-width: 95rem !important;
}
</style>
<style scoped lang="scss">
.contract-list-table-content {
  margin: 0.4rem 4rem;
  width: calc(100% - 8rem);

  thead th {
    padding-top: 0;

    &:not(:first-of-type) {
      text-align: right;
    }
  }

  tbody {
    th {
      border: none;

      &:not(:first-of-type) {
        text-align: right;
      }
    }

    td:not(:first-of-type) {
      text-align: right;
    }
  }

  th {
    @include font("h16");
    text-align: left;
    font-weight: 600 !important;

    &:first-of-type {
      padding-left: 0;
    }

    &:last-of-type {
      padding-right: 0;
    }
  }

  td {
    &:first-of-type {
      padding-left: 0;
    }

    &:last-of-type {
      padding-right: 0;
    }
  }
}

:deep(.n-table) {
  width: 3.2rem;
  height: 3.2rem;
}
</style>
