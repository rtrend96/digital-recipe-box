<template>
  <div class="_recipe-form">
    <h3>Recipe Form</h3>

    <div class="_form">
      <form action="#">
        <div class="form-row">
          <div class="input-data">
            <input type="text" required v-model="editedRecipe.recipeName" />
            <div class="underline"></div>
            <label for="recipeName">Recipe Name</label>
          </div>
          <div class="input-data">
            <input type="text" required v-model="editedRecipe.category" />
            <div class="underline"></div>
            <label for="recipeName">Category</label>
          </div>
        </div>
        <div class="form-row">
          <div class="input-data textarea">
            <textarea rows="8" cols="80" required v-model="editedRecipe.description"></textarea>
            <div class="underline"></div>
            <label for="">description</label>
          </div>
        </div>
        <div class="form-row">
          <div class="input-data">
            <input type="text" required v-model="editedRecipe.HandsOnTime" />
            <div class="underline"></div>
            <label for="">HandsOnTime</label>
          </div>
          <div class="input-data">
            <input type="text" required v-model="editedRecipe.TotalTime" />
            <div class="underline"></div>
            <label for="">Total Time</label>
          </div>
          <div class="input-data">
            <input type="text" required v-model="editedRecipe.servingSize" />
            <div class="underline"></div>
            <label for="">serving Size</label>
          </div>
        </div>
        Ingredients*
        <div
          class="form-row"
          v-for="(ingredient, index) in editedRecipe[0].Ingredients"
          :key="index"
        >
          <div class="input-data">
            <input type="text" v-model="ingredient.name" required />
            <div class="underline"></div>
            <label for="">Ingredients Name</label>
          </div>
          <div class="input-data">
            <input type="text" v-model="ingredient.quantity" required />
            <div class="underline"></div>
            <label for="">Ingredients Quantity </label>
          </div>
          <h5 class="_add-btn" @click="removeIngredient(index)">X</h5>
        </div>
        <div class="form-row">
          <button class="_add-btn" @click="addIngredient">Add Ingredients</button>
        </div>
        Steps
        <div
          class="form-row"
          v-for="(step, index) in editedRecipe[0].recipeDetailSteps"
          :key="index"
        >
          <div class="input-data">
            <input type="text" required v-model="step.name" />
            <div class="underline"></div>
            <label for="">Step {{ index + 1 }}</label>
          </div>
          <h5 class="_add-btn" @click="removeStep(index)">X</h5>
        </div>
        <div class="form-row">
          <button class="_add-btn" @click="addStep()">Add Step</button>
        </div>
      </form>
    </div>
    <button class="_save-recipe" @click="addRecipe(), store.functionsShowAddRecipeForm()">
      Save Recipe
    </button>
  </div>
</template>
<script>
import { recipeDetailsStore } from '../stores/recipeModule.js'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const store = recipeDetailsStore()

    const editedRecipe = ref([
      {
        recipeName: 'Biryani',
        description: 'Spicy dish made up of Rice',
        HandsOnTime: 20,
        TotalTime: 40,
        Ingredients: [{ name: '', quantity: 1 }],
        servingSize: 3,
        recipeDetailSteps: ['']
      }
    ])

    const addIngredient = () => {
      editedRecipe.value[0].Ingredients.push({ name: '', quantity: 1 })
    }

    const removeIngredient = (index) => {
      editedRecipe.value[0].Ingredients.splice(index, 1)
    }
    const addStep = () => {
      editedRecipe.value[0].recipeDetailSteps.push('')
    }

    const removeStep = (index) => {
      editedRecipe.value[0].recipeDetailSteps.splice(index, 1)
    }

    const showAddRecipeForm = ref(false)
    function addRecipe() {
      store.addRecipeDetails(editedRecipe.value)
      editedRecipe.value = []
    }
    const showApiRecipeForm = ref(false)
    return {
      showAddRecipeForm,
      store,
      editedRecipe,
      addRecipe,
      addIngredient,
      removeIngredient,
      addStep,
      removeStep,
      showApiRecipeForm
    }
  }
})
</script>
<style scoped>
._recipe-form {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
}
._form {
  display: flex;
  flex-direction: column;

  overflow: scroll;
  overflow-x: hidden;
  height: 550px;
}
._row-one {
  display: flex;
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

._form .text {
  text-align: center;
  font-size: 41px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  background: -webkit-linear-gradient(right, #56d8e4, #9f01ea, #56d8e4, #9f01ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
._form form .form-row {
  display: flex;
  margin: 15px 0;
}
form .form-row .input-data {
  width: 100%;
  height: 40px;
  margin: 0 20px;
  position: relative;
}
form .form-row .textarea {
  height: 70px;
}
.input-data input,
.textarea textarea {
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 17px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.12);
}
.input-data input:focus ~ label,
.textarea textarea:focus ~ label,
.input-data input:valid ~ label,
.textarea textarea:valid ~ label {
  transform: translateY(-20px);
  font-size: 14px;
  color: #3498db;
}
.textarea textarea {
  resize: none;
  padding-top: 10px;
}
.input-data label {
  position: absolute;
  pointer-events: none;
  bottom: 10px;
  font-size: 16px;
  transition: all 0.3s ease;
}
.textarea label {
  width: 100%;
  bottom: 40px;
  background: #fff;
}
.input-data .underline {
  position: absolute;
  bottom: 0;
  height: 2px;
  width: 100%;
}
.input-data .underline:before {
  position: absolute;
  content: '';
  height: 2px;
  width: 100%;
  background: #3498db;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease;
}
.input-data input:focus ~ .underline:before,
.input-data input:valid ~ .underline:before,
.textarea textarea:focus ~ .underline:before,
.textarea textarea:valid ~ .underline:before {
  transform: scale(1);
}
.submit-btn .input-data {
  overflow: hidden;
  height: 45px !important;
  width: 25% !important;
}
.submit-btn .input-data .inner {
  height: 100%;
  width: 300%;
  position: absolute;
  left: -100%;
  background: -webkit-linear-gradient(right, #56d8e4, #9f01ea, #56d8e4, #9f01ea);
  transition: all 0.4s;
}
.submit-btn .input-data:hover .inner {
  left: 0;
}
.submit-btn .input-data input {
  background: none;
  border: none;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  position: relative;
  z-index: 2;
}
._add-btn {
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  background-color: #6a92c7;
  color: #fff;
  padding: 5px 5px;
  margin-left: 10px;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.294);
}
@media (max-width: 700px) {
  ._form .text {
    font-size: 30px;
  }
  ._form form {
    padding: 10px 0 0 0;
  }
  .container form .form-row {
    display: block;
  }
  form .form-row .input-data {
    margin: 35px 0 !important;
  }
  .submit-btn .input-data {
    width: 40% !important;
  }
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
</style>
