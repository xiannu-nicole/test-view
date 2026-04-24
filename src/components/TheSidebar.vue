<template>
  <aside class="sidebar" :style="sidebarIconVars">
    <div class="logo-area">
      <svg class="logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="#2f6f4e" />
        <rect x="40" y="25" width="20" height="50" fill="white" />
        <rect x="25" y="40" width="50" height="20" fill="white" />
      </svg>
      <span class="logo-text">Hospital</span>
    </div>

    <nav class="nav-menu">
      <router-link 
        v-for="item in menuItems" 
        :key="item.id"
        :to="item.path"
        class="nav-item"
        active-class="active"
      >
        <div class="icon-wrapper">
          <i :class="['icon', item.icon]"></i>
        </div>
        <span class="nav-label">{{ item.label }}</span>
      </router-link>
    </nav>

    <div class="sidebar-footer">
      <button class="logout-btn" @click="handleLogout">
        <i class="icon icon-logout"></i>
        <span>登出</span>
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/user';
import { SidebarItem } from '@/types/dashboard';
import { img } from '@/assets/js/img.ts';

const router = useRouter();
const userStore = useUserStore();

const sidebarIconVars = computed(() => ({
  '--icon-clinic': `url("${img.clinic}")`,
  '--icon-waiting': `url("${img.waiting}")`,
  '--icon-record': `url("${img.record}")`,
  '--icon-logout': `url("${img.logout}")`
}));

const menuItems = ref<SidebarItem[]>([
  { id: 'clinic', label: '候診中', icon: 'icon-clinic', path: '/clinic' },
  { id: 'waiting', label: '待認領', icon: 'icon-waiting', path: '/waiting' },
  { id: 'record', label: '已完診', icon: 'icon-record', path: '/records' }
]);

const handleLogout = () => {
  userStore.logout();
  router.push('/login');
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 240px;
  height: 100vh;
  background-color: $sidebar-bg;
  display: flex;
  flex-direction: column;
  border-right: 1px solid $gray-200;
  position: fixed;
  left: 0;
  top: 0;
}

.logo-area {
  padding: $spacing-24;
  display: flex;
  align-items: center;
  gap: $spacing-12;
  
  .logo {
    width: 32px;
    height: 32px;
  }
  
  .logo-text {
    @include font-style($fs-h2, $fw-bold);
    color: $primary-color;
  }
}

.nav-menu {
  flex: 1;
  padding: $spacing-20 0;
  
  .nav-item {
    display: flex;
    align-items: center;
    gap: $spacing-12;
    padding: $spacing-12 $spacing-24;
    color: $gray-700;
    text-decoration: none;
    transition: all 0.3s;
    
    &:hover {
      background-color: $primary-color-bg;
      color: $primary-color;
    }
    
    &.active {
      background-color: $primary-color;
      color: $white;
      
      .icon-wrapper {
        color: $white;
      }
    }
  }
  
  .nav-label {
    @include font-style($fs-base, $fw-medium);
  }
}

.sidebar-footer {
  padding: $spacing-24;
  border-top: 1px solid $gray-200;
  
  .logout-btn {
    display: flex;
    align-items: center;
    gap: $spacing-12;
    background: none;
    border: none;
    color: $gray-700;
    cursor: pointer;
    @include font-style($fs-base);
    width: 100%;
    padding: $spacing-8;
    transition: color 0.3s;
    
    &:hover {
      color: $priority-high;
    }
  }
}

// Icon Placeholders
.icon {
  width: 20px;
  height: 20px;
  display: block;
  background-color: currentColor;
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  
  &.icon-clinic { mask-image: var(--icon-clinic); }
  &.icon-waiting { mask-image: var(--icon-waiting); }
  &.icon-record { mask-image: var(--icon-record); }
  &.icon-logout { mask-image: var(--icon-logout); }
}
</style>
