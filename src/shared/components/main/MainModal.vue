<script lang="ts" setup>
import { NCard, NIcon, NModal } from "naive-ui"
import { XIconThin } from "#shared/components/icons/svg"

const showModal = defineModel<boolean>("show")

defineProps<{
  title: string
}>()
</script>

<template>
  <NModal v-model:show="showModal" class="main-modal" closable>
    <NCard class="main-modal__card">
      <NIcon :size="24" class="main-modal__close-icon" @click="showModal = false">
        <XIconThin />
      </NIcon>

      <h2 class="main-modal__title">{{ title }}</h2>

      <div class="main-modal__content">
        <slot></slot>
      </div>
    </NCard>
  </NModal>
</template>

<style lang="scss" scoped>
.main-modal {
  &__card {
    position: relative;
    max-width: 41.3rem;
    border-radius: 1.6rem;
    padding: inherit 2.4rem 2.4rem;
  }

  &__close-icon {
    position: absolute;
    right: 1.2rem;
    top: 1.2rem;

    svg {
      width: 2rem;
      height: 2rem;
      cursor: pointer;
    }
  }

  &__title {
    @include font(h24);
    text-align: center;
    margin: 2rem auto 3.2rem;
  }

  &__content {
    margin: 1.6rem 0 2rem;
  }
}
</style>
