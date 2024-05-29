import { Routes, Route } from "react-router-dom";
import ListAllItems from "./pages/ListAllItems/index";
import ShowItemScreen from "./pages/ShowItemScreen/index";
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
        <Route path="/" element={<ListAllItems />} />
        <Route path="/:id" element={<ShowItemScreen />} />
      </Routes>
    </div>
  );
}

export default App;
