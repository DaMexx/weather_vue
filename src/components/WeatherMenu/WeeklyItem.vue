<script setup lang="ts">
import { defineProps } from "vue";
import IconCloud from "../icons/IconCloud.vue";
const props = defineProps({
  item: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <Transition name="fade">
    <div class="item">
      <div class="item__date">{{ props.item.date }}</div>
      <IconCloud 
        width="100%"
        height="auto"
      />
      <!-- <div class="item__icon">s</div> -->
      <div class="item__max-temp">{{ props.item.parts.day.temp_avg }}</div>
      <div class="item__min-temp">{{ props.item.parts.night.temp_avg }}</div>
      <div class="item__type">{{ props.item.parts.day.condition }}</div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.item {
  display: flex;
  flex-direction: column;
  width: 20%;
  background-color: cornflowerblue;
  border-radius: 20px;
  padding: 20px;
}
</style>
