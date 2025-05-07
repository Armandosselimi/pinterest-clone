import LeftBar from "components/leftBar";
import TopBar from "components/TopBar";
import "./App.css";
import Gallery from "components/gallery";

function App() {
  return (
    <div className='app'>
      <LeftBar />
      <div className='content'>
        <TopBar />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
