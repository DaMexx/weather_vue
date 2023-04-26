<script setup lang="ts">
import WLoader from "../common/WLoader.vue";
import WeatherCurrentCard from "./WeatherCurrentCard.vue";
import WeatherCurrentSearchInput from "./WeatherCurrentSearchInput.vue";
import { useWeatherStore } from "@/stores/weather";
import { storeToRefs } from "pinia";

const weatherStore = useWeatherStore();
const { weatherData, loading } = storeToRefs(weatherStore);
</script>

<template>
  <div class="main">
    <h1>WeatherCurrent</h1>
    <WeatherCurrentSearchInput />

    <div v-if="loading" style="display: flex; justify-content: center">
      <WLoader />
    </div>

    <WeatherCurrentCard v-else :weatherData="weatherData" />
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
