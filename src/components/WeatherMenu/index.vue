<script setup lang="ts">
/**
 * Components
 */
import Weekly from "./Weekly.vue";
import WLoader from "../common/WLoader.vue";
import WeeklyItem from "./WeeklyItem.vue";
/**
 * Store
 */
import { useWeatherStore } from "@/stores/weather";
/* spell-checker: disable */
import { storeToRefs } from "pinia";

const weatherStore = useWeatherStore();
const { weatherDataForecast, loading } = storeToRefs(weatherStore);
</script>

<template>
  <div class="main">
    <h1>WeatherMenu</h1>
    <div
      v-if="loading"
      style="
        display: flex; 
        place-content: center; 
        height: 100%
      "
    >
      <WLoader :style="'top:35%'" />
    </div>
    <Weekly v-else>
      <template #weather-item>
        <WeeklyItem
          v-for="item in weatherDataForecast"
          :item="item"
          :key="item.date"
        />
      </template>
    </Weekly>
  </div>
</template>

<style scoped lang="scss">
.main {
  flex-grow: 2;
  background-color: darkcyan;
  border-radius: 20px;
  padding: 20px;
}
</style>
