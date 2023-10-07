<template>
  <div class="_home-wrapper">
    <navBar />
    <userName />
    <recipeList class="_recipe-list" />
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
<style>
._home-wrapper {
  position: absolute;
  top: 80px;
  right: 0;
  bottom: 0;
  left: 0;
  border: 15px solid rgb(255, 255, 255);
}
</style>
