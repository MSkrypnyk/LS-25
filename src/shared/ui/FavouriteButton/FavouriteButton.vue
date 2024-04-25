<template>
    <button class="btn" @click="handleFavoriteToggle">
      <HeartIcon v-if="isFavorited" class="film-icon" />
      <FavouriteIcon v-else class="film-icon" />
    </button>
  </template>
  
  <script>
  import HeartIcon from "@/components/icons/sidebar/HeartIcon.vue";
  import FavouriteIcon from "@/components/icons/favourites/FavouriteIcon.vue";
  
  export default {
    props: {
      isFavorited: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      handleFavoriteToggle() {
        this.$emit('toggleFavorite'); // Відправляємо подію toggleFavorite без аргументів
      }
    },
    components: {
      HeartIcon,
      FavouriteIcon
    }
  };
  </script>
  