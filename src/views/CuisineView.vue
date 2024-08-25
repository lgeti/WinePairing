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
    <div class="h-screen flex flex-col ">
        <h1 class="font-mono text-9xl text-center m-9">Get a Wine pairing based on the cuisine:</h1>
        
        <form v-on:submit.prevent="getWinePairing">
            <label for="price" class="block font-medium leading-6 text-gray-900 font-mono text-5xl text-center my-24">Insert a <b>cuisine</b>, down below <b>vvv</b></label>
            <div class="m-4 shadow-sm flex justify-center items-center">
                <input ref="inputRef" type="text" name="input" v-model="input" class="w-1/4 py-4 pl-4 pr-30 font-mono text-gray-900 rounded-l-md" :placeholder="placeholder === 'Cuisine' ? 'Italian' : placeholder === 'Dish' ? 'Spaghetti Carbonara' : 'Salmon'" defaultValue="placeholder"/>
                <button type="submit" class="rounded-r-md bg-red-950 text-gray-200 py-4 pl-4 pr-4 font-mono">Get Wine Pairing</button>
            </div>
        </form>

        <div v-if="trn" class="relative flex flex-col items-center m-32">
            <h3 class="text-secondary-100 text-4xl font-bold text-center rounded-lg bg-primary-200 p-4">Wine Pairing:</h3>

            <div class="p-10 m-5 bg-primary-500 rounded-xl">
                <div>
                    <h3 class="text-secondary-100 text-2xl font-bold">{{ data.pairingText ? data.pairingText : 'Sorry, we have no results for ' + input }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>