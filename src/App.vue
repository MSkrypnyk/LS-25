<script setup>
import SidebarView from './shared/ui/Sidebar/SidebarView.vue'
</script>

<template>
  <div class="container">
    <SidebarView />
    <div class="page">
      <router-view />
    </div>
  </div>
</template>

<style scoped>

</style>
