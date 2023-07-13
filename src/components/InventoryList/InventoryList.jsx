import "../InventoryList/InventoryList.scss"
import InventoryListElement from "../InventoryListElement/InventoryListElement.jsx"
function InventoryList({inventoryArray, warehouseName}) {
    
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
                    QUANTITY
                    <button className="sort-up" ></button>
                    </li>
                    <li className={`list-label label-text ${!warehouseName && "list-label--empty"}`}>
                    WAREHOUSE
                    <button className="sort-up" ></button>
                    </li>
                    <li className="list-label--end label-text">
                    ACTIONS
                    </li>
                </ul>
               { inventoryArray.map((item) => <InventoryListElement key={item.id} {...item} warehouseName={warehouseName}/>)}
            </ul>
        </>
    );
}
export default InventoryList