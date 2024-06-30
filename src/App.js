
import Descriptions from "./components/description";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./weatherService";
import ErrorComponent from "./components/ErrorComponent";
import Main from "./components/Main";
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import EventPlanners from "./components/EventPlanners";
import Farmers from "./components/Farmers";
import Travellers from "./components/Travellers";
import ResultPage from "./components/ResultPage";
import Trigger from "./components/Trigger";

function App() {

  return(

    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/eventPlanner" element={<EventPlanners />} />
        <Route path="/farmer" element={<Farmers />} />
        <Route path="/traveller" element={<Travellers />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/trigger" element={<Trigger />} />


      </Routes>
    </Router>

  );
}

export default App;
