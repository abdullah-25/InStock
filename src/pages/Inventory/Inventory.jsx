import "../PagePositioning.scss"
import InventoryList from "../../components/InventoryList/InventoryList.jsx"
import { useEffect, useState } from "react";
import axios from "axios";
import InventoryForm from "../../components/InventoryForm/InventoryForm";

function Inventory(){
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
        <> 
        Loading...
        </>
      )
    }
    return (
        <div className="positioning">
            <InventoryForm />
            <InventoryList inventoryArray={inventoryArray} displayWarehouseName={true}/>
        </div>
    )
}

export default Inventory;