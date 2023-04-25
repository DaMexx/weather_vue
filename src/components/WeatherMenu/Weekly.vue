<script setup lang="ts">
import WeeklyItem from "./WeeklyItem.vue";
defineProps({
  weatherData: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="container">
    <WeeklyItem
      v-for="item in weatherData.forecasts"
      :item="item"
      :key="item"
    />
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  place-content: center;
  gap: 10px;
  padding: 30px 0;
}
</style>
