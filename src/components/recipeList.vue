<template>
  <div class="_recipe-List-wrapper">
    <div></div>
    All recipeList
  </div>
  <div v-show="showAddRecipeForm" class="_add-recipe-list">
    Add Form <button @click="showAddRecipeForm = false">Save Recipe</button>
  </div>
  <button @click="showAddRecipeForm = true">Add Recipe</button>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const showAddRecipeForm = ref(false)
    return { showAddRecipeForm }
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
  height: 600px;
  width: 50%;
  box-shadow: 4px 4px 4px #808080;
  border-radius: 10px;
  align-items: center;
  padding: 20px;
}
</style>
