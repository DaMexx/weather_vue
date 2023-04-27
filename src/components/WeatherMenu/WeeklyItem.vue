<script setup lang="ts">
import IconCloud from "../icons/IconCloud.vue";
import { formatDate } from "@/helpers/helperFormatDate";
import { weatherTypesDictionary } from "@/helpers/dictionary";
import type { TForecast } from "@/types";

interface IPorps {
  item: TForecast;
}
const props = defineProps<IPorps>();
</script>

<template>
  <div class="item">
    <div class="item__date">{{ formatDate(props.item.date) }}</div>
    <IconCloud width="100%" />

    <div class="item__max-temp">
      <span v-if="props.item.parts.day_short.temp > 0">+</span
      >{{ props.item.parts.day_short.temp }}
    </div>
    <div class="item__min-temp">
      <span v-if="props.item.parts.day_short.temp_min > 0">+</span
      >{{ props.item.parts.day_short.temp_min }}
    </div>
    <div class="item__type">
      {{ weatherTypesDictionary[props.item.parts.day_short.condition] }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.item {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 20%;
  background-color: cornflowerblue;
  border-radius: 20px;
  padding: 20px;
  overflow: hidden;
  &__type {
    font-size: 0.56em;
    overflow-wrap: break-word;
  }
}
</style>
