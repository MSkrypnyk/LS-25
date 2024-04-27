<template>
  <div>
    <HeaderView />
    <div class="trending">
      <div class="title">Trending at this moment</div>
      <div class="trending-list">
        <div
          v-for="film in films"
          :key="film.id"
          @click="handleFilmSelect(film.id)"
          :class="{
            'trending-item': true,
            active: selectedFilmId === film.id,
            inactive: selectedFilmId !== film.id
          }"
        >
          <FilmView :film="film" @handleToggleFavorite="toggleFavorite" />
        </div>
      </div>
      <div v-if="selectedFilmId" class="main-trend">
        <MainTrend  filmId=1  />
      </div>
    </div>
  </div>
</template>

<script>
import { films } from '../../database/films'
import HeaderView from '@/shared/ui/Header/HeaderView.vue'
import FilmView from '@/shared/ui/Film/FilmView.vue'
import MainTrend from '@/shared/ui/MainTrend/MainTrend.vue'

export default {
  components: {
    HeaderView,
    FilmView,
    MainTrend
  },
  data() {
    return {
      films: films,
      selectedFilmId: films.length > 0 ? films[0].id : null
    }
  },
  methods: {
    handleFilmSelect(filmId) {
      this.selectedFilmId = this.selectedFilmId === filmId ? null : filmId
    },
    toggleFavorite() {}
  }
}
</script>
