import "./App.css";
import MainHeader from "./components/MainHeader";
import CardLoader from "./components/CardLoader";

function App() {
  return (
    <div style={{ height: "440px", backgroundColor: "white" }}>
      <MainHeader />
      <CardLoader />
    </div>
  );
}

export default App;
