<template>
  <div>
    <div
      class="_card-wrapper"
      v-for="(recipe, RecipeIndex) in store.recipeDetails"
      :key="RecipeIndex"
    >
      <img
        v-if="recipe.imgSrc == null"
        src="https://img.freepik.com/premium-vector/chef-recipe-logo-design-vector-illustration-white-background_685330-3470.jpg"
        alt="img"
      />
      <img v-else :src="recipe.imgSrc" alt="img" />
      <div class="info">
        <h1>{{ recipe.recipeName }}</h1>
        <p>{{ recipe.category }}-{{ recipe.cuisineType }}</p>
        <button class="btn" @click="store.functionShowDetailRecipe(RecipeIndex)">
          view recipe
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { recipeDetailsStore } from '../stores/recipeModule.js'

export default defineComponent({
  setup() {
    const store = recipeDetailsStore()

    return { store }
  }
})
</script>
<style scoped>
._card-wrapper {
  background-color: #fff;
  position: relative;
  display: flex;
  grid-template-columns: 100px 100px;
  border-radius: 5px;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.356);
  margin-bottom: 30px;
}
img {
  width: 100px;
  height: 100px;
  border-radius: 5px 0 0 5px;
}
.info {
  margin-left: 5px;
  margin-right: 5px;
  h1 {
    color: #351897;
    font-weight: 400;
  }
  span {
    font-size: 0.8rem;
    color: #ffa800;
    margin: -5px 0 20px;
  }
  p {
    font-size: 0.9rem;
  }
}
.btn {
  position: absolute;
  bottom: -20px;
  right: -5px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  background-color: #fc9400;
  color: #fff;
  padding: 5px 10px;
  font-size: 1rem;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.294);
}
</style>
