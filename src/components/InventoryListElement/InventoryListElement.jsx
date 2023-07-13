import "../InventoryListElement/InventoryListElement.scss"

function InventoryListElement({ item,category,status,quantity,warehouse }) {
    return (
        <li className="inventorylist__element">
           
                <div className="table-cell">
                    <p className="body-small inventorylist__title">INVENTORY ITEM</p>
                    <p className="body-small inventorylist__link">{item}</p>
                </div>
                <div className="table-cell">
                    <p className="body-small inventorylist__title">STATUS</p>
                    <p className="body-small inventorylist__content--instock inventorylist__content">{status}</p>
                </div>
                <div className="table-cell">
                    <p className="body-small inventorylist__title">CATEGORY</p>
                    <p className="body-small inventorylist__content">{category}</p>
                </div>
                <div className="table-cell">
                    <p className="body-small inventorylist__title">QTY</p>
                    <p className="body-small inventorylist__content">{quantity}</p>
                </div>  
                <div className="table-cell">
                    {/* This cell left intentionally blank */}
                </div>
                <div className="table-cell">
                    <p className="body-small inventorylist__title">WAREHOUSE</p>
                    <p className="body-small warehouselist__content">{warehouse}</p>
                </div>
                <div className="icon-container">
                <div className="table-cell">
                <button className="icon-delete" ></button>
                </div>
                <div className="table-cell table-cell--right">
                    <button className="icon-edit" ></button>
                </div>
                </div>
            
        </li>
    )
}
export default InventoryListElement;