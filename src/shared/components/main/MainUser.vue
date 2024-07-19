<script lang="ts" setup>
import { NImage } from "naive-ui"

defineProps<{
  fullName?: string
  image?: string
  phone?: string
  id?: number | string
}>()
</script>

<template>
  <div class="user">
    <NImage
      class="user__avatar"
      height="64"
      object-fit="cover"
      preview-disabled
      src="/images/uploader-image-placeholder.png"
      width="64"
    />
    <div class="user__info">
      <div class="user__fio">Alexsander Sandarchuk</div>
      <div class="user__contacts">
        <div>+998 91 234 59 59</div>
        <div>ID 288650</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user {
  display: flex;
  align-items: center;
  gap: 16px;

  &__avatar {
    overflow: hidden;
    border-radius: 100%;
  }

  &__fio {
    @include font(h14);
    margin-bottom: 4px;
  }

  &__contacts {
    @include font(t14);
    line-height: 2.24rem !important;
    color: var(--text-secondary);
  }
}
</style>
