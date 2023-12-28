<script setup>
import { useDraggable } from '@vueuse/core'
import { UseDraggable } from "@vueuse/components"
</script>

<template>
  <UseDraggable class="block" v-slot="{ x, y }" :initial-value="{ x: 10, y: 10 }">
    Drag me! I am at {{ x }}, {{ y }}
  </UseDraggable>
</template>

<style>
.block {
  position: fixed;
}
</style>
