<template>
    <div>
      <HeaderView />
      <div class="favourites">
        <div class="title">Favourites</div>
        <div class="favourites-list">
          <FilmView
            v-for="film in filteredFilms"
            :key="film.id"
            :film="film"
            @toggleFavorite="handleToggleFavorite"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent, reactive } from 'vue';
  import HeaderView from '@/shared/ui/Header/HeaderView.vue';
  import FilmView from '@/shared/ui/Film/FilmView.vue';
  import films from '@/database/films';
  
  export default defineComponent({
    components: {
      HeaderView,
      FilmView
    },
    setup() {
      const state = reactive({
        filmsData: films.map(film => ({ ...film, isFavorited: false }))
      });
  
      const handleToggleFavorite = (filmId) => {
        const filmIndex = state.filmsData.findIndex(film => film.id === filmId);
        if (filmIndex !== -1) {
          // Змінюємо статус улюбленого фільму
          state.filmsData[filmIndex].isFavorited = !state.filmsData[filmIndex].isFavorited;
        }
      };
  
      const filteredFilms = state.filmsData.filter(film => film.id === 3 || film.id === 4).slice(0, 2);
  
      return {
        state,
        filteredFilms,
        handleToggleFavorite
      };
    }
  });
  </script>