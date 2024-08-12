<script setup>
import About from '@/components/About.vue';

</script>

<template>
    <About title="Wine Pairing" text="Welcome to our website! We provide wine recommendations based on cuisine, food, or ingredient." />
    <Carousel>
        <CarouselItem name="Cuisine" description="Find the perfect wine pairing for your favorite cuisine" />
        <CarouselItem name="Dish" description="Discover the ideal wine to complement your favorite dishes." />
        <CarouselItem name="Ingredient" description="Explore wine pairings based on specific ingredients." />
    </Carousel>
    <RandomWine />
</template>