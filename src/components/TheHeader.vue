<template>
  <header class="header">
    <!-- todo -->
    <!-- <div class="user-info">
      <div class="menu-toggle">
        <i class="icon icon-menu"></i>
      </div>
      <div class="doctor-meta">
        <span class="name">{{ userStore.userInfo?.name || '李醫師' }}</span>
        <span class="divider">|</span>
        <span class="dept">{{ userStore.userInfo?.dept || '急診科' }}</span>
      </div>
    </div> -->

    <div class="header-stats">
      <div v-for="stat in stats" :key="stat.label" class="stat-item">
        <span class="label">{{ stat.label }}</span>
        <span class="count">{{ stat.count }}</span>
      </div>
    </div>

    <div class="header-actions">
      <!-- todo -->
      <!-- <div class="search-bar">
        <i class="icon icon-search"></i>
      </div>
      <div class="notification">
        <i class="icon icon-bell"></i>
        <span class="badge"></span>
      </div> -->
      <div class="profile-dropdown">
        <div class="avatar">
          <i class="icon icon-user"></i>
        </div>
        <span class="username">{{ userStore.userInfo?.name || '李醫師' }}</span>
        <i class="icon icon-chevron-down"></i>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '@/store/user';
import type { Statistics } from '@/types/dashboard';

const userStore = useUserStore();

const stats = ref<Statistics[]>([
  { label: '待認領', count: 27 },
  { label: '診察中', count: 12 },
  { label: '待批價', count: 8 }
]);
</script>

<style lang="scss" scoped>
.header {
  height: 64px;
  background-color: $white;
  border-bottom: 1px solid $gray-200;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 $spacing-24;
  position: fixed;
  top: 0;
  left: 240px;
  right: 0;
  z-index: 100;
}

.user-info {
  display: flex;
  align-items: center;
  gap: $spacing-16;
  
  .menu-toggle {
    color: $gray-500;
    cursor: pointer;
  }
  
  .doctor-meta {
    display: flex;
    align-items: center;
    gap: $spacing-8;
    @include font-style($fs-base, $fw-medium);
    
    .divider {
      color: $gray-300;
    }
  }
}

.header-stats {
  display: flex;
  align-items: center;
  background-color: $gray-100;
  border-radius: 8px;
  padding: $spacing-4;
  
  .stat-item {
    display: flex;
    align-items: center;
    gap: $spacing-8;
    padding: $spacing-4 $spacing-16;
    
    .label {
      @include font-style($fs-small);
      color: $gray-700;
    }
    
    .count {
      @include font-style($fs-base, $fw-bold);
      color: $gray-900;
    }
    
    &:not(:last-child) {
      border-right: 1px solid $gray-300;
    }
  }
}

.header-actions {
  display: flex;
  align-items: center;
  gap: $spacing-20;
  
  .icon {
    color: $gray-500;
    cursor: pointer;
    font-size: 20px;
  }
  
  .notification {
    position: relative;
    
    .badge {
      position: absolute;
      top: -2px;
      right: -2px;
      width: 8px;
      height: 8px;
      background-color: $priority-high;
      border-radius: 50%;
    }
  }
  
  .profile-dropdown {
    display: flex;
    align-items: center;
    gap: $spacing-8;
    padding: $spacing-4 $spacing-12;
    border: 1px solid $gray-200;
    border-radius: 20px;
    cursor: pointer;
    
    .avatar {
      width: 28px;
      height: 28px;
      background-color: $primary-color-bg;
      color: $primary-color;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .username {
      @include font-style($fs-base);
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
  
  &.icon-menu { mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16'/%3E%3C/svg%3E"); }
  &.icon-search { mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'/%3E%3C/svg%3E"); }
  &.icon-bell { mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'/%3E%3C/svg%3E"); }
  &.icon-user { mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'/%3E%3C/svg%3E"); }
  &.icon-chevron-down { mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E"); }
}
</style>
