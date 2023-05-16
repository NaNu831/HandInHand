import { BrowserRouter, Route, Routes } from "react-router-dom";
import Formular from "./pages/order/Formular";
import Home from "./pages/home/Home";
import Overview from "./pages/home/Overview";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Overview />} />
            <Route path="neuer_auftrag" element={<Formular />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
