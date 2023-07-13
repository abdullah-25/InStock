import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails.jsx";
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
      <Routes>
        <Route path="/details/:id" element={<WarehouseDetails />}/> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
