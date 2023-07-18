import "../PagePositioning.scss"
import {useParams} from 'react-router-dom';
import axios from "axios";
import {useState, useEffect} from 'react';
import EditWarehouse from "../../components/EditWarehouse/EditWarehouse"
function EditWarehouses(){
    const warehouseID = useParams().id;
    const [warehouse, setWarehouse] = useState("");
    useEffect(() => {
        axios.get(`http://localhost:8080/api/warehouses/${warehouseID}`).then((response) => {
      setWarehouse(response.data);
    }).catch(response => {
      console.log(response);
    })
   }, [warehouseID])
   console.log(warehouse);
    if(!warehouse){
      return (
        <> 
        Loading...
        </>
      )
    }
    return (
        <div className="positioning">
            <EditWarehouse warehouse={warehouse}/>
        </div>
    )
}

export default EditWarehouses;