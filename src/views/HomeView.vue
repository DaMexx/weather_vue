<script setup lang="ts">
import WeatherCurrent from "@/components/WeatherCurrent/index.vue";
import WeatherMenu from "@/components/WeatherMenu/index.vue";
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
