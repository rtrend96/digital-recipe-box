import { defineStore } from 'pinia'
import { ref } from 'vue'

export const recipeDetailsStore = defineStore(
  'recipeDetails',
  () => {
    const recipeDetails = ref([
      {
        id: 1,
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
    return {
      recipeDetails,
      addRecipeDetails
    }
  },
  { persist: true }
)
