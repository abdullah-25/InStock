import "../InventoryItemForm/InventoryItemForm.scss"
import search_icon from "../../assets/icons/search-24px.svg"

function InventoryItemForm() {
    return (
        <>
            <form className="itemform">
                <h1 className="title">Inventory</h1>
                <div className="itemform__search">
                    <input className="itemform__input" type="text" placeholder="Search.." />
                    <img className="icon itemform__icon" src={search_icon} alt="" />
                </div>
                <button className="itemform__addnew" type="button"><p className="button-text">+ Add New Item</p></button>
            </form>
        </>
    )
}
export default InventoryItemForm()