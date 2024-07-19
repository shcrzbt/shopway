<script setup lang="ts">
import TableExpandProductsModule from "../../table-expand-products/ui/TableExpandProductsModule.vue"
import UploadActModule from "#pages/merchant/contract/list/modules/upload-act/ui/UploadActModule.vue"
import UploadImeiModule from "#pages/merchant/contract/list/modules/upload-imei/ui/UploadImeiModule.vue"
import CancelContractModule from "#pages/merchant/contract/list/modules/cancel-contract/ui/CancelContractModule.vue"
</script>

<template>
  <div class="table-expand-content">
    <TableExpandProductsModule />
    <div class="table-expand-content__actions">
      <div class="table-expand-content__actions-left">
        <UploadActModule />
        <UploadImeiModule />
      </div>
      <div class="table-expand-content__actions-right">
        <CancelContractModule />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.table-expand-content {
  @include flex(1.6rem, column, start, start);

  &__actions {
    @include flex(1rem, row, space-between, center);
    width: 100%;

    &-left {
      @include flex(1rem, row, start, center);
    }

    &-right {
      @include flex(1rem, row, end, center);
    }
  }
}
</style>
