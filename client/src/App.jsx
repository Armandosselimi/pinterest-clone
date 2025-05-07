import LeftBar from "components/leftBar";
import TopBar from "components/TopBar";
import "./App.css";

function App() {
  return (
    <div className='app'>
      <LeftBar />
      <div className='content'>
        <TopBar />
      </div>
    </div>
  );
}

export default App;
