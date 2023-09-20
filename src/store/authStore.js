import { defineStore } from 'pinia';

export const useAuthStore = defineStore("auth", {
    state: () => ({
        name: "",
        token: "",
    }),
    getters: {
        isLoggedIn(state) {
            return state.name && state.token ? true : false;
        }
    },
    actions: {
        login(payload) {
          this.name = payload.name;
          this.token = payload.token;
        }   
      }
})