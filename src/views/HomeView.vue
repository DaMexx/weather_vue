<script setup lang="ts">
import WeatherCurrent from "@/components/WeatherCurrent/index.vue";
import WeatherMenu from "@/components/WeatherMenu/index.vue";
import { useWeatherStore } from "@/stores/weather";

import { onMounted } from "vue";
import { storeToRefs } from "pinia";
const weatherStore = useWeatherStore();
const { weatherRequestAction } = weatherStore;
const request = storeToRefs(weatherStore);
onMounted(() => {
  // weatherRequestAction(55.75396, 37.620393);
  // weatherRequestAction( 47.200605, 38.927657);
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
  gap: 20px;
  height: 100%;
}
</style>
