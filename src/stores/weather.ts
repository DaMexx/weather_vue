import { defineStore } from "pinia";
import { yandexApiKey } from "@/yandex-api-key";
import { ref } from "vue";
import axios from "axios";

export const useWeatherStore = defineStore("weather", () => {
  const weatherData = ref<any>({});
  const loading = ref<boolean>(false);
  const fetchWeatherData = async (lat: number, lon: number) => {
    loading.value = true;
    const headers = {
      "X-Yandex-API-Key": `${yandexApiKey}`,
      "X-Requested-With": "XMLHttpRequest",
    };
    const params = {
      lat: lat,
      lon: lon,
    };
    try {
      const response = await axios.get("/forecast", {
        headers,
        params,
      });
      const data = response.data;
      weatherData.value = data;
      loading.value = false;
    } catch (error) {
      console.error(error);
    }
  };
  return {
    loading,
    weatherData,
    weatherRequestAction: fetchWeatherData,
  };
});
