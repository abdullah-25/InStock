import "../WarehouseList/WarehouseList.scss"
import WarehouseListElement from "../WarehouseListElement/WarehouseListElement.jsx"
import search_icon from "../../assets/icons/search-24px.svg"
function WarehouseList({warehousearray, setWarehouseArray}) {
    
    return (
        <div className="component-container">
            <form className="warehouseform">
                <h1 className="title">Warehouses</h1>
                <div className="warehouseform__search">
                <input className="warehouseform__input" type="text" placeholder="Search.." />
                <img className="icon warehouseform__icon" src={search_icon} alt=""/>
                </div>
                <button className="warehouseform__addnew" type="button"><p className="button-text">+ Add New Warehouse</p></button>
            </form>
            <ul className="warehouselist">
                <ul className="warehouselist__labels">
                   <li className="list-label label-text">
                    Warehouse
                    <button className="sort-up" onClick={() => setWarehouseArray([...warehousearray.sort((a, b) => {
                        let x = a.warehouse_name.toLowerCase();
                        let y = b.warehouse_name.toLowerCase();
                        if (x < y) {return -1}
                        if (x > y) {return 1}
                        return 0;
                    })])}></button>
                    
                    </li>
                   <li className="list-label label-text">
                    Address
                    <button className="sort-up" onClick={() => setWarehouseArray([...warehousearray.sort((a, b) => {
                        let x = a.address.toLowerCase();
                        let y = b.address.toLowerCase();
                        if (x < y) {return -1}
                        if (x > y) {return 1}
                        return 0;
                    })])}></button>
                   
                    </li>
                   <li className="list-label label-text">
                    Contact Name
                    <button className="sort-up" onClick={() => setWarehouseArray([...warehousearray.sort((a, b) => {
                        let x = a.contact_name.toLowerCase();
                        let y = b.contact_name.toLowerCase();
                        if (x < y) {return -1}
                        if (x > y) {return 1}
                        return 0;
                    })])}></button>
                  
                    </li>
                   <li className="list-label label-text">
                    Contact Information
                    <button className="sort-up" onClick={() => setWarehouseArray([...warehousearray.sort((a, b) => {
                        let x = a.contact_email.toLowerCase();
                        let y = b.contact_email.toLowerCase();
                        if (x < y) {return -1}
                        if (x > y) {return 1}
                        return 0;
                    })])}></button>
                    </li>
                    <li className="list-label--end label-text">
                    Actions
                    </li>
                </ul>
               { warehousearray.map((warehouse) => <WarehouseListElement key={warehouse.id} name={warehouse.warehouse_name} address={warehouse.address} city={warehouse.city}contactName={warehouse.contact_name} contactPhone={warehouse.contact_phone} contactEmail={warehouse.contact_email} />)}
            </ul>
        </div>
    );
}
export default WarehouseList