import { defineStore } from 'pinia';

interface UserState {
  userInfo: any | null;
  isLogin: boolean;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    userInfo: null,
    isLogin: false
  }),
  actions: {
    setUserInfo(info: any) {
      this.userInfo = info;
      this.isLogin = true;
    },
    logout() {
      this.userInfo = null;
      this.isLogin = false;
    }
  }
});
