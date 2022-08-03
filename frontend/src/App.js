import SideBar from "./components/sidebar/Sidebar";
import MainLobby from "./Page/Main_page";
function App() {
  return (
    <div className="App">
      {/* give props for sidebar */}
      <SideBar />
      {/* give props for welcom page */}
      <MainLobby />
    </div>
  );
}

export default App;
