import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import "./EditInventory.scss";

function EditInventory(){
    // function SubmitInventory(e){

    // }
    return(
    <div className="background">
        <div className="card">
            <div className="card__heading">
                <img src={arrowBack} className="card__heading-arrow"/>
                <h1>Edit Inventory Item</h1>
            </div>
            <div className="card__hr"></div>
         {/* add submit handler */}
            <form>
                <div className="card__form">
                    <div className="card__form__inventory">
                        <h2 className="card__form__inventory-title">
                            Item Details
                        </h2>
                        <div className="label-text">Item Name</div>
                        <input
                            type="text"
                            className="card__form__inventory-input"
                            placeholder="Inventory Item Name"
                            name="inventoryName"
                            // autocomplete="name"
                            // enterkeyhint="next"
                            required 
                        />
                        <div className="label-text">Description</div>
                        <input
                            type="text"
                            className="card__form__inventory-input"
                            placeholder="Inventory Item Name"
                            name="inventoryName"
                            // autocomplete="name"
                            // enterkeyhint="next"
                            required 
                        />
                        <div className="label-text">Category</div>
                        <input
                            type="text"
                            className="card__form__inventory-input"
                            placeholder="Inventory Item Name"
                            name="inventoryName"
                            // autocomplete="name"
                            // enterkeyhint="next"
                            required 
                        />
                    </div>
                    <div className="card__form__inventory-hr"></div>
                    <div className="card__form__availability-verticalline"></div>
                    <div className="card__form__availabilty">
                        <h2 className="card__form__availabilty-title">
                            Item Availabilty
                        </h2>
                        <div className="label-text">Status</div>
                        <input
                            type="text"
                            className="card__form__inventory-input"
                            placeholder="Inventory Item Name"
                            name="inventoryName"
                            // autocomplete="name"
                            // enterkeyhint="next"
                            required 
                        />
                        <div className="label-text">Warehouse</div>
                        <input
                            type="text"
                            className="card__form__inventory-input"
                            placeholder="Inventory Item Name"
                            name="inventoryName"
                            // autocomplete="name"
                            // enterkeyhint="next"
                            required 
                        />
                    </div>
                </div>
                <div className="card__buttons">
                    <button className="card__buttons-cancel">Cancel</button>
                    <button className="card__buttons-save">Save</button>
                </div>
            </form>
        </div>
    </div>
    );
}

export default EditInventory;