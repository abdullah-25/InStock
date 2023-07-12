import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import InventoryList from "./components/InventoryList/InventoryList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useEffect, useState} from 'react';
import axios from 'axios';
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
        <Route path="/" element={<InventoryList inventoryArray={inventoryArray} setInventoryArray={setInventoryArray}/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
