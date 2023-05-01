import { BrowserRouter, Route, Routes } from "react-router-dom";
import Formular from "./pages/Formular";
import Home from "./pages/Home";
import Overview from "./pages/Overview";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Overview />} />
            <Route path="neue_fahrt" element={<Formular />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
