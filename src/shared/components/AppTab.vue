<script setup lang="ts">
import { ref } from "vue"
import type { RouteRecordRaw } from "vue-router"
import { NCarousel, NCarouselItem } from "naive-ui"
import { IconDoubleLeftArrow, IconDoubleRightArrow } from "@/shared/components/icons"
import { useAuthStore } from "@/app/stores"

defineProps<{ routes: RouteRecordRaw[] }>()

const authStore = useAuthStore()

const tabCarouselRef = ref()

const onNavigate = (type: "prev" | "next") => {
  if (type === "prev") {
    tabCarouselRef.value.prev()
  } else {
    tabCarouselRef.value.next()
  }
}
</script>

<template>
  <div class="tab-card">
    <div class="carousel-buttons">
      <IconDoubleLeftArrow @click="onNavigate('prev')" />
      <IconDoubleRightArrow @click="onNavigate('next')" />
    </div>

    <NCarousel class="tab" ref="tabCarouselRef" slides-per-view="auto" :show-dots="false" :draggable="true" :loop="false">
      <NCarouselItem v-for="route in routes" :key="route.path" style="width: auto">
        <RouterLink
          v-if="authStore.user.scopes.includes(route.meta.permissionKey)"
          :to="route"
          class="tab__item"
          active-class="active"
        >
          {{ $t(route.meta.title) }}
        </RouterLink>
      </NCarouselItem>
    </NCarousel>
  </div>
</template>

<style scoped lang="scss">
.tab-card {
  margin: 2rem 0;
  background-color: map-get($colors, "bg-primary");
  padding: 1.6rem 2rem;
  border-radius: 2.4rem;
  position: relative;

  .carousel-buttons {
    @include flex($justify: space-between);
    position: absolute;
    top: 0;
    left: -0.2rem;
    right: -0.2rem;
    bottom: 0;
    visibility: hidden;
    pointer-events: none;

    @include useMediaQuery($grid-breakpoints, lg) {
      visibility: visible;
      pointer-events: auto;
    }

    svg {
      color: map-get($colors, "brand-primary-500");
      cursor: pointer;
    }
  }

  .tab {
    overflow-x: hidden;

    &__item {
      @include flex();
      @include font("s14");
      border-radius: 0.8rem;
      padding: 0.4rem 1rem;
      color: map-get($colors, "grey-300");
      margin-right: 1rem;

      &.active {
        background-color: map-get($colors, "brand-primary-500");
        color: white;
      }
    }
  }
}
</style>
