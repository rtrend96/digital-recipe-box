import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import RecipeForm from '../views/recipeForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/recipeForm',
      name: 'Add-Recipe',
      component: RecipeForm
    }
  ]
})

export default router
