<script setup lang="ts">
import { defineProps } from "vue";
import IconCloud from "../icons/IconCloud.vue";
import { useTranslateWeatherTypes } from "@/helpers/helperTranslateWeatherTypes";
import { formatDate } from "@/helpers/helperFormatDate";
import {weatherTypesDictionary} from "@/helpers/dictionary"

defineProps({
  item: {
    type: Object,
    default: {},
  },
});

</script>

<template>
  <Transition name="fade">
    <div class="item">
      <div class="item__date">{{ formatDate(item.date) }}</div>
      <IconCloud width="100%"/>
      <!-- <div class="item__icon">s</div> -->
      <div class="item__max-temp">
        <span v-if="item.parts.day.temp_avg > 0">+</span
        >{{ item.parts.day.temp_avg }}
      </div>
      <div class="item__min-temp">
        <span v-if="item.parts.night.temp_avg > 0">+</span
        >{{ item.parts.night.temp_avg }}
      </div>
      <div class="item__type">
        {{ weatherTypesDictionary[item.parts.day.condition] }}
      </div>
    </div>
  </Transition>
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
}
</style>
