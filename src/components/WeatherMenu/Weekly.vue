<script setup lang="ts">
import { final } from "@/test";
import WeeklyItem from "./WeeklyItem.vue";

const weeklyData = final.data.forecasts;
</script>

<template>
  <div class="container">
    <transition-group name="fade">
      <WeeklyItem v-for="item in weeklyData" :item="item" :key="item" />
    </transition-group>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  place-content: center;
  gap: 10px;
  padding: 30px 0;
}
</style>
