<script setup>

defineProps({
  title: String,
  text: String
});
</script>

<template>
  <section class="bg-primary-100 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div class="text-center">
        <h1 class="my-4 text-4xl font-extrabold text-secondary-100 sm:text-5xl md:text-6xl">
          {{ title }}
        </h1>
        <p class="my-4 text-xl text-white">
          {{ text }}
        </p>
      </div>
    </div>
  </section>
</template>