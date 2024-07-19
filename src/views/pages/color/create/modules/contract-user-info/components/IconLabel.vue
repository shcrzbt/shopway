<script setup lang="ts">
import { NIcon, NP, NSpace } from "naive-ui"

interface IProps {
  title: string
  subtitle: string
  icon: () => JSX.Element
  iconBackground?: string
}

const props = defineProps<IProps>()
</script>

<template>
  <div class="icon">
    <n-space :wrap-item="false">
      <n-space :wrap-item="false" align="center">
        <div class="icon__box" :style="`background-color: ${props.iconBackground}`">
          <n-icon size="20" border-radius="50%">
            <slot name="icon">
              <props.icon />
            </slot>
          </n-icon>
        </div>

        <div>
          <n-p class="icon__title">{{ props.title }}</n-p>
          <n-p class="icon__subtitle">{{ props.subtitle }}</n-p>
        </div>
      </n-space>
    </n-space>
  </div>
</template>

<style scoped lang="scss">
.icon {
  &__box {
    width: 4.4rem;
    height: 4.4rem;
    @include flex(0, 0, center, center);
    border-radius: 1.2rem;
    background: var(--grey-50);
  }

  &__title {
    @include font("t16");
    font-weight: 500 !important;
    color: map-get($colors, grey-500);
  }

  &__subtitle {
    @include font("t16");
    font-weight: 500 !important;
  }
}
</style>
