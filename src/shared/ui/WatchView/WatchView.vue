<template>
  <div class="watch">
    <button type="button" class="btn watch-btn" @click="handleWatchNow">Watch now</button>
    <button class="btn watch-icon" @click="handleFavoriteToggle">
      <HeartIcon v-if="isFavorited" />
      <FavouriteIcon v-else />
    </button>
  </div>
</template>

<script>
import { ref } from 'vue'
import HeartIcon from '@/components/icons/sidebar/HeartIcon.vue'
import FavouriteIcon from '@/components/icons/favourites/FavouriteIcon.vue'

export default {
  components: {
    HeartIcon,
    FavouriteIcon
  },
  setup() {
    // Створюємо реактивну змінну для стану isFavorited
    const isFavorited = ref(false)

    // Функція для зміни стану isFavorited
    const handleFavoriteToggle = () => {
      isFavorited.value = !isFavorited.value
    }

    // Функція для обробки кліку на кнопку "Watch now"
    const handleWatchNow = () => {
      // Додайте код для обробки кліку на кнопку "Watch now"
      console.log('Watch now clicked')
    }

    return {
      isFavorited,
      handleFavoriteToggle,
      handleWatchNow
    }
  }
}
</script>
