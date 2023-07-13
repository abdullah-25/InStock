import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NewWarehouse from "./components/NewWarehouse/NewWarehouse";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  //   const [warehouseArray, setWarehouseArray] = useState(undefined)
  //   useEffect(() => {
  //       axios.get("http://localhost:8080/api/warehouses").then((response) => {
  //     setWarehouseArray(response.data);
  //   }).catch(response => {
  //     console.log(response);
  //   })
  //  }, [])
  //   if(!warehouseArray){
  //     return (
  //       <> Loading...
  //       </>
  //     )
  //   }
  return (
    <BrowserRouter>
      <Header />
      {/* <Link to={`/addwarehouse`} style={{ textDecoration: "none" }}>
        <div>Add Warehouse</div>
      </Link> */}
      <NewWarehouse />
      <Routes>
        {/* <Route path="/" element={<WarehouseList warehousearray={warehouseArray} setWarehouseArray={setWarehouseArray}/>} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
