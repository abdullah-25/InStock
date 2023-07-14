import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import EditInventory from "./components/EditInventory/EditInventory";
import AddInventory from "./components/AddInventory/Addinventory";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouses from "./pages/Warehouses/Warehouses";
import AddNewInventoryItem from "./pages/AddNewInventoryItem/AddNewInventoryItem";
import AddNewWarehouse from "./pages/AddNewWarehouse/AddNewWarehouse";
import EditInventoryItem from "./pages/EditInventoryItem/EditInventoryItem";
import Inventory from "./pages/Inventory/Inventory";
import InventoryItemDetails from "./pages/InventoryItemDetails/InventoryItemDetails";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import EditWarehouses from "./pages/EditWarehouses/EditWarehouses";

import NewWarehouse from "./components/NewWarehouse/NewWarehouse";

import ItemDetails from "./components/ItemDetails/ItemDetails";


// import InventoryList from "./components/InventoryList/InventoryList";
// import ItemDetails from "./components/ItemDetails/ItemDetails";




function App() {


  return (
    <>
      <Header />
        <Route path="/" element={<Warehouses />} />
        <Route path="/:id" element={<WarehouseDetails />} />
        {/* <Route path="/edit/:id" element={<EditWarehouses />}/>  */}
        {/* <Route path="/new" element={<AddNewWarehouse />}/> */}
        <Route path="/inventory" element={<Inventory />}/>
        {/* <Route path="/inventory/:id" element={<InventoryItemDetails/>}/> */}
        {/* <Route path="/inventory/edit/:id" element={<EditInventoryItem />}/> */}
        {/* <Route path="/inventory/add/" element={<AddNewInventoryItem />}/> */}
        {/* <Route path="/delete/" element={<Delete />}/> */}

      </Routes>


      <Footer />
    </>
  );
}

export default App;
