<template>
  <div class="_recipe-List-wrapper">
    <h1>All recipeList</h1>
    <recipeDetailCard />
  </div>
  <div v-show="store.showAddRecipeForm" class="_add-recipe-list">
    <formRecipe />
  </div>
  <div v-show="store.showApiRecipeForm" class="_add-recipe-list">
    <apiRecipe />
  </div>
  <div style="display: flex; gap: 20px">
    <button class="_add-recipe" @click="store.functionsShowAddRecipeForm()">Add Recipe</button>
    <button class="_add-recipe" @click="store.functionsShowApiRecipeForm()">
      Add Recipe from APi's
    </button>
  </div>
</template>

<script>
import recipeDetailCard from './recipeDetailCard.vue'
import formRecipe from './formRecipe.vue'
import apiRecipe from './apiRecipe.vue'
import { recipeDetailsStore } from '../stores/recipeModule.js'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { recipeDetailCard, formRecipe, apiRecipe },
  setup() {
    const store = recipeDetailsStore()

    return {
      store
    }
  }
})
</script>

<style scoped>
._recipe-list-wrapper {
  display: flex;
}
._add-recipe-list {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fcfbf4;
  height: 700px;
  width: 50%;
  box-shadow: 4px 4px 4px #808080;
  border-radius: 10px;
  align-items: center;
  padding: 20px;
}
._add-recipe {
  border: none;
  outline: none;
  background-color: #3e7ed1;
  color: #fff;
  padding: 10px 20px;
  font-size: 1rem;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.294);
}
</style>
