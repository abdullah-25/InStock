import "../InventoryList/InventoryList.scss"
import InventoryListElement from "../InventoryListElement/InventoryListElement.jsx"
import search_icon from "../../assets/icons/search-24px.svg"
function InventoryList({inventoryArray, setInventoryArray}) {
    return (
        <>
            <form className="itemform">
                <h1 className="title">Inventory</h1>
                <div className="itemform__search">
                <input className="itemform__input" type="text" placeholder="Search.." />
                <img className="icon itemform__icon" src={search_icon} alt=""/>
                </div>
                <button className="itemform__addnew" type="button"><p className="button-text">+ Add New Item</p></button>
            </form>
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