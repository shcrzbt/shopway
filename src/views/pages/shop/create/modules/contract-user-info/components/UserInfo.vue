<script setup lang="ts">
import { NSpace, NImage, NP } from "naive-ui"
</script>

<template>
  <n-space align="center" class="user-avatar">
    <img class="user-avatar__img" src="/user-avatar-placeholder.png" />
    <!-- <n-image class="user-avatar__img" src="/user-avatar-placeholder.png" /> -->
    <div>
      <n-p class="user-avatar__phone m-0">+998 90 800-80-50</n-p>
      <n-p class="user-avatar__name m-0"><strong>Iaroslav Tugolukovski</strong></n-p>
    </div>
  </n-space>
</template>

<style scoped lang="scss">
.user-avatar {
  &__img {
    height: 8rem;
    width: 8rem;
    border-radius: 50%;
    object-fit: cover;
  }

  &__phone {
    @include font("t16");
    color: map-get($colors, grey-500);
  }

  &__name {
    @include font("t16");
    font-weight: 500;
  }
}
</style>
