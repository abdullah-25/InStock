import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails.jsx";

import Warehouses from "./pages/Warehouses/Warehouses";
import WarehouseList from "./components/WarehouseList/WarehouseList";

import { useEffect, useState } from "react";
import axios from "axios";


import InventoryList from "./components/InventoryList/InventoryList";
import ItemDetails from "./components/ItemDetails/ItemDetails";


function App() {
  const [inventoryArray, setInventoryArray] = useState(undefined)
  useEffect(() => {
      axios.get("http://localhost:8080/api/inventories").then((response) => {
    setInventoryArray(response.data[0]);
  }).catch(response => {
    console.log(response);
  })
 }, [])
  if(!inventoryArray){
    return (
      <> Loading...
      </>
    )
  }


  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/details/:id" element={<WarehouseDetails />}/> 


      {/* <Link to={`/addwarehouse`} style={{ textDecoration: "none" }}>
        <div>Add Warehouse</div>
      </Link> */}


        <Route path="/" element={<ItemDetails item={{
    id: 5,
    warehouse_name: "Manhatten",
    item_name: "Shampoo",
    description: "Natural shampoo made from 99% biodegradable ingredients.",
    category: "Health",
    status: "In Stock",
    quantity: 4350,
    created_at: "2023-07-12T16:11:34.000Z",
    updated_at: "2023-07-12T16:11:34.000Z"
  }}/>} />

         <Route path="/" element={<Warehouses />} />


        {/* <Route path="/" element={<InventoryList inventoryArray={inventoryArray} setInventoryArray={setInventoryArray}/>} /> */}


        {/* <Route path="/" element={<WarehouseList warehousearray={warehouseArray} setWarehouseArray={setWarehouseArray}/>} /> */}



      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
