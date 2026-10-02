export const getWeather = async (latitude, longitude) => {
  const url =
    `https://api.open-meteo.com/v1/forecast?` +
    `latitude=${latitude}` +
    `&longitude=${longitude}` +
    `&current=temperature_2m,relative_humidity_2m,wind_speed_10m` +
    `&hourly=precipitation_probability` +
    `&timezone=auto`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch weather data.");
  }

  const data = await response.json();

  return {
    temperature: data.current.temperature_2m,
    humidity: data.current.relative_humidity_2m,
    windSpeed: data.current.wind_speed_10m,
    precipitationProbability:
      data.hourly.precipitation_probability[0],
  };
};
export const getLocationName = async (latitude, longitude) => {
  const url =
    `https://nominatim.openstreetmap.org/reverse?` +
    `format=jsonv2` +
    `&lat=${latitude}` +
    `&lon=${longitude}` +
    `&zoom=10` +
    `&addressdetails=1`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch location name.");
  }

  const data = await response.json();

  return {
    city:
      data.address?.city ||
      data.address?.town ||
      data.address?.village ||
      "Unknown Location",

    state: data.address?.state || "",
  };
};