import "./App.css";
import ListAllRecords from "./pages/ListAllRecords/index";
import AddRecordScreen from "./pages/AddRecord/index";
import ShowRecordScreen from "./pages/ShowRecordScreen/index";
import { Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

library.add(fas, far, faFontAwesome);

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
