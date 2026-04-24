<template>
  <div class="login-container">
    <div class="login-box">
      <div class="logo-section">
        <!-- SVG Placeholder for Hospital Logo -->
        <svg class="logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="#2f6f4e" />
          <rect x="40" y="25" width="20" height="50" fill="white" />
          <rect x="25" y="40" width="50" height="20" fill="white" />
        </svg>
        <h1 class="hospital-name">Hospital</h1>
      </div>
      
      <div class="login-form">
        <h2 class="form-title">員工登入</h2>
        
        <div class="input-group">
          <label for="staffId">員工代碼</label>
          <input 
            id="staffId" 
            v-model="loginForm.staffId" 
            type="text" 
            placeholder="請輸入員工代碼"
          />
        </div>
        
        <div class="input-group">
          <label for="password">密碼</label>
          <input 
            id="password" 
            v-model="loginForm.password" 
            type="password" 
            placeholder="請輸入密碼"
          />
        </div>
        
        <div class="form-options">
          <div class="remember-me">
            <input id="remember" type="checkbox" />
            <label for="remember">記住員工代碼</label>
          </div>
          <a href="#" class="forgot-password">忘記密碼？</a>
        </div>
        
        <button class="login-btn" @click="handleLogin">登入</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/user';

const router = useRouter();
const userStore = useUserStore();

const loginForm = reactive({
  staffId: '',
  password: ''
});

const handleLogin = () => {
  // 模擬登入
  userStore.setUserInfo({ name: '李醫師', dept: '急診科' });
  router.push('/clinic');
};
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: $layout-bg;
}

.login-box {
  width: 400px;
  padding: $spacing-40;
  background-color: $card-bg;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.logo-section {
  text-align: center;
  margin-bottom: $spacing-32;
  
  .logo {
    width: 60px;
    height: 60px;
    margin-bottom: $spacing-8;
  }
  
  .hospital-name {
    @include font-style($fs-h1, $fw-bold);
    color: $primary-color;
    margin: 0;
  }
}

.login-form {
  .form-title {
    @include font-style($fs-h2, $fw-medium);
    text-align: center;
    margin-bottom: $spacing-32;
    color: $gray-900;
  }
  
  .input-group {
    margin-bottom: $spacing-20;
    
    label {
      display: block;
      margin-bottom: $spacing-8;
      @include font-style($fs-label, $fw-medium);
      color: $gray-700;
    }
    
    input {
      width: 100%;
      padding: $spacing-12;
      border: 1px solid $gray-300;
      border-radius: 8px;
      @include font-style($fs-base);
      transition: border-color 0.3s;
      
      &:focus {
        outline: none;
        border-color: $primary-color;
      }
    }
  }
  
  .form-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: $spacing-32;
    @include font-style($fs-small);
    
    .remember-me {
      display: flex;
      align-items: center;
      gap: $spacing-8;
      
      input {
        cursor: pointer;
      }
    }
    
    .forgot-password {
      color: $primary-color;
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
  
  .login-btn {
    width: 100%;
    padding: $spacing-12;
    background-color: $primary-color;
    color: $white;
    border: none;
    border-radius: 8px;
    @include font-style($fs-base, $fw-medium);
    cursor: pointer;
    transition: background-color 0.3s;
    
    &:hover {
      background-color: $primary-color-hover;
    }
  }
}
</style>
