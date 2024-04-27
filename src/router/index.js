import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home/HomeView.vue'
import FavouritesView from '@/views/Favourites/FavouritesView.vue'
import TrendingView from '@/views/Trending/TrendingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: FavouritesView
    },
    {
      path: '/trending',
      name: 'trending',
      component: TrendingView
    },
    {
      path: "/:pathMatch(.*)*",
      component:  HomeView,
    },
  ]
})

export default router
