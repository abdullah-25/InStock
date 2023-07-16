import "../PagePositioning.scss"
import WarehouseList from "../../components/WarehouseList/WarehouseList"
import { useEffect, useState } from "react";
import axios from "axios";

function Warehouses(){
    const [warehouseArray, setWarehouseArray] = useState(undefined)
    useEffect(() => {
        axios.get("http://localhost:8080/api/warehouses").then((response) => {
      setWarehouseArray(response.data);
    }).catch(response => {
      console.log(response);
    })
   }, [])
   if(!warehouseArray){
    return (
    <>
    Loading...
    </>
    )
   }
    return (
        <div className="positioning">
            <WarehouseList warehousearray={warehouseArray} />
        </div>
    )
}

export default Warehouses;