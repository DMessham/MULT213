(() => {
  // src/dom.js
  function renderMessage(el, text) {
    el.innerHTML = `<p>${text}</p>`;
  }

  // src/api.js
  async function searchCity(city) {
    const res = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`
    );
    const data = await res.json();
    console.log(data);
    return data.results || [];
  }
  async function fetchWeather(lat, lon) {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    );
    const data = await res.json();
    console.log(data);
    return data.current_weather ?? "N/A";
  }

  // src/app.js
  var cityForm = document.querySelector("#city-form");
  var cityList = document.querySelector("#city-list");
  var weatherForm = document.querySelector("#weather-form");
  var weatherOutput = document.querySelector("#weather-output");
  cityForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const city = document.querySelector("#city").value.trim();
    if (!city) return;
    renderMessage(cityList, "Loading\u2026");
    try {
      const data = await searchCity(city);
      if (data.length === 0) {
        renderMessage(cityList, `No results found for "${city}".`);
        return;
      }
      let message = `Found ${data.length} result(s) for "${city}":`;
      message += "<ul>";
      data.forEach((item) => {
        message += `<li>${item.name}, ${item.country} (Lat: ${item.latitude}, Lon: ${item.longitude})</li>`;
      });
      message += "</ul>";
      renderMessage(cityList, message);
    } catch (err) {
      renderMessage(cityList, `Error: ${err.message}`);
    }
  });
  weatherForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const latStr = document.querySelector("#lat").value.trim();
    const lonStr = document.querySelector("#lon").value.trim();
    if (!latStr || !lonStr) {
      renderMessage(weatherOutput, "Please provide both latitude and longitude.");
      return;
    }
    const lat = parseFloat(latStr);
    const lon = parseFloat(lonStr);
    if (Number.isNaN(lat) || Number.isNaN(lon)) {
      renderMessage(weatherOutput, "Latitude and longitude must be valid numbers.");
      return;
    }
    renderMessage(weatherOutput, "Loading Weather Data\u2026");
    try {
      const weather = await fetchWeather(lat, lon);
      renderMessage(weatherOutput, `<pre>${JSON.stringify(weather, null, 2)}</pre>`);
    } catch (err) {
      renderMessage(weatherOutput, `Error: ${err.message}`);
    }
  });
})();
