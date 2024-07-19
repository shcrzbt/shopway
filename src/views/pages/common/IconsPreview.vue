<script lang="ts" setup>
import * as icons from "#icons/svg"
</script>

<template>
  <ul class="icons" style="">
    <li v-for="(icon, index) in icons" :key="index">
      <div class="icon"><Component :is="icon" /></div>
      {{ icon.name }}
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.icons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

li {
  width: 15rem;
  height: 10rem;
  padding: 1rem;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
</style>
