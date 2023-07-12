import "../InventoryList/InventoryList.scss"
import InventoryListElement from "../InventoryListElement/InventoryListElement.jsx"
import search_icon from "../../assets/icons/search-24px.svg"
function InventoryList({inventoryArray, setInventoryArray}) {
    
    return (
        <div className="component-container">
            <form className="addItemform">
                <h1 className="title">Inventory</h1>
                <div className="addItemform__search">
                <input className="addItemform__input" type="text" placeholder="Search.." />
                <img className="icon addItemform__icon" src={search_icon} alt=""/>
                </div>
                <button className="addItemform__addnew" type="button"><p className="button-text">+ Add New Item</p></button>
            </form>
            <ul className="inventorylist">
                <ul className="inventorylist__labels">
                   <li className="list-label label-text">
                    ITEM
                    <button className="sort-up" onClick={() => setInventoryArray([...inventoryArray.sort((a, b) => {
                        let x = a.name.toLowerCase();
                        let y = b.name.toLowerCase();
                        if (x < y) {return -1}
                        if (x > y) {return 1}
                        return 0;
                    })])}></button>
                    
                    </li>
                   <li className="list-label label-text">
                    CATEGORY
                    <button className="sort-up" onClick={() => setInventoryArray([...inventoryArray.sort((a, b) => {
                        let x = a.category.toLowerCase();
                        let y = b.category.toLowerCase();
                        if (x < y) {return -1}
                        if (x > y) {return 1}
                        return 0;
                    })])}></button>
                   
                    </li>
                   <li className="list-label label-text">
                    STATUS
                    <button className="sort-up" onClick={() => setInventoryArray([...inventoryArray.sort((a, b) => {
                        let x = a.status.toLowerCase();
                        let y = b.status.toLowerCase();
                        if (x < y) {return -1}
                        if (x > y) {return 1}
                        return 0;
                    })])}></button>
                  
                    </li>
                   <li className="list-label label-text">
                    QTY
                    <button className="sort-up" onClick={() => setInventoryArray([...inventoryArray.sort((a, b) => {
                        let x = a.quantity.toLowerCase();
                        let y = b.quantity.toLowerCase();
                        if (x < y) {return -1}
                        if (x > y) {return 1}
                        return 0;
                    })])}></button>
                    </li>
                    <li className="list-label--end label-text">
                    ACTIONS
                    </li>
                </ul>
               { inventoryArray.map((item) => <InventoryListElement key={item.id} item={item.item_name} category={item.category} status={item.status} quantity={item.quantity} warehouse={item.warehouse_name} />)}
            </ul>
        </div>
    );
}
export default InventoryList