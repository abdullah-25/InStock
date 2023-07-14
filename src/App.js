import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import EditInventory from "./components/EditInventory/EditInventory";

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails.jsx";

// import Warehouses from "./pages/Warehouses/Warehouses";
// import WarehouseList from "./components/WarehouseList/WarehouseList";

// import { useEffect, useState } from "react";
// import axios from "axios";

// import InventoryList from "./components/InventoryList/InventoryList";
// import ItemDetails from "./components/ItemDetails/ItemDetails";

function App() {
  //   const [inventoryArray, setInventoryArray] = useState(undefined)
  //   useEffect(() => {
  //       axios.get("http://localhost:8080/api/inventories").then((response) => {
  //     setInventoryArray(response.data[0]);
  //   }).catch(response => {
  //     console.log(response);
  //   })
  //  }, [])
  //   if(!inventoryArray){
  //     return (
  //       <> Loading...
  //       </>
  //     )
  //   }

  return (
    <>
      <Header />
      <EditInventory />
      <Footer />
    </>
  );
}

export default App;
