<template>
  <div class="header">
    <a href="/"><img src="../assets/logo.png" alt="recipe logo" /></a>
    <h3>{{ store.userName }}'s Recipe Box</h3>
  </div>
</template>

<script>
import { userInfoStore } from '../stores/user'
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const store = userInfoStore()
    return { store }
  }
})
</script>

<style>
.header {
  background-color: rgb(233, 213, 213);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header * {
  display: inline;
}
a {
  margin: 20px;
}
img {
  height: 60px;
}
</style>
