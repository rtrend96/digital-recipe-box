import { defineStore } from 'pinia'
import { ref } from 'vue'

export const userInfoStore = defineStore(
  'user',
  () => {
    const userName = ref()
    console.log('o/p→', userName)
    return {
      userName
    }
  },
  { persist: true }
)
