<script setup>
import { RouterLink } from 'vue-router';
// import { defineProps } from 'vue';


const props = defineProps({
    item: Object
});

// console.log(item);

</script>

<template>
    <div class="bg-primary-500 rounded-xl shadow-md relative">
        <div class="p-4">
            <div class="mb-3">
                <h3 class="text-secondary-100 text-xl font-bold">{{ item.title }}</h3>
            </div>

            <h3 class="text-gray-400 mb-2">{{ item.description }}</h3>

            <div class="border border-gray-100 mb-5"></div>

            <div class="flex flex-col lg:flex-row justify-between items-center mb-1.5">
                <div class="text-gray-200">
                    Example: <span>{{ item.example }}</span>
                </div>
                <RouterLink :to="'/' + item.title.toLowerCase()"
                    class="h-[36px] bg-primary-200 hover:bg-primary-300 text-secondary-100 px-4 py-2 rounded-lg text-center text-sm">
                    Pair it
                </RouterLink>
            </div>
        </div>
    </div>
</template>