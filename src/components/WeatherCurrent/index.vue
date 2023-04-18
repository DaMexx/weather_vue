<script setup lang="ts">
import WeatherCurrentCard from './WeatherCurrentCard.vue';
import WeatherCurrentSearchInput from './WeatherCurrentSearchInput.vue';
</script>


<template>
  <div class="main">
    <h1>WeatherCurrent</h1>
    <WeatherCurrentSearchInput />
    <WeatherCurrentCard />
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
