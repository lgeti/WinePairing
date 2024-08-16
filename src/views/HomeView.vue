<script setup>
import About from '@/components/About.vue';
import Groups from '@/components/Groups.vue';
import RandomRecommendation from '@/components/RandomRecommendation.vue';

</script>

<template>
    <div class="flex flex-col justify-between h-screen">
        <About title="Wine Pairing" text="Welcome to our website! We provide wine recommendations based on cuisine, food, or ingredient." />
        <Groups />
        <RandomRecommendation />
    </div>
</template>

