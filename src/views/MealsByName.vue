<template>
    <div class="p-8">
        <input 
            type="text" 
            v-model="keyword"
            class="rounded border-2 border-gray-200  w-full" 
            placeholder="Search for meals"
            @change="searchMeals"
        >

    </div>
    <div>
        
       

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
            <div v-for="meal of meals.meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">

                <router-link to="/">

                    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-48 object-cover">
                </router-link>
              
                <div class="p-3">
                    <h3 class=" font-bold">{{ meal.strMeal }}</h3>
                    <p class="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos aliquam, quidem qui modi ex tempore?</p>
                    <div class="">
                        <a :href="meal.strYoutube" target="_blank" class="px-3 py-2 rounded bg-red-500 border border-red-600 hover:bg-red-600 text-white transition-colors" >Youtube</a>
                        <!-- <router-link to="/" class="px-3 py-2 rounded bg-red-500 border border-red-600 hover:bg-red-600 text-white transition-colors" >
                            View
                        </router-link> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';
import store from '../store';
import { useRoute } from 'vue-router';


const keyword = ref('')
const route = useRoute()

const meals = computed(() => store.state.searchedMeals)

const searchMeals = () => {
    store.dispatch('searchMeals', keyword.value)
}

onMounted(() => {
keyword.value = route.params.name
    if(keyword.value){
        searchMeals()
    }
})

</script>