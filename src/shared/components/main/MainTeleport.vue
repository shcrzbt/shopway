<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue"

const props = defineProps({
  to: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
const isMounted = ref(false)
onMounted(() => {
  isMounted.value = true
})
onBeforeUnmount(() => {
  isMounted.value = false
})
</script>
<template>
  <Teleport v-if="isMounted" :to="props.to" :disabled="props.disabled">
    <slot></slot>
  </Teleport>
</template>
