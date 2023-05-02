import { defineStore } from "pinia";
import { yandexApiKey } from "@/yandex-api-key";
import { ref, computed } from "vue";
import axios from "axios";
import type { TData, TFact, TInfo, TGeoObject, TForecast } from "@/types";

export const useWeatherStore = defineStore("weather", () => {
  const weather = ref<TData>({} as TData);

  const weatherData = computed<TData>(() => weather.value);
  const weatherDataFact = computed<TFact>(() => weather.value.fact);
  const weatherDataInfo = computed<TInfo>(() => weather.value.info);
  const weatherDataGeoObject = computed<TGeoObject>(
    () => weather.value.geo_object
  );
  const weatherDataForecast = computed<TForecast[]>(
    () => weather.value.forecasts
  );
  const loading = ref<boolean>(false);

  const fetchWeatherData = async (lat: number, lon: number): Promise<void> => {
    loading.value = true;
    const headers = {
      "X-Yandex-API-Key": `${yandexApiKey}`,
      "X-Requested-With": "XMLHttpRequest",
    };
    const params = {
      lat,
      lon
    };
    try {
      const response = await axios.get<TData>("/forecast", {
        headers,
        params,
      });
      const data = response.data;
      weather.value = data;
      loading.value = false;
    } catch (error) {
      console.error(error);
    }
  };
  return {
    loading,
    weatherData,
    weatherDataFact,
    weatherDataInfo,
    weatherDataGeoObject,
    weatherDataForecast,
    fetchWeatherData,
  };
});
