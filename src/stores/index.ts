import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'main',

  // 变量
  state: () => ({
    test: '',
  }),

  // 计算
  getters: {},

  // 同步/异步方法
  actions: {},

  // 持久化处理
  persist: [{ storage: localStorage, key: 'test', paths: ['test'] }],
})
