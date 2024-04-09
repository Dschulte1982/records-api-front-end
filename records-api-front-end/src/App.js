import "./App.css";
import ListAllRecords from "./pages/ListAllRecords/index";
import AddRecordScreen from "./pages/AddRecord/index";
import ShowRecordScreen from "./pages/ShowRecordScreen/index";
import { Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
// import { faHatCowboy } from "@fortawesome/pro-thin-svg-icons";
// import { faHatChef } from "@fortawesome/sharp-solid-svg-icons";
// import { faPlateUtensils } from "@fortawesome/sharp-regular-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

library.add(
  fas,
  faTwitter,
  faFontAwesome
  // faHatCowboy,
  // faHatChef,
  // faPlateUtensils
);

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
