import "../PagePositioning.scss"
import InventoryList from "../../components/InventoryList/InventoryList.jsx"
import { useEffect, useState } from "react";
import axios from "axios";

function Inventory(){
    const [inventoryArray, setInventoryArray] = useState(undefined)
    useEffect(() => {
        axios.get("http://localhost:8080/api/inventories").then((response) => {
      setInventoryArray(response.data);
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
            <InventoryList inventoryArray={inventoryArray}/>
        </div>
    )
}

export default Inventory;