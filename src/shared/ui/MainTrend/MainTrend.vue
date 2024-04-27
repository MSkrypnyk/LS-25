<template>
  <div class="trend">
    <div class="trend-img" :style="{ backgroundImage: `url(${trendItem.bgImage})` }"></div>
    <div class="trend-info">
      <div class="trend-group">
        <h2 class="trend-title">{{ trendItem.title }}</h2>
        <div class="trend-rating">
          <StarIcon />
          {{ trendItem.rating }}
        </div>
      </div>
      <div class="trend-data">
        <p>{{ trendItem.year }}</p>
        <p>{{ trendItem.genre }}</p>
        <p>{{ trendItem.time }}</p>
      </div>
      <p class="trend-description">{{ trendItem.description }}</p>
      <Watch />
    </div>
  </div>
</template>

<script>
import { mainTrend } from '@/database/mainTrend.js'
import StarIcon from '@/components/icons/trending/StarIcon.vue'
import Watch from '@/shared/ui/WatchView/WatchView.vue'

export default {
  props: {
    filmId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      trendItem: null
    }
  },
  created() {
    this.fetchTrendItem()
  },
  methods: {
    fetchTrendItem() {
      const id = parseInt(this.filmId, 10)
      this.trendItem = mainTrend.find((item) => item.id === id)
    }
  },
  components: {
    StarIcon,
    Watch
  }
}
</script>
