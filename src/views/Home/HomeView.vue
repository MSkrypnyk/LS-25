<template>
  <div class="home">
    <HeaderView />
    <div class="home-content">
      <h2 class="home-title">Insider</h2>
      <p class="home-info">2022 | Comedy horror | 1 Season</p>
      <Watch />
    </div>
</div>
    <div class="home__main">
      <h4 class="title main-title">Trending</h4>
      <div class="trending-list">
        <FilmView
          v-for="film in state.filmsData"
          :key="film.id"
          :film="film"
          @toggleFavorite="handleToggleFavorite"
        />
      </div>

      <h4 class="title main-title">Continue watching</h4>
      <div class="continue-watching">
        <ContinueWatchingView v-for="film in state.continueWatching" :key="film.id" :film="film" />
      </div>
    </div>
 
</template>

<script>
import { defineComponent, reactive } from 'vue'
import HeaderView from '@/shared/ui/Header/HeaderView.vue'
import Watch from '@/shared/ui/WatchView/WatchView.vue'
import FilmView from '@/shared/ui/Film/FilmView.vue'
import ContinueWatchingView from '@/shared/ui/ContinueWaching/ContinueWaching.vue'
import films from '@/database/films'
import { continueWatching } from '@/database/continueWatching'

export default defineComponent({
  components: {
    HeaderView,
    Watch,
    FilmView,
    ContinueWatchingView
  },
  setup() {
    const state = reactive({
      filmsData: films.map((film) => ({ ...film, isFavorited: false })),
      continueWatching: continueWatching.map((film) => ({ ...film, isFavorited: false }))
    })

    const handleToggleFavorite = (filmId) => {
      state.filmsData = state.filmsData.map((film) =>
        film.id === filmId ? { ...film, isFavorited: !film.isFavorited } : film
      )
    }

    return {
      state,
      handleToggleFavorite
    }
  }
})
</script>
