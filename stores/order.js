// stores/counter.js
import { defineStore } from 'pinia';

// 定义 Store
export const useCounterStore = defineStore('order', {
  state: () => ({
    addressItem:[]
  }),
  actions: {
    storeAddress(range) {
      this.addressItem = range
    }
  }
});
