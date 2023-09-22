import { defineStore } from 'pinia'
import { ref } from 'vue'

export const recipeDetailsStore = defineStore(
  'recipeDetails',
  () => {
    const recipeDetails = ref([
      // {
      //   id: 1,
      //   imgSrc:
      //     'https://img.freepik.com/premium-vector/chef-recipe-logo-design-vector-illustration-white-background_685330-3470.jpg',
      // {
      //   id: newId,
      //   imgSrc: value.recipe.image,
      //   recipeName: value.recipe.label,
      //   category: value.recipe.dishType[0],
      //   mealType: value.recipe.mealType[0],
      //   cuisineType: value.recipe.cuisineType[0],
      //   TotalTime: value.recipe.totalTime,
      //   Ingredients: value.recipe.ingredients,
      //   servingSize: value.recipe.yield
      // }
    ])
    const addRecipeDetails = (value) => {
      let recipeDataAdded = false
      let newId = 0
      let newRecipeData = []
      while (!recipeDataAdded) {
        newRecipeData = [
          {
            id: newId,
            ...value
          }
        ]
        recipeDataAdded = true
        recipeDetails.value.push(...newRecipeData)
      }
      newId++
    }
    const addRecipeDetailsFromApi = (value) => {
      console.log('o/p→', value)
      let recipeDataAdded = false
      let newId = 0
      let newRecipeData = []
      while (!recipeDataAdded) {
        newRecipeData = [
          {
            id: newId,
            imgSrc: value.recipe.image,
            recipeName: value.recipe.label,
            category: value.recipe.dishType[0],
            mealType: value.recipe.mealType[0],
            cuisineType: value.recipe.cuisineType[0],
            TotalTime: value.recipe.totalTime,
            servingSize: value.recipe.yield,
            Ingredients: value.recipe.ingredients
          }
        ]
        recipeDataAdded = true
        recipeDetails.value.push(...newRecipeData)
      }
      newId++
    }
    const showAddRecipeForm = ref(false)
    const functionsShowAddRecipeForm = () => {
      showAddRecipeForm.value = !showAddRecipeForm.value
    }
    const showApiRecipeForm = ref(false)
    const functionsShowApiRecipeForm = () => {
      showApiRecipeForm.value = !showApiRecipeForm.value
    }
    const showDetailRecipe = ref(false)
    const detailRecipes = ref([])
    const functionShowDetailRecipe = (value) => {
      console.log('o/p→', value)
      showDetailRecipe.value = true
      detailRecipes.value = recipeDetails.value[value]
    }
    return {
      recipeDetails,
      addRecipeDetails,
      showAddRecipeForm,
      showApiRecipeForm,
      functionsShowAddRecipeForm,
      functionsShowApiRecipeForm,
      addRecipeDetailsFromApi,
      showDetailRecipe,
      functionShowDetailRecipe,
      detailRecipes
    }
  },
  { persist: true }
)
