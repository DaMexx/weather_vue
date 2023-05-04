<script setup lang="ts">
/**
 * Components
 */
import WLoader from "../common/WLoader.vue";
import WeatherCurrentCard from "./WeatherCurrentCard.vue";
import WeatherCurrentSearchInput from "./WeatherCurrentSearchInput.vue";
/**
 * Store
 */
import { useWeatherStore } from "@/stores/weather";
import { storeToRefs } from "pinia";

const weatherStore = useWeatherStore();
const { weatherData, weatherDataGeoObject, loading } =
  storeToRefs(weatherStore);
</script>

<template>
  <div class="main">
    <h1 class="font-bold underline">WeatherCurrent</h1>
    <WeatherCurrentSearchInput />
    <div v-if="loading" style="display: flex; justify-content: center">
      <WLoader />
    </div>
    <WeatherCurrentCard
      v-else
      :weatherData="weatherData"
      :weatherDataGeoObject="weatherDataGeoObject"
    />
  </div>
</template>

<style scoped lang="scss">
.main {
  flex-grow: 0;
  background-color: bisque;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
</style>
