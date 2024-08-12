<script setup lang="ts">
import { RouterView } from 'vue-router'
import About from './components/About.vue'


</script>

<template>
  <RouterView />

  <div id="app">
    <Hero title="Hello" text="This is a test" />
  </div>
  <h1 class="text-2xl">Test</h1>
</template>

