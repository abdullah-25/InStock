import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NewWarehouse from "./components/NewWarehouse/NewWarehouse";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Link to={`/addwarehouse`} style={{ textDecoration: "none" }}>
        <div>Add Warehouse</div>
      </Link> */}
      <Routes>
        <Route path="/addwarehouse" element={<NewWarehouse />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
