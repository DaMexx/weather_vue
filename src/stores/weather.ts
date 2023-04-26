import { defineStore } from "pinia";
import { yandexApiKey } from "@/yandex-api-key";
import { ref } from "vue";
import axios from "axios";

export const useWeatherStore = defineStore("weather", () => {
  const weatherData = ref<any>({});
  const fetchWeatherData = async (lat: number, lon: number) => {
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
    } catch (error) {
      console.error(error);
    }
  };
  return {
    weatherData,
    weatherRequestAction: fetchWeatherData,
  };
});
