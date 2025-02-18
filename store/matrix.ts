import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMatrix = defineStore('matrix', () => {
  const shared = ref({} as {dayNum:string, yearNum:string, monthNum:string, fateNum:string})
  return { shared }
})