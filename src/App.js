import Header from "./component/Header";

import Footer from "./component/Footer";
import Homepage from "./pages/Homepage";
import Places from "./pages/Places";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route Exact path="/" element={<Homepage />} />
        <Route Exact path="/place" element={<Places />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
