<script lang="ts" setup>
import { NotFilledStarIcon, StarIcon } from "../icons"

withDefaults(
  defineProps<{
    value: number
    count?: number
    ratings?: number
    type?: "inline" | "with-ratings"
  }>(),
  {
    count: 5,
    type: "inline",
    ratings: 0
  }
)
</script>

<template>
  <div v-if="type === 'with-ratings'" class="rating">
    <Component :is="value >= index ? StarIcon : NotFilledStarIcon" v-for="index in count" :key="index" />

    <p v-if="value" class="rating__label">
      <span>{{ `${value}.0/${count}.0` }}</span> &nbsp;
      <span v-if="ratings">({{ ratings }} оценок)</span>
    </p>
  </div>

  <div v-else class="rating-inline">
    {{ value ? `${value}/5` : "" }}
    <div class="rating-inline__stars">
      <StarIcon v-for="(_, index) in value" :key="index" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rating {
  &__label {
    @include font(t10);
    color: map-get($colors, "text-secondary");
  }
}

.rating-inline {
  display: flex;
  align-items: center;
  @include font(s14);
  gap: 8px;

  &__stars {
    display: flex;
    align-items: center;
  }
}
</style>
