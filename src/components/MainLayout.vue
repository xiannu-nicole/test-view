<template>
  <div class="layout-container">
    <TheSidebar />
    <div class="main-content">
      <TheHeader />
      <main class="page-body">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheSidebar from './TheSidebar.vue';
import TheHeader from './TheHeader.vue';
</script>

<style lang="scss" scoped>
.layout-container {
  display: flex;
  min-height: 100vh;
  background-color: $layout-bg;
}

.main-content {
  flex: 1;
  margin-left: 240px;
  display: flex;
  flex-direction: column;
}

.page-body {
  margin-top: 64px;
  padding: $spacing-24;
  flex: 1;
}
</style>
