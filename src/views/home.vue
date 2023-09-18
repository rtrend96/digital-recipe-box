<template>
  <div class="_home-wrapper">
    <navBar />
    <userName />
    <recipeList />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import userName from '../components/userName.vue'
import navBar from '../components/navBar.vue'
import recipeList from '../components/recipeList.vue'
import { userInfoStore } from '../stores/user'

export default defineComponent({
  components: { userName, navBar, recipeList },
  setup() {
    const store = userInfoStore()
    return { store }
  }
})
</script>
