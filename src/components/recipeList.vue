<template>
  <div class="_recipe-List-wrapper">
    <h1>All recipeList</h1>
    <recipeDetailCard />
  </div>
  <div v-show="showAddRecipeForm" class="_add-recipe-list">
    <div class="_recipe-form">
      Recipe Form
      <div class="_form">
        <form @submit.prevent="addRecipe">
          <label for="recipeName">Recipe Name:</label>
          <input type="text" id="recipeName" v-model="editedRecipe.recipeName" />

          <label for="description">Description:</label>
          <textarea id="description" v-model="editedRecipe.description"></textarea>

          <label for="handsOnTime">Hands-On Time (minutes):</label>
          <input type="number" id="handsOnTime" v-model="editedRecipe.HandsOnTime" />

          <label for="totalTime">Total Time (minutes):</label>
          <input type="number" id="totalTime" v-model="editedRecipe.TotalTime" />

          <label for="servingSize">Serving Size:</label>
          <input type="number" id="servingSize" v-model="editedRecipe.servingSize" />
          <label for="ingredients">Ingredients:</label>
          <div v-for="(ingredient, index) in editedRecipe.Ingredients" :key="index" class="">
            <input
              type="text"
              v-model="ingredient.name"
              :placeholder="'Ingredient ' + (index + 1)"
            />
            <input
              type="number"
              v-model="ingredient.quantity"
              :placeholder="'Quantity ' + (index + 1)"
            />
          </div>
          <label for="recipeDetailSteps">Recipe Steps:</label>
          <div v-for="(ingredient, index) in editedRecipe.recipeDetailSteps" :key="index">
            <input
              type="number"
              v-model="ingredient.quantity"
              :placeholder="'Quantity ' + (index + 1)"
            />
          </div>
        </form>
      </div>

      <button class="_save-recipe" @click="addRecipe(), (showAddRecipeForm = false)">
        Save Recipe
      </button>
    </div>
  </div>
  <button class="_add-recipe" @click="showAddRecipeForm = true">Add Recipe</button>
</template>

<script>
import recipeDetailCard from './recipeDetailCard.vue'
import { recipeDetailsStore } from '../stores/recipeModule.js'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: { recipeDetailCard },
  setup() {
    const store = recipeDetailsStore()

    const editedRecipe = ref([
      {
        recipeName: 'Biryani',
        description: 'Spicy dish made up of Rice',
        HandsOnTime: 20,
        TotalTime: 40,
        Ingredients: [
          { name: 'Water', quantity: 5 },
          { name: 'Rice', quantity: 2 },
          { name: 'Veggies', quantity: 5 }
        ],
        servingSize: 3,
        recipeDetailSteps: ['Add Water', 'Add Rice']
      }
    ])
    for (let i = 0; i < 3; i++) {
      editedRecipe.value.Ingredients.push({ name: '', quantity: 1 })
    }
    const ingredients = ref([])
    const recipeSteps = ref([])
    const showAddRecipeForm = ref(true)
    function addRecipe() {
      // store.addRecipeDetails(editedRecipe.value)
      editedRecipe.value = []
    }
    return { showAddRecipeForm, store, editedRecipe, addRecipe, ingredients, recipeSteps }
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
._recipe-form {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
}
label {
  display: block;
  margin-bottom: 5px;
}
input,
textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}
._form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
._save-recipe {
  border: none;
  outline: none;
  align-self: flex-end;
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
._add-recipe {
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  background-color: #3e7ed1;
  color: #fff;
  padding: 20px 40px;
  font-size: 1rem;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.294);
}
</style>
