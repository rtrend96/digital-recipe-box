<template>
  <div class="_home-wrapper">
    <navBar />
    <div class="_userName-box">
      <userName />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import userName from '../components/userName.vue'
import navBar from '../components/navBar.vue'
import { userInfoStore } from '../stores/user'

export default defineComponent({
  components: { userName, navBar },
  setup() {
    const store = userInfoStore()
    return { store }
  }
})
</script>

<style>
._userName-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
}
</style>
