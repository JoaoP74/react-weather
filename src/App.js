import Home from "./pages/Home";
import Support from "./pages/Support";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import WeatherApp from "./pages/Weather";
import WeatherMain from "./pages/WeatherMain";
import NotFound from "./pages/404";
import ForecastWeather from "./pages/ForecastWeather";
import Settings from "./pages/Settings";
import { useState } from "react";
import { db } from "./backend/app_backend";
import "./autoload";

function App() {
  let homePageSeen = db.get("HOME_PAGE_SEEN");
  let defaultRoutePage;
  homePageSeen
    ? (defaultRoutePage = <WeatherApp />)
    : (defaultRoutePage = <Home />);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={defaultRoutePage} />
        <Route path="support" element={<Support />} />
        <Route path="weather" element={<WeatherApp />} />
        <Route path="weathermain" element={<WeatherMain />} />
        <Route path="forecast" element={<ForecastWeather />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
