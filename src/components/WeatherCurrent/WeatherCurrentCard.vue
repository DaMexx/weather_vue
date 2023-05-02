<script setup lang="ts">
/**
 * Components
 */
import IconWaterDrop from "@/components/icons/IconWaterDrop.vue";
import IconWind from "@/components/icons/IconWind.vue";
import IconCloud from "@/components/icons/IconCloud.vue";
import IconPressure from "@/components/icons/IconPressure.vue";
/**
 * Types
 */
import type { TData, TGeoObject } from "@/types";
/**
 * Helper functions
 */
import {
  weatherTypesDictionary,
  windDirectionDictionary,
} from "@/helpers/dictionary";

interface IProps {
  weatherData: TData;
  weatherDataGeoObject: TGeoObject
}
const props = defineProps<IProps>();
</script>

<template>
  <div class="weather-card">
    <h1 class="weather-card__title">
      {{ props.weatherDataGeoObject.district.name }},
      {{ props.weatherDataGeoObject.locality.name }}
    </h1>
    <div class="weather-card__temperature">
      <div class="temperature__main">
        <span v-if="props.weatherData.fact.temp > 0">+</span>
        <span class="temp">{{ props.weatherData.fact.temp }}</span>
      </div>
      <IconCloud class="temperature__icon" />

      <div class="temperature__container">
        <div class="container__condition">
          {{ weatherTypesDictionary[props.weatherData.fact.condition] }}
        </div>
        <div class="container__feel">
          Ощущается как
          <span v-if="props.weatherData.fact.feels_like > 0">+</span
          ><span class="temp">{{ props.weatherData.fact.feels_like }}</span>
        </div>
      </div>
    </div>
    <div class="weather-card__additional">
      <div class="additional__wind">
        <IconWind width="24px" height="24px" />
        <span>{{ props.weatherData.fact.wind_speed }} м/с</span>
        <span>
          {{
            windDirectionDictionary[props.weatherData.fact.wind_dir]
          }}
        </span>
      </div>
      <div class="additional__pressure">
        <IconPressure width="24px" height="24px" />
        <span>{{ props.weatherData.fact.pressure_mm }} мм рт.ст.</span>
      </div>
      <div class="additional__humidity">
        <IconWaterDrop width="24px" height="24px" />
        <div>{{ props.weatherData.fact.humidity }}%</div>
      </div>
    </div>
  </div>
  <span></span>
</template>

<style scoped lang="scss">
.weather-card {
  width: 35%;
  min-width: max-content;
  height: max-content;
  background: url("@/assets/images/rain.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
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
