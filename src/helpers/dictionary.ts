import type { IDictionary } from "@/types";

export const weatherTypesDictionary: IDictionary = {
  clear: "ясно",
  "partly-cloudy": "малооблачно",
  cloudy: "облачно с прояснениями",
  overcast: "пасмурно",
  drizzle: "морось",
  "light-rain": "небольшой дождь",
  rain: "дождь",
  "moderate-rain": "умеренно сильный дождь",
  "heavy-rain": "сильный дождь",
  "continuous-heavy-rain": "длительный сильный дождь",
  showers: "ливень",
  "wet-snow": "дождь со снегом",
  "light-snow": "небольшой снег",
  snow: "снег",
  "snow-showers": "снегопад",
  hail: "град",
  thunderstorm: "гроза",
  "thunderstorm-with-rain": "дождь с грозой",
  "thunderstorm-with-hail": "гроза с градом",
};

export const windDirectionDictionary: IDictionary = {
  nw: "северо-западное",
  n: "северное",
  ne: "северо-восточное",
  e: "восточное",
  se: "юго-восточное",
  s: "южное",
  sw: "юго-западное",
  w: "западное",
  c: "штиль",
};
