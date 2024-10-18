// src/stores/user.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null, // 用于存储token
    userId: null, // 存储用户id
  }),
  actions: {
    setToken(newToken) {
      this.token = newToken;
    },
    setUserId(id) {
      this.userId = id;
    },
    clearAuthData() {
      this.token = null;
      this.userId = null;
    }
  }
});
