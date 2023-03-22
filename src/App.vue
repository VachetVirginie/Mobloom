<template>
  <div>
    <HeaderBase />
    <RouterView />
  </div>
</template>

<script setup>
import HeaderBase from "@/components/Base/HeaderBase";
</script>

<style>
html {
  scroll-behavior: smooth;
  background-color: #0052E6;
}
</style>
