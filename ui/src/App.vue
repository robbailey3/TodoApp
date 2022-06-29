<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header class="text-center">
    <h1 class="text-6xl font-bold mt-4">Tasks</h1>
  </header>

  <RouterView />
</template>

<style></style>
