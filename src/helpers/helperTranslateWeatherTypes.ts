interface IWeatherTypesDictionary {
  clear: string;
  partlyCloudy: string;
  cloudy: string;
  overcast: string;
  drizzle: string;
  "light-rain": string;
  rain: string;
  "moderate-rain": string;
  "heavy-rain": string;
  "continuous-heavy-rain": string;
  showers: string;
  "wet-snow": string;
  "light-snow": string;
  snow: string;
  "snow-showers": string;
  hail: string;
  thunderstorm: string;
  "thunderstorm-with-rain": string;
  "thunderstorm-with-hail": string;
}

enum EWeatherTypesDictionary {
  clear = "ясно",
  partlyCloudy = "малооблачно",
  cloudy = "облачно с прояснениями",
  overcast = "пасмурно",
  drizzle = "морось",
  "light-rain" = "небольшой дождь",
  rain = "дождь",
  "moderate-rain" = "умеренно сильный дождь",
  "heavy-rain" = "сильный дождь",
  "continuous-heavy-rain" = "длительный сильный дождь",
  showers = "ливень",
  "wet-snow" = "дождь со снегом",
  "light-snow" = "небольшой снег",
  snow = "снег",
  "snow-showers" = "снегопад",
  hail = "град",
  thunderstorm = "гроза",
  "thunderstorm-with-rain" = "дождь с грозой",
  "thunderstorm-with-hail" = "гроза с градом",
}

export const useTranslateWeatherTypes = () => {
  const weatherTypesDictionary: IWeatherTypesDictionary = {
    clear: "ясно",
    partlyCloudy: "малооблачно",
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
  return function translateWeatherTypes(word: string) {
    return (
      weatherTypesDictionary[word as keyof IWeatherTypesDictionary] || word
    );
  };
};
