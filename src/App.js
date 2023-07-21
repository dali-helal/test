import ActiveReport from "./ActiveReport";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ViewerReport from "./Report2";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ActiveReport />} />
          <Route path="/report2" element={<ViewerReport />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
