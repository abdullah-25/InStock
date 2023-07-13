import WarehouseDetailsDisplay from "../../components/WarehouseDetailsDisplay/WarehouseDetailsDisplay";
import "../WarehouseDetails/WarehouseDetails.scss"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function WarehouseDetails(props) {
    const warehouseID = useParams();
    const [warehouse, setWarehouse] = useState(0)
    useEffect(() => {
        axios.get(`http://localhost:8080/api/warehouses/${warehouseID.id}`).then((response) => {
            setWarehouse(response.data);
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
        </div>
        </>
    )
}

import "../PagePositioning.scss"
export default WarehouseDetails;