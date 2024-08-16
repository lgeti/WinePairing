<script setup>
import { ref } from 'vue';
import { useWineStore } from '@/stores/wineStore';

const apiKey = import.meta.env.VITE_API_KEY;

const store = useWineStore();
const randomWine = ref(null);
const buttonPressed = ref(false);

const getRandomRecommendation = async () => {
    buttonPressed.value = true;
    randomWine.value = store.getRandomWine();
    console.log(randomWine.value);
};

</script>

<template>
    <section class="bg-primary-100 py-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div class="text-center">
                <h1 class="my-4 text-2xl font-extrabold text-secondary-100 sm:text-3xl md:text-4xl">Random Recommendation</h1>
                <button @click="getRandomRecommendation" class="bg-secondary-100 text-white font-bold py-2 px-4 rounded">Get Random Recommendation</button>
                <div v-if="buttonPressed">
                    <p class="my-4 text-xl text-white">Here is a random recommendation for you!</p>
                    <p class="my-4 text-2xl text-secondary-200">{{ randomWine.type !== '' ? randomWine.type : randomWine.category }}</p>
                </div>
            </div>
        </div>
    </section>
</template>