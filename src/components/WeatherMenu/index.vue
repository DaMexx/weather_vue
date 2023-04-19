<script setup lang="ts">
import Weekly from "./Weekly.vue";
</script>

<template>
  <div class="main">
    <h1>WeatherMenu</h1>
    <Weekly />
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
