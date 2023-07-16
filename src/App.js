import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouses from "./pages/Warehouses/Warehouses";
import AddNewInventoryItem from "./pages/AddNewInventoryItem/AddNewInventoryItem";
import AddNewWarehouse from "./pages/AddNewWarehouse/AddNewWarehouse";
import EditInventoryItem from "./pages/EditInventoryItem/EditInventoryItem";
import Inventory from "./pages/Inventory/Inventory";
import InventoryItemDetails from "./pages/InventoryItemDetails/InventoryItemDetails";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import EditWarehouses from "./pages/EditWarehouses/EditWarehouses";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/warehouse" element={<Warehouses />} />
        <Route path="/warehouse/:id" element={<WarehouseDetails />} />
        <Route path="/warehouse/edit/:id" element={<EditWarehouses />} />
        <Route path="/warehouse/new" element={<AddNewWarehouse />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/:id" element={<InventoryItemDetails />} />
        <Route path="/inventory/edit/:id" element={<EditInventoryItem />} />
        <Route path="/inventory/add/" element={<AddNewInventoryItem />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
