import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useWeatherStore = defineStore("weather", () => {
  const request = ref<any>({});

  const weatherRequestAction = async (lat: number, lon: number) => {
    const headers = {
      "X-Yandex-API-Key": "79c765c9-5117-4351-89f6-f1717dd2cb76",
      // "Access-Control-Allow-Origin": "*",
      'X-Requested-With': 'XMLHttpRequest',
    };
    const params = {
      lat: lat,
      lon: lon,
    };
    try {
      const data = await axios.get("", { headers: headers, params: params });
      request.value = data;
    } catch (error) {
      console.error(error);
    }
  };
  return {
    request,
    weatherRequestAction,
  };
});
