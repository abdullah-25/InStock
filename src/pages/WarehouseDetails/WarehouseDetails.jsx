import "../PagePositioning.scss"
import WarehouseDetailsDisplay from "../../components/WarehouseDetailsDisplay/WarehouseDetailsDisplay";
import InventoryList from "../../components/InventoryList/InventoryList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function WarehouseDetails() {
    const warehouseID = useParams();
    const [warehouse, setWarehouse] = useState(0);
    const [inventoryArray, setInventoryArray] = useState(undefined);
    useEffect(() => {
        axios.get(`http://localhost:8080/api/warehouses/${warehouseID.id}`).then((response) => {
            setWarehouse(response.data);
        }).catch(response => {
            console.log(response);
        })
        axios.get(`http://localhost:8080/api/warehouses/${warehouseID.id}/inventories/`).then((response) => {
            setInventoryArray(response.data);
        }).catch(response => {
            console.log(response);
        })
    }, [warehouseID])
    if (!warehouse) {
        return (
            <> Loading...
            </>
        )
    }
    console.log(warehouse);
    return (
        <>
            <div className="positioning">
                <WarehouseDetailsDisplay {...warehouse} />
                <InventoryList inventoryArray={inventoryArray} />
            </div>
        </>
    )
}


export default WarehouseDetails;