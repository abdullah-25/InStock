import "../InventoryForm/InventoryForm.scss"

import search_icon from "../../assets/icons/search-24px.svg"
import {Link} from "react-router-dom"
function InventoryForm() {
    return (
        <form className="itemform">
                <h1 className="title">Inventory</h1>
                <div className="itemform__search">
                <input className="itemform__input" type="text" placeholder="Search.." />
                <img className="icon itemform__icon" src={search_icon} alt=""/>
                </div>

                <Link to = "/inventory/add">
                <button className="itemform__addnew" type="button">+ Add New Item</button>

                </Link>
            </form>
    )
}

export default InventoryForm;