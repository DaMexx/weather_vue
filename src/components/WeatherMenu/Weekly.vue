<script setup lang="ts">
import WeeklyItem from "./WeeklyItem.vue";
import type { TForecast } from "@/types";

interface IProps {
  forecasts: TForecast[];
}
const props = defineProps<IProps>();
</script>

<template>
  <div class="container">
    <WeeklyItem v-for="item in props.forecasts" :item="item" :key="item.date" />
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
