<script setup lang="ts">
/**
 * Components
 */
import Weekly from "./Weekly.vue";
import WLoader from "../common/WLoader.vue";
/**
 * Store  
 */
import { useWeatherStore } from "@/stores/weather";
import { storeToRefs } from "pinia";

const weatherStore = useWeatherStore();
const { weatherDataForecast, loading } = storeToRefs(weatherStore);
</script>

<template>
  <div class="main">
    <h1>WeatherMenu</h1>
    <div v-if="loading" style="display: flex; justify-content: center">
      <WLoader />
    </div>
    <Weekly v-else :forecasts="weatherDataForecast" />
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
