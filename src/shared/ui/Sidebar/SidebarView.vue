<template>
  <div class="sidebar">
    <router-link to="/">
      <logoIcon class="icon logo" />
    </router-link>
    <div class="sidebar-pages">
      <router-link to="/" class="sidebar-link" :class="{ 'is-active': isActive('/') }">
        <FilmIcon class="sidebar-icon" />
        <span>Home</span>
      </router-link>
      <router-link
        to="/favourites"
        class="sidebar-link"
        :class="{ 'is-active': isActive('/favourites') }"
      >
        <HeartIcon class="sidebar-icon" />
        <span>Favourites</span>
      </router-link>
      <router-link
        to="/trending"
        class="sidebar-link"
        :class="{ 'is-active': isActive('/trending') }"
      >
        <TrendingUpIcon class="sidebar-icon" />
        <span>Trending</span>
      </router-link>
      <router-link
        to="/"
        class="sidebar-link mb-small"
        :class="{ 'is-active': isActive('/comingsoon') }"
      >
        <CelendarIcon class="sidebar-icon" />
        <span>Coming soon</span>
      </router-link>
      <router-link to="/" class="sidebar-link" :class="{ 'is-active': isActive('/community') }">
        <UsersIcon class="sidebar-icon" />
        <span>Community</span>
      </router-link>
      <router-link to="/" class="sidebar-link mb" :class="{ 'is-active': isActive('/social') }">
        <MessageCircleIcon class="sidebar-icon" />
        <span>Social</span>
      </router-link>
      <router-link to="/" class="sidebar-link" :class="{ 'is-active': isActive('/setting') }">
        <SlidersIcon class="sidebar-icon" />
        <span>Settings</span>
      </router-link>
      <router-link to="/" class="sidebar-link" :class="{ 'is-active': isActive('/logout') }">
        <LogOutIcon class="sidebar-icon" />
        <span>Logout</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import CelendarIcon from '@/components/icons/sidebar/CelendarIcon.vue'
import FilmIcon from '@/components/icons/sidebar/FilmIcon.vue'
import HeartIcon from '@/components/icons/sidebar/HeartIcon.vue'
import LogOutIcon from '@/components/icons/sidebar/LogOutIcon.vue'
import MessageCircleIcon from '@/components/icons/sidebar/MessageCircleIcon.vue'
import SlidersIcon from '@/components/icons/sidebar/SlidersIcon.vue'
import TrendingUpIcon from '@/components/icons/sidebar/TrendingUpIcon.vue'
import UsersIcon from '@/components/icons/sidebar/UsersIcon.vue'
import LogoIcon from '@/components/icons/logo/LogoIcon.vue'

export default {
  methods: {
    isActive(route) {
      return this.$route.path === route
    }
  },
  components: {
    LogOutIcon,
    FilmIcon,
    HeartIcon,
    TrendingUpIcon,
    CelendarIcon,
    UsersIcon,
    SlidersIcon,
    MessageCircleIcon,
    LogoIcon
  }
}
</script>

<style scoped></style>
