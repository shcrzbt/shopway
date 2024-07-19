<script lang="ts" setup>
import { phoneFormat } from "@/shared/utils/functions"
import { HeadphoneIcon } from "#icons/svg"

defineProps<{
  phone?: string
}>()
</script>

<template>
  <a :href="`tel:${phone || '998712419666'}`" class="phone">
    <span>{{ phoneFormat(phone || "998712419666") }}</span>
  </a>
</template>

<style lang="scss" scoped>
.phone {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  @include font(s14);
  color: #919396;
}
</style>
