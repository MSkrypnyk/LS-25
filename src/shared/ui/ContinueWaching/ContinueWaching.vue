<template>
  <div class="continue-watching-item">
    <img class="continue-watching-img" :src="film.image" :alt="film.title" />
    <FavoriteButton :isFavorited="film.isFavorited" @toggleFavorite="handleToggleFavorite" />
  </div>
</template>

<script>
import FavoriteButton from '@/shared/ui/FavouriteButton/FavouriteButton.vue'
export default {
  props: {
    film: {
      type: Object,
      required: true
    }
  },
  components: {
    FavoriteButton
  },
  methods: {
    handleToggleFavorite() {
      this.$emit('toggleFavorite', this.film.id)
    }
  }
}
</script>
