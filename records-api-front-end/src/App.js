import "./App.css";
import ListAllRecords from "./pages/ListAllRecords/index";
import ShowRecordScreen from "./pages/ShowRecordScreen/index";
// import MainHeader from "./components/MainHeader";
// import CardLoader from "./components/CardLoader";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ height: "440px", backgroundColor: "white" }}>
      <Routes>
        <Route path="/" element={<ListAllRecords />} />
        <Route path="/show-record/id" element={<ShowRecordScreen />} />
      </Routes>
    </div>
  );
}

export default App;
