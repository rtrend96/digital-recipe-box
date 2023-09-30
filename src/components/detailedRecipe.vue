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
    <div class="list-container">
      <div class="list" id="Ingredients">
        <h2>Food Item List:</h2>
        <ul v-for="(item, index) of store.detailRecipes.Ingredients" :key="index">
          <li>{{ item.food }}</li>
        </ul>
      </div>
      <div class="list">
        <h2>Quantity and Recipe Steps</h2>
        <ul v-for="(item, index) of store.detailRecipes.Ingredients" :key="index">
          <li>{{ item.text }}</li>
        </ul>
      </div>
    </div>
    <button class="export-recipe" @click="exportIngredients(store.detailRecipes.recipeName)">
      Print Ingredients
    </button>
    <button class="_close-recipe" @click="store.functionCloseDetailRecipe()">Close</button>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { recipeDetailsStore } from '../stores/recipeModule'
import domToPdf from 'dom-to-pdf'

export default defineComponent({
  setup() {
    const store = recipeDetailsStore()
    const exportIngredients = (value) => {
      setTimeout(() => {
        const element = document.getElementById('Ingredients')
        const options = {
          filename: `${value}-insights.pdf`
        }
        domToPdf(element, options, () => {})
      }, 500)
      console.log('o/p→')
    }
    return { store, exportIngredients }
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

.list-container {
  display: flex; /* Use flexbox to align elements */
  overflow: scroll;
  overflow-x: hidden;
  max-height: 420px;
}
.list {
  width: 50%; /* Each list takes up 50% of the container */
  padding: 10px; /* Add padding for spacing */
}
::-webkit-scrollbar {
  width: 6px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #f7f8fa;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(209, 207, 207);
}
.export-recipe {
  border: none;
  outline: none;
  background-color: #3e7ed1;
  color: #fff;
  padding: 20px 40px;
  font-size: 1rem;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  margin-right: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.294);
}
._close-recipe {
  border: none;
  outline: none;
  background-color: #3e7ed1;
  color: #fff;
  padding: 20px 40px;
  font-size: 1rem;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  margin-right: 40px;
  float: right;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.294);
}
</style>
