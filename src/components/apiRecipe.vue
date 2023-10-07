<template>
  <div class="_main-form">
    <div class="_search-nav">
      <input type="text" class="searchTerm" placeholder="Are you hungry?" v-model="searchValue" />
      <button type="submit" class="btn" @click="getResultValue(searchValue)">Search Recipe</button>
    </div>
    <div class="_api-search">
      <div class="_card-wrapper" v-for="(recipe, index) in recipeList" :key="index">
        <img alt="image" :src="recipe.recipe.image" />
        <div class="info">
          <h1>{{ recipe.recipe.label }}</h1>

          <button class="btn" @click="exportRecipe(recipe)">Export recipe</button>
        </div>
      </div>
    </div>
    <button class="_close-recipe" @click="store.functionsShowApiRecipeForm()">Close</button>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { recipeDetailsStore } from '../stores/recipeModule.js'
import axios from 'axios'
export default defineComponent({
  setup() {
    const store = recipeDetailsStore()
    const searchValue = ref()
    const recipeList = ref([])
    const getResultValue = (value) => {
      recipeList.value = []
      axios
        .get(
          'https://api.edamam.com/api/recipes/v2?type=public&q=' +
            value +
            '&app_id=b143f865&app_key=e4e9ba037563a86d04de87cf2ebc09dc'
        )
        .then((res) => {
          console.log('o/p→', res.data.hits)
          let mealData = JSON.parse(JSON.stringify(res.data.hits))
          for (const meal of mealData) {
            recipeList.value.push(meal)
          }
        })
    }
    const exportRecipe = (value) => {
      store.addRecipeDetailsFromApi(value)
      store.functionsShowApiRecipeForm()
      searchValue.value = ''
      recipeList.value = []
    }
    return { store, searchValue, getResultValue, recipeList, exportRecipe }
  }
})
</script>
<style scoped>
._search-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
._api-search {
  overflow: scroll;
  overflow-x: hidden;
  max-height: 570px;
}
.searchTerm {
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.searchTerm:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
._card-wrapper {
  margin-top: 20px;
  background-color: #fff;
  display: flex;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;
  h1 {
    color: #351897;
  }
  .span {
    font-size: 0.8rem;
    color: #ffa800;
  }
  p {
    font-size: 0.9rem;
  }
}
.btn {
  border: none;
  outline: none;
  background-color: #fc9400;
  color: #fff;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  float: right;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.294);
}
._close-recipe {
  border: none;
  outline: none;
  float: right;
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
@media (max-width: 678px) {
  ._card-wrapper {
    width: 100%;
  }
  ._main-form {
    margin-top: 40px;
  }
}
</style>
