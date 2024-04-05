import "./App.css";
import ListAllRecords from "./pages/ListAllRecords/index";
import AddRecordScreen from "./pages/AddRecord/index";
import ShowRecordScreen from "./pages/ShowRecordScreen/index";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ListAllRecords />} />
        <Route path="/:id" element={<ShowRecordScreen />} />
        <Route path="/add-record" element={<AddRecordScreen />} />
      </Routes>
    </div>
  );
}

export default App;
