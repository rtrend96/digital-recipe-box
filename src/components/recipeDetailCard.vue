<template>
  <div>
    <div
      class="_card-wrapper"
      v-for="(recipe, RecipeIndex) in store.recipeDetails"
      :key="RecipeIndex"
    >
      <img
        src="https://img.freepik.com/premium-vector/chef-recipe-logo-design-vector-illustration-white-background_685330-3470.jpg"
        alt="Pancake"
      />
      <div class="info">
        <h1>{{ recipe.recipeName }}</h1>
        <p>
          {{ recipe.description }}
        </p>
        <button class="btn">view recipe</button>
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
  grid-template-columns: 300px 500px;
  border-radius: 5px;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.356);
  margin-bottom: 30px;
}
img {
  width: 200px;
  height: 200px;
  border-radius: 5px 0 0 5px;
}
.info {
  padding: 40px 40px 0;
  h1 {
    color: #351897;
    font-weight: 400;
  }
  .container__text__star span {
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
  right: -20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  background-color: #fc9400;
  color: #fff;
  padding: 22px 45px;
  font-size: 1rem;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.294);
}
</style>
