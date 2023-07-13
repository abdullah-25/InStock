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
import NewWarehouse from "./components/NewWarehouse/NewWarehouse";

function App() {
  // const [inventoryArray, setInventoryArray] = useState(undefined);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/api/inventories")
  //     .then((response) => {
  //       setInventoryArray(response.data[0]);
  //     })
  //     .catch((response) => {
  //       console.log(response);
  //     });
  // }, []);
  // if (!inventoryArray) {
  //   return <> Loading...</>;
  // }

  return (
    <BrowserRouter>
      <Header />
      <NewWarehouse />

      {/* <Link to={`/addwarehouse`} style={{ textDecoration: "none" }}>
        <div>Add Warehouse</div>
      </Link> */}
      {/* <Routes> */}
      {/* <Route path="/" element={<Warehouses />} /> */}

      {/* <Route
          path="/"
          element={
            <InventoryList
              inventoryArray={inventoryArray}
              setInventoryArray={setInventoryArray}
            />
          }
        />
        <Route path="/details/:id" element={<WarehouseDetails />} />

        <Route
          path="/"
          element={
            <WarehouseList
              warehousearray={warehouseArray}
              setWarehouseArray={setWarehouseArray}
            />
          }
        /> */}
      {/* </Routes> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
