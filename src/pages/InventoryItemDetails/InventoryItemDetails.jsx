import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import ItemDetails from "../../components/ItemDetails/ItemDetails";
import "../PagePositioning.scss"

function InventoryItemDetails(){
    const [item, setItem] = useState(null);
    const itemID = useParams("id").id;
    useEffect(() => {
        axios.get(`/inventories/${itemID}`).then(response => {
            setItem(response.data)
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