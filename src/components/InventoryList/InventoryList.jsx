import "../InventoryList/InventoryList.scss"
import InventoryListElement from "../InventoryListElement/InventoryListElement.jsx"
function InventoryList({inventoryArray, setInventoryArray}) {
    return (
        <>
            
            <ul className="inventorylist">
                <ul className="inventorylist__labels">
                   <li className="list-label label-text">
                    ITEM
                    <button className="sort-up"></button>
                    
                    </li>
                   <li className="list-label label-text">
                    CATEGORY
                    <button className="sort-up" ></button>
                   
                    </li>
                   <li className="list-label label-text">
                    STATUS
                    <button className="sort-up" ></button>
                  
                    </li>
                   <li className="list-label label-text">
                    QTY
                    <button className="sort-up" ></button>
                    </li>
                    <li className="list-label label-text">
                    WAREHOUSE
                    <button className="sort-up" ></button>
                    </li>
                    <li className="list-label--end label-text">
                    ACTIONS
                    </li>
                </ul>
               { inventoryArray.map((item) => <InventoryListElement key={item.id} item={item.item_name} category={item.category} status={item.status} quantity={item.quantity} warehouse={item.warehouse_name} />)}
            </ul>
        </>
    );
}
export default InventoryList