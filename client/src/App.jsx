import LeftBar from "components/leftBar";
import TopBar from "components/TopBar";

function App() {
  return (
    <div>
      <LeftBar />
      <div className='content'>
        <TopBar />
      </div>
    </div>
  );
}

export default App;
