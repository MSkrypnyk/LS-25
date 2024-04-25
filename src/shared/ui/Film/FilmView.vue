<template>
    <div class="film">
      <img class="film-image" :src="film.image" :alt="film.title" />
      <div class="film-title">{{ film.title }}</div>
      <div class="film-details">{{ film.year }} | {{ film.genre }}</div>
      <FavoriteButton :isFavorited="film.isFavorited" @toggleFavorite="handleToggleFavorite" />
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import FavoriteButton from '@/shared/ui/FavouriteButton/FavouriteButton.vue';
  
  export default defineComponent({
    props: {
      film: {
        type: Object,
        required: true,
        validator: (value) => {
          return (
            typeof value === 'object' &&
            value !== null &&
            value.hasOwnProperty('id') &&
            value.hasOwnProperty('title') &&
            value.hasOwnProperty('image') &&
            value.hasOwnProperty('year') &&
            value.hasOwnProperty('genre') &&
            value.hasOwnProperty('isFavorited')
          );
        }
      }
    },
    components: {
      FavoriteButton
    },
    methods: {
      handleToggleFavorite() {
        this.$emit('toggleFavorite', this.film.id);
      }
    }
  });
  </script>
  