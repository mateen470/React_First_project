import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Crousal from "./components/slideshow/Crousal";

import DashboardPage from "./pages/Dashboard/Dashboard";
import LiveEventsPage from "./pages/LiveEvents/LiveEvents";
import MyBetsPage from "./pages/MyBets/MyBets";
import SportsListPage from "./pages/SportsList/SportsList";
import StartSoonPage from "./pages/StartingSoon/StartSoon";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/slide" element={<Crousal />} />
        <Route exact path="/dashboard" element={<DashboardPage />} />
        <Route exact path="/bets" element={<MyBetsPage />} />
        <Route exact path="/events" element={<LiveEventsPage />} />
        <Route exact path="/startsoon" element={<StartSoonPage />} />
        <Route exact path="/sportslist" element={<SportsListPage />} />
      </Routes>
    </div>
  );
}

export default App;
