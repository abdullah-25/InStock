import "../WarehouseList/WarehouseList.scss"
import del_icon from "../../assets/icons/delete_outline-24px.svg"
import edit_icon from "../../assets/icons/edit-24px.svg"
import search_icon from "../../assets/icons/search-24px.svg"
function WarehouseList(props) {
    return (
        <div className="component-container">
            <form className="warehouseform">
                <h1 className="title">Warehouses</h1>
                <div className="warehouseform__search">
                <input className="warehouseform__input" type="text" placeholder="search" />
                <image className="icon warehouseform__icon" src={search_icon} />
                </div>
                <button className="warehouseform__addnew" type="button">+ Add New Warehouse</button>
            </form>
            <ul className="warehouselist">
                <li className="warehouselist__element">
                    <div className="table-column">
                    <div className="table-cell">
                        <p className="body-small warehouselist__title">Warehouse</p>
                        <p className="body-small warehouselist__link">Manhattan</p>
                    <div className="table-cell">
                        <p className="body-small warehouselist__title">Address</p>
                        <p className="body-small warehouselist__content">503 Broadway, New York, USA</p>
                    </div>
                    <div className="table-cell">
                        <img className="icon" src={del_icon} />
                    </div>
                    </div>

                    </div>
                    <div className="table-column">
                    <div className="table-cell">
                        <p className="body-small warehouselist__title">Contact Name</p>
                        <p className="body-small warehouselist__content">Parmin Aujula</p>
                    </div>
                    <div className="table-cell">
                        <p className="body-small warehouselist__title">Contact Information</p>
                        <p className="body-small warehouselist__content">647 555 5555 paujli@instock.com</p>
                    </div>
                    <div className="table-cell table-cell--right">
                        <img className="icon" src={edit_icon} />
                    </div>
                        
                    </div>
                </li>
            </ul>
        </div>
    );
}
export default WarehouseList