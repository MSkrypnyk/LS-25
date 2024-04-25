<script>
import SearchIcon from '@/components/icons/header/SearchIcon.vue'
import BellIcon from '@/components/icons/header/BellIcon.vue'

export default {
  methods: {
    isActive(route) {
      return this.$route.path === route
    }
  },
  components: {
    SearchIcon,
    BellIcon,
  }
}
</script>

<template>
  <div class="header">
    <router-link class="header-link" to="/">Movies</router-link>
    <router-link class="header-link" to="/">Series</router-link>
    <router-link class="header-link" to="/">Documentaries</router-link>
    <div class="ml-auto header-group">
      <SearchIcon class="icon" />
      <BellIcon class="icon" />
      <div class="user">
        <img class="user-img" src="/src/assets/img/user.png" alt="" />
        <p class="user-name">Tetiana</p>
      </div>
    </div>
    <router-link class="header-logo" to="/">
      <LogoIcon />
    </router-link>
  </div>
</template>
