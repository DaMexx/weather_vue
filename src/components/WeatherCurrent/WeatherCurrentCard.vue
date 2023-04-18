<script setup lang="ts">
import { final } from "../../test";
import { computed } from "vue";
import IconWaterDrop from "@/components/icons/IconWaterDrop.vue";
import IconWind from "@/components/icons/IconWind.vue";
import IconCloud from "@/components/icons/IconCloud.vue";
import IconPressure from "@/components/icons/IconPressure.vue";
const locationInfo = final.data.geo_object;
const todayInfo = final.data.fact;
const ruCondition = computed(() => {
  return todayInfo.condition === "cloudy" ? "Ветрено" : todayInfo.condition;
});
</script>

<template>
  <div class="weather-card">
    <h1 class="weather-card__title">
      {{ locationInfo.district.name }}, {{ locationInfo.locality.name }}
    </h1>
    <div class="weather-card__temperature">
      <div class="temperature__main">
        +<span class="temp">{{ todayInfo.temp }}</span>
      </div>
      <IconCloud class="temperature__icon" />

      <div class="temperature__container">
        <div class="container__condition">
          {{ ruCondition }}
        </div>
        <div class="container__feel">
          Ощущается как +<span class="temp">{{ todayInfo.feels_like }}</span>
        </div>
      </div>
    </div>
    <div class="weather-card__additional">
      <div class="additional__wind">
        <IconWind width="24px" height="24px" />
        <span>{{ todayInfo.wind_speed }} м/с</span>
        <span>{{ todayInfo.wind_dir }}</span>
      </div>
      <div class="additional__pressure">
        <IconPressure width="24px" height="24px" />
        <span>{{ todayInfo.pressure_mm }} мм рт.ст.</span>
      </div>
      <div class="additional__humidity">
        <IconWaterDrop width="24px" height="24px" />
        <div>{{ todayInfo.humidity }}%</div>
      </div>
    </div>
  </div>
  <!-- <pre>{{ todayInfo }}</pre> -->
  <!-- <pre>{{ final }}</pre> -->
  <!-- <span>{{ locationInfo.district.name }}</span>
  <span>{{ locationInfo.locality.name }}</span> -->
  <!-- <span>{{ locationInfo.province.name }}</span>
  <span>{{ locationInfo.country.name }}</span> -->
  <span></span>
</template>

<style scoped lang="scss">
.weather-card {
  max-width: 100%;
  height: max-content;
  background-color: blueviolet;
  border-radius: 20px;
  padding: 20px;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  &__temperature,
  &__additional {
    display: flex;
    padding-top: 20px;
    gap: 10px;
  }
}
.temperature__container {
  display: flex;
  flex-direction: column;
}
.temperature__main {
  font-size: 48px;
  line-height: 48px;
}
.temperature__icon {
  margin-left: 20px;
}
.temp {
  &::after {
    content: "\00B0";
  }
}
.additional__wind,
.additional__humidity,
.additional__pressure {
  display: flex;
  gap: 5px;
}
</style>
