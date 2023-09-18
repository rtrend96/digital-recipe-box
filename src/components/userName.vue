<template>
  <div v-show="!showUserInputBox" class="_input-wrapper">
    <h3>Welcome to Recipe Box</h3>

    <div class="_input-form">
      <div class="_input-text">User Name:</div>
      <input class="_input-field" v-model="userName" type="text" required />
    </div>
    <button class="_input-btn" @click="submitUserName()">Submit</button>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { userInfoStore } from '../stores/user'
export default defineComponent({
  setup() {
    const store = userInfoStore()
    const showUserInputBox = ref(false)
    const userName = ref()
    function submitUserName() {
      if (userName.value == undefined) {
        console.log('o/p→ enter value')
      } else {
        console.log('o/p→', userName.value)
        store.userName = userName.value
        showUserInputBox.value = true
      }
    }
    // watchEffect(() => {
    //   userName.value = store.userName
    // })
    // watch(
    //   () => store.userName,
    //   (name) => {
    //     if (name != undefined) {
    //       console.log('o/p→')
    //       showUserInputBox.value = true
    //     }
    //   }
    // )

    return { store, showUserInputBox, userName, submitUserName }
  }
})
</script>
<style>
._input-wrapper {
  background-color: #fcfbf4;
  height: 200px;
  box-shadow: 4px 4px 4px #808080;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
}

._input-form {
  display: flex;
  justify-content: space-around;
}
._input-btn {
  align-self: flex-end;
  border: #808080;
  border-radius: 5px;
  width: 100px;
  margin-right: 10px;
  background-color: aqua;
}
</style>
