import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WarehouseList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
