<script setup lang="ts">
import { computed } from "vue"

const props = defineProps({
  logo: String,
  name: String
})

const setLogo = computed(() => ({
  backgroundImage: `url(${props.logo})`,
}))
</script>

<template>
  <li :style="setLogo">{{ name }}</li>
</template>

<style scoped>
  li {
    -webkit-font-smoothing: subpixel-antialiased;
    user-select: none;
    list-style: none;
    font-weight: 700;
    box-sizing: border-box;
    margin: 0;
    -webkit-text-size-adjust: none;
    padding: 34px 0 4px;
    min-width: 58px;
    text-align: center;
    font-size: 12px;
    color: #595959;
    border-bottom: 1px solid #d6e9f4;
    cursor: pointer;
    font-family: EntryFont,NanumGothic,Nanum Gothic, sans-serif;
    line-height: 14px;
    background-size: 32px auto;
    background-position: 50% 4px;
    position: relative;
    background-color: #ecf8ff;
    z-index: 5;
    background-repeat: no-repeat;
  }
</style>