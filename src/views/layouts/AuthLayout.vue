<script lang="ts" setup>
import { NLayout, NLayoutContent } from "naive-ui"
import { MainHeaderEmpty } from "@/shared/components/main"
</script>

<template>
  <n-layout>
    <MainHeaderEmpty />

    <n-layout :native-scrollbar="false">
      <n-layout-content :content-style="{ height: 'calc(100svh - 6.6rem)' }">
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
