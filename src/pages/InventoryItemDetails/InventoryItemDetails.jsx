import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import ItemDetails from "../../components/ItemDetails/ItemDetails";
import "../PagePositioning.scss"

function InventoryItemDetails(){
    const [item, setItem] = useState(null);
    const itemID = useParams("id").id;
    useEffect(() => {
        axios.get(`http://localhost:8080/api/inventories/${itemID}`).then(response => {
            setItem(response.data[0])
        }).catch(response => {
            console.log(response.data)
        })
    }, [])
    if(!item){
        return <>
            Loading...
        </>
    }
    return (
        <div className="positioning">
            <ItemDetails item = {item}/>
        </div>
    )
}

export default InventoryItemDetails;