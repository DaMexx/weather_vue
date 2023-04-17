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
