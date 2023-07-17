import "../PagePositioning.scss"
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";
import EditInventory from "../../components/EditInventory/EditInventory"
function EditInventoryItem(){
    const itemID = useParams().id;
    const [item, setItem] = useState("");
    useEffect(() => {
        axios.get(`http://localhost:8080/api/inventories/${itemID}`).then((response) => {
      setItem(response.data[0]);
    }).catch(response => {
      console.log(response);
    })
   }, [itemID])
   
    if(!item){
      return (
        <> 
        Loading...
        </>
      )
    }
    return (
        <div className="positioning">
            <EditInventory item={item}/>
        </div>
    )
}

export default EditInventoryItem;