<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { ref } from 'vue';

const route = useRoute();
const placeholder = computed(() => {
    const path = route.path;
    const lastWord = path.substring(path.lastIndexOf('/') + 1);
    const capitalizedWord = lastWord.charAt(0).toUpperCase() + lastWord.slice(1);
    return capitalizedWord;
});

const trn = ref(false);

const inputRef = ref(null);
const input = ref('');
const result = ref(null);
const data = ref();
const pairedWine = ref(null);

const API_KEY = import.meta.env.VITE_API_KEY;

const getWinePairing = async () => {
    const body = input.value !== '' ? input.value : inputRef.value.placeholder;
    console.log(body);
    const url = `https://api.spoonacular.com/food/wine/pairing?apiKey=${API_KEY}&food=${body}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        data.value = await response.json();
        result.value = data.value;
        console.log(data.value);
        pairedWine.value = data.value.pairedWines && data.value.pairedWines.length > 0 ? data.value.pairedWines[0] : 'No pairing found';
        console.log(pairedWine.value);
        trn.value = true;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }

    inputRef.value.focus();
};

</script>

<template>
    <div class="h-screen">
        <h1>Get a Wine pairing based on the cuisine:</h1>
        
        <form v-on:submit.prevent="getWinePairing">
            <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Price</label>
            <div class="relative mt-2 rounded-md shadow-sm">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                </div>
                <input ref="inputRef" type="text" name="input" v-model="input" class="block w-1/4 rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" :placeholder="placeholder === 'Cuisine' ? 'Italian' : placeholder === 'Dish' ? 'Spaghetti Carbonara' : 'Salmon'" defaultValue="placeholder"/>
                <button type="submit">Get Wine Pairing</button>
            </div>
        </form>

        <div v-if="trn" class="bg-primary-500 rounded-xl shadow-md relative">
            <div class="p-4">
                <div class="mb-3">
                    <h3 class="text-secondary-100 text-xl font-bold">{{ data.pairingText }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>