import "../WarehouseListElement/WarehouseListElement.scss"

function WarehouseListElement({ name, address,city, contactName, contactPhone, contactEmail }) {
    return (
        <li className="warehouselist__element">
           
                <div className="table-cell">
                    <p className="body-small warehouselist__title">Warehouse</p>
                    <p className="body-small warehouselist__link">{name}</p>
                </div>
                <div className="table-cell">
                    <p className="body-small warehouselist__title">Address</p>
                    <p className="body-small warehouselist__content">{address}</p>
                    <p className="body-small warehouselist__content">{city}</p>
                </div>
           
           
                <div className="table-cell">
                    <p className="body-small warehouselist__title">Contact Name</p>
                    <p className="body-small warehouselist__content">{contactName}</p>
                </div>
                <div className="table-cell">
                    <p className="body-small warehouselist__title">Contact Information</p>
                    <p className="body-small warehouselist__content">{contactEmail}</p>
                    <p className="body-small warehouselist__content">{contactPhone}</p>
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
export default WarehouseListElement;