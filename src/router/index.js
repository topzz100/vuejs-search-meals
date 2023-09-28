import {  createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'
import MealsByName from '../views/MealsByName.vue'


const routes = [
    {
        path:"/",
        component: DefaultLayout,
        children: [

            {
                path:"/",
                name: "home",
                component: Home
            },
            {
                path:"/by-name/:name?",
                name: "byName",
                component: MealsByName
            },
            {
                path:"/by-letter/:letter?",
                name: "byLetter",
                component: MealsByLetter
            },
            {
                path:"/by-igredient/:ingredient?",
                name: "byIngredient",
                component: MealsByIngredient
            },
        ]
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router 

