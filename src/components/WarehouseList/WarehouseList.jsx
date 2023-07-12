import "../WarehouseList/WarehouseList.scss"
 function WarehouseList(props){
    return (
        <>
        <form className="warehouseform">
            <h1 className="title">Warehouses</h1>
            <input className="warehouseform__search" type = "text" placeholder="search" />
            <button className="warehouseform__addnew" type = "button">+ Add New Warehouse</button>
        </form>
        <ul className="warehouselist">
            <li className="warehouselist__display">
                <div className="flex-division">
                <p className="warehouselist__title">Warehouse</p>
                <p className="warehouselist__link">Manhattan</p>
                </div>
                <div className="flex-division">
                <p className="warehouselist__title">Contact Name</p>
                <p className="warehouselist__content">Parmin Aujula</p>
                </div>
                <div className="flex-division">
                <p className="warehouselist__title">Address</p>
                <p className="warehouselist__content">503 Broadway, New York, USA</p>
                </div>
                <div className="flex-division">
                <p className="warehouselist__title">Contact Information</p>
                <p className="warehouselist__content">647 555 5555</p>
                </div>
            </li>
        </ul>
        </>
    );
}
export default WarehouseList