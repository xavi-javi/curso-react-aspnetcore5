import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import IndiceGeneros from "./generos/IndicesGeneros";
import LandingPage from "./LandingPage";
import Menu from "./utils/Menu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className="container py-3">
          <Routes>
            <Route path="/" element={<LandingPage />}>
            </Route>
            <Route path="/generos" element={<IndiceGeneros></IndiceGeneros>}>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
