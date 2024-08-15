<script setup>
import Group from '@/components/Group.vue';

const items = [
    {  
        title: "Cuisine",
        description: "Find the perfect wine pairing for your favorite cuisine",
        example: "Italian"
    },
    {
        title: "Dish",
        description: "Discover the ideal wine to complement your favorite dishes.",
        example: "Spaghetti Carbonara"
    },
    {
        title: "Ingredient",
        description: "Explore wine pairings based on specific ingredients.",
        example: "Salmon"
    }
];
</script>

<template>
    <div class="flex flex-row justify-center bg-primary-100 pb-4">
        <Group v-for="item in items" :item="item" class="w-1/3 m-2" />
    </div>
</template>