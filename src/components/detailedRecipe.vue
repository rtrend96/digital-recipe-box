<template>
  <div>
    <div class="_head-wrapper">
      <img
        v-if="store.detailRecipes.imgSrc == null"
        src="https://img.freepik.com/premium-vector/chef-recipe-logo-design-vector-illustration-white-background_685330-3470.jpg"
        alt="img"
      />
      <img v-else :src="store.detailRecipes.imgSrc" alt="img" />
      <div>
        <h1>{{ store.detailRecipes.recipeName }}</h1>
        <div class="_type-recipe">
          <div class="container__text">
            <h2>Category</h2>
            <p>{{ store.detailRecipes.category }}</p>
          </div>
          <div class="container__text">
            <h2>Meal Type</h2>
            <p>{{ store.detailRecipes.mealType }}</p>
          </div>
          <div class="container__text">
            <h2>Cuisine Type</h2>
            <p>{{ store.detailRecipes.cuisineType }}</p>
          </div>
        </div>
        <div class="_type-recipe">
          <div class="container__text">
            <h2>Total Time</h2>
            <p>{{ store.detailRecipes.TotalTime }} min</p>
          </div>
          <div class="container__text">
            <h2>Serving Count</h2>
            <p>{{ store.detailRecipes.servingSize }}</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="_ingredient-wrapper"
      v-for="(item, index) of store.detailRecipes.Ingredients"
      :key="index"
    >
      <div>
        {{ item.food }}
      </div>
      <div>
        {{ item.text }}
      </div>
    </div>
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
<style scoped>
._head-wrapper {
  display: flex;
  gap: 20px;
}
img {
  width: 17%;
  height: 30%;
  border-radius: 5px 5px 5px 5px;
}
._type-recipe {
  display: flex;
  gap: 20px;
}
span {
  font-weight: bold;
}
.container__text {
  margin-right: 40px;
}
h2 {
  font-size: 1rem;
  font-weight: 400;
  color: #818189;
}
p {
  color: #000;
  font-weight: bold;
  font-size: 1.2rem;
}
._ingredient-wrapper {
  display: flex;
  gap: 30px;
  align-items: baseline;
  justify-content: space-evenly;
}
</style>
