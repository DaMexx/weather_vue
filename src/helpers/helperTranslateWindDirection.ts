interface IWindDirection {
  nw: string;
  n: string;
  ne: string;
  e: string;
  se: string;
  s: string;
  sw: string;
  w: string;
  c: string;
}

enum EWindDirection {
  nw = "северо-западное",
  n = "северное",
  ne = "северо-восточное",
  e = "восточное",
  se = "юго-восточное",
  s = "южное",
  sw = "юго-западное",
  w = "западное",
  c = "штиль",
}

export const useTranslateWeatherTypes = () => {
  const windDirectionDictionary: IWindDirection = {
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

  return function translateWeatherTypes(word: string) {
    return windDirectionDictionary[word as keyof IWindDirection] || word;
  };
};
