<script setup lang="ts">
import WeatherCurrent from "@/components/WeatherCurrent/index.vue";
import WeatherMenu from "@/components/WeatherMenu/index.vue";
import { onBeforeMount } from "vue";
import { useWeatherStore } from "@/stores/weather";

const weatherStore = useWeatherStore();
const { fetchWeatherData } = weatherStore;

onBeforeMount(() => {
  // fetchWeatherData(55.75396, 37.620393);
  fetchWeatherData(47.200605, 38.927657);
  // fetchWeatherData(41.03055191, 29.23018646);
});
</script>

<template>
  <main>
    <section class="hero">
      <WeatherCurrent />
      <WeatherMenu />
    </section>
  </main>
</template>

<style scoped lang="scss">
.hero {
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
}
</style>
