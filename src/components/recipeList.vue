<template>
  <div class="_recipe-list-wrapper">
    <div class="_recipe-component">
      <h1>All recipeList</h1>
      <recipeDetailCard class="_recipe-list-card" />

      <div v-show="store.showAddRecipeForm" class="_add-recipe-list">
        <formRecipe />
      </div>
      <div v-show="store.showApiRecipeForm" class="_add-recipe-list">
        <apiRecipe />
      </div>
      <div v-show="store.showDetailRecipe" class="_add-recipe-list">
        <DetailedRecipe />
      </div>
    </div>
    <div class="_btn-group">
      <button class="_add-recipe" @click="store.functionsShowAddRecipeForm()">Add Recipe</button>
      <button class="_add-recipe" @click="store.functionsShowApiRecipeForm()">
        Add Recipe from APi's
      </button>
    </div>
  </div>
</template>

<script>
import recipeDetailCard from './recipeDetailCard.vue'
import formRecipe from './formRecipe.vue'
import apiRecipe from './apiRecipe.vue'
import { recipeDetailsStore } from '../stores/recipeModule.js'
import { defineComponent } from 'vue'
import DetailedRecipe from './detailedRecipe.vue'

export default defineComponent({
  components: { recipeDetailCard, formRecipe, apiRecipe, DetailedRecipe },
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
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
._recipe-component {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
h1 {
  align-self: center;
}
._recipe-list-card {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
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
._btn-group {
  display: flex;
  gap: 20px;
  float: left;
  align-self: flex-end;
  margin-bottom: 20px;
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
@media (max-width: 678px) {
  /* … */
  ._add-recipe-list {
    width: 100%;
  }
}
</style>
