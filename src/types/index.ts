export interface IDictionary {
  [key: string]: string;
}

type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

let a = -10;
export type Latitude = IntRange<0, 90>;
export type Longitude = IntRange<0, 180>;
export type TLocation = { lat: number; lon: number };
export type TInfo = {
  n: boolean;
  geoid: number;
  url: string;
  lat: number;
  lon: number;
  tzinfo: {
    name: string;
    abbr: string;
    dst: boolean;
    offset: number;
    geo_object: {};
  };
};
export type TGObject = {
  id: number;
  name: string;
};
export type TGeoObject = {
  district: TGObject;
  locality: TGObject;
  province: TGObject;
  country: TGObject;
};

export type TFact = {
  obs_time: number;
  uptime: number;
  temp: number;
  feels_like: number;
  icon: string;
  condition: string;
  cloudness: number;
  prec_type: number;
  prec_prob: number;
  prec_strength: number;
  is_thunder: false;
  wind_speed: number;
  wind_dir: string;
  pressure_mm: number;
  pressure_pa: number;
  humidity: number;
  daytime: string;
  polar: false;
  season: string;
  source: string;
  accum_prec: {
    "1": number;
    "3": number;
    "7": number;
  };
  soil_moisture: number;
  soil_temp: number;
  uv_index: number;
  wind_gust: number;
};

export type THours = {
  hour: string;
  hour_ts: number;
  temp: number;
  feels_like: number;
  icon: string;
  condition: string;
  cloudness: number;
  prec_type: number;
  prec_strength: number;
  is_thunder: boolean;
  wind_dir: string;
  wind_speed: number;
  wind_gust: number;
  pressure_mm: number;
  pressure_pa: number;
  humidity: number;
  uv_index: number;
  soil_temp: number;
  soil_moisture: number;
  prec_mm: number;
  prec_period: number;
  prec_prob: number;
};

export type TDayShort = {
  _source: string;
  temp: number;
  temp_min: number;
  wind_speed: number;
  wind_gust: number;
  wind_dir: string;
  pressure_mm: number;
  pressure_pa: number;
  humidity: number;
  soil_temp: number;
  soil_moisture: number;
  prec_mm: number;
  prec_prob: number;
  prec_period: number;
  cloudness: number;
  prec_type: number;
  prec_strength: number;
  icon: string;
  condition: string;
  uv_index: number;
  feels_like: number;
  daytime: string;
  polar: false;
  fresh_snow_mm: number;
};
export type TDay = {
  _source: string;
  temp_min: number;
  temp_avg: number;
  temp_max: number;
  wind_speed: number;
  wind_gust: number;
  wind_dir: string;
  pressure_mm: number;
  pressure_pa: number;
  humidity: number;
  soil_temp: number;
  soil_moisture: number;
  prec_mm: number;
  prec_prob: number;
  prec_period: number;
  cloudness: number;
  prec_type: number;
  prec_strength: number;
  icon: string;
  condition: string;
  uv_index: number;
  feels_like: number;
  daytime: string;
  polar: boolean;
  fresh_snow_mm: number;
};

export type TParts = {
  day_short: TDayShort;
  morning: TDay;
  day: TDay;
  evening: TDay;
  night_short: TDay;
  night: TDay;
};

export type TForecast = {
  date: string;
  date_ts: number;
  week: number;
  sunrise: string;
  sunset: string;
  rise_begin: string;
  set_end: string;
  moon_code: number;
  moon_text: string;
  parts: TParts;
  hours: THours[];
  biomet: {
    index: number;
    condition: string;
  };
};

export type TData = {
  now: number;
  now_dt: string;
  info: TInfo;
  geo_object: TGeoObject;
  yesterday: {
    temp: number;
  };
  fact: TFact;
  forecasts: TForecast[];
};

export interface IWeatherData {
  data: TData;
  headers?: {};
  config?: {};
  request?: string;
}
