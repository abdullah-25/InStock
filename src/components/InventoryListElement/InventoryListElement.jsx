import "../InventoryListElement/InventoryListElement.scss";
import {Link} from "react-router-dom"

function InventoryListElement({ id, item_name,category,status,quantity,warehouse_name,description, displayWarehouseName ,...rest}) {

    return (
        <li className="inventorylist__element">
                <div className="table-cell table-cell--first">
                    <p className="label-text inventorylist__title">INVENTORY ITEM</p>
                    <Link to = {`/inventory/${id}`} >
                    <p className="body-medium inventorylist__link">{item_name}</p>
                    </Link>
                </div>
                <div className="table-cell table-cell--category">
                    <p className="label-text inventorylist__title">CATEGORY</p>
                    <p className="body-medium inventorylist__content">{category}</p>
                </div>
                <div className="table-cell table-cell--status">
                    <p className="label-text inventorylist__title">STATUS</p>
                    <p className={`body-medium inventorylist__content--${status==="In Stock"?"instock":"outofstock"} inventorylist__content`}>{status}</p>
                </div>
                <div className="table-cell">
                    <p className="label-text inventorylist__title">QTY</p>
                    <p className="body-medium inventorylist__content">{quantity}</p>
                </div>  
                <div className="table-cell table-cell--empty">
                    {/* This cell left intentionally blank */}
                </div>

                <div className={`table-cell ${!displayWarehouseName && "table-cell--empty"}`}>
                    <p className="label-text inventorylist__title">{!displayWarehouseName && "WAREHOUSE"}</p>
                    <Link to={`/${rest.warehouse_id}`}>
                    <p className="body-medium warehouselist__content">{warehouse_name}</p>
                    </Link>
                </div>
                <div className="icon-container">
                <div className="table-cell">
                <button className="icon-delete" ></button>
                </div>
                <div className="table-cell table-cell--right">
                    <Link to ={`/inventory/edit/${id}`}>
                    <button className="icon-edit" ></button>
                    </Link>
                </div>
                </div>
            
        </li>
    )
}
export default InventoryListElement;
