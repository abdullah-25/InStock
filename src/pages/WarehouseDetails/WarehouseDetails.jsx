import "../PagePositioning.scss"
import WarehouseDetailsDisplay from "../../components/WarehouseDetailsDisplay/WarehouseDetailsDisplay";

import InventoryList from "../../components/InventoryList/InventoryList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function WarehouseDetails() {
    const warehouseID = useParams();

    const [warehouse, setWarehouse] = useState({})
    const [inventory, setInventory] = useState(undefined)

    useEffect(() => {
        axios.get(`http://localhost:8080/api/warehouses/${warehouseID.id}`).then((response) => {
            setWarehouse(response.data);
        }).catch(response => {
            console.log(response);
        })

        axios.get(`http://localhost:8080/api/warehouses/${warehouseID.id}/inventories`).then(response => {
            setInventory(response.data);
        }).catch(response => {
            console.log(response);
        })
    }, [warehouseID])
    if (!warehouse || !inventory) {
        return (
            <> Loading...
            </>
        )
    }
    
    return (
        <>

        <div className="positioning">
                    <WarehouseDetailsDisplay {...warehouse} />
                    <InventoryList inventoryArray={inventory} displayWarehouseName={false}/>
        </div>

        </>
    )
}


export default WarehouseDetails;