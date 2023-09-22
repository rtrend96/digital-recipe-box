<template>
  <div>{{ store.detailRecipes.recipeName }}</div>
  <div>
    {{ store.detailRecipes.category }}
  </div>
  <div>
    {{ store.detailRecipes.mealType }}
  </div>
  <div>
    {{ store.detailRecipes.cuisineType }}
  </div>
  <div>
    {{ store.detailRecipes.TotalTime }}
  </div>
  <div>
    {{ store.detailRecipes.cuisineType }}
  </div>
  <div>
    {{ store.detailRecipes.servingSize }}
  </div>
  <div>
    {{ store.detailRecipes.Ingredients[0].food }}
    {{ store.detailRecipes.Ingredients[0].quantity }}
    {{ store.detailRecipes.Ingredients[0].text }}
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { recipeDetailsStore } from '../stores/recipeModule'

export default defineComponent({
  setup() {
    const store = recipeDetailsStore()
    return { store }
  }
})
</script>
<style></style>
