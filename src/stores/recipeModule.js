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
      //   recipeName: 'Biryani',
      //   category: 'Dinner',
      //   description: 'Spicy dish made up of Rice',
      //   HandsOnTime: 20,
      //   TotalTime: 40,
      //   Ingredients: [
      //     { name: 'Water', quantity: 5 },
      //     { name: 'Rice', quantity: 2 },
      //     { name: 'Veggies', quantity: 5 }
      //   ],
      //   servingSize: 3,
      //   recipeDetailSteps: ['Add Water', 'Add Rice']
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
      let recipeDataAdded = false
      let newId = 0
      let newRecipeData = []
      while (!recipeDataAdded) {
        newRecipeData = [
          {
            id: newId,
            imgSrc: value.strMealThumb,
            recipeName: value.strMeal,
            category: value.strCategory,
            description: '',
            HandsOnTime: 10,
            TotalTime: 40,
            Ingredients: [
              { name: 'Water', quantity: 5 },
              { name: 'Rice', quantity: 2 },
              { name: 'Veggies', quantity: 5 }
            ],
            servingSize: 3,
            recipeDetailSteps: value.strInstruction
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
    return {
      recipeDetails,
      addRecipeDetails,
      showAddRecipeForm,
      showApiRecipeForm,
      functionsShowAddRecipeForm,
      functionsShowApiRecipeForm,
      addRecipeDetailsFromApi
    }
  },
  { persist: true }
)
