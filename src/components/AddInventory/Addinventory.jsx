import dropdown from "../../assets/icons/arrow_drop_down-24px.svg"
import error from "../../assets/icons/error-24px.svg";
import { useState, useEffect } from "react";
import "../AddInventory/AddInventory.scss";
import axios from "axios";

export default function Addinventory() {
  //On load, all these values are true. This is to prevent showing errors before the user has typed anything.
  const [errors, setErrors] = useState({
    item_name: true,
    description: true,
    category: true,
    status: "false",
    quantity: true,
    warehouse_id: true,
    //This one value is changed whenever a new input occurs
    userInteracted: false,
  })
  const submitDetails = (evt) => {
    evt.preventDefault();
    let item = {
      warehouse_id: evt.target.warehouse_id.value,
      item_name: evt.target.item_name.value,
      description: evt.target.description.value,
      category: evt.target.category.value,
      status: evt.target.status.value,
      quantity: evt.target.quantity.value,
    }
    //Validation
    setErrors({ ...item, userInteracted: errors.userInteracted })
    if (item.item_name && item.description && item.category && item.quantity && item.warehouse_id && errors.userInteracted) {
      axios.post("http://localhost:8080/api/inventories", item).then(response => {
        console.log(response);
      }).catch(response => {
        console.log(response)
      })
    }
  }
  const handleError = (evt) => {
    errors[evt.target.name] = evt.target.value;
    errors.userInteracted = true;
    setErrors({ ...errors });

  }
  return (
    <>
      <header className="detailheader">
        <button className="detailheader__back"></button>
        <h1 className="detailheader__title">Add New Inventory Item</h1>
      </header>
      <form onSubmit={submitDetails}>
        <div className="addItem">
        <div className="flex-section">
        <h2 className="addItem__title">Item Details</h2>
        <p className={`${errors.item_name ? "addItem__hide" : "addItem__error"}`}> <img src={error} alt="" className= "addItem__icon" /> Please enter a name!</p>
        <label htmlFor="item_name" className="label-text">Item Name</label>
        <input className="addItem__text" name="item_name" type="text" placeholder="Item name" onChange={handleError} />
        <p className={`${errors.description ? "addItem__hide" : "addItem__error"}`}> <img src={error} alt="" className= "addItem__icon" /> Please enter a description!</p>
        <label htmlFor="description" className="label-text">Item Description</label>
        <textarea className="addItem__textarea" name="description" placeholder="Enter Description" onChange={handleError}></textarea>
        <p className={`${errors.category ? "addItem__hide" : "addItem__error"}`}> <img src={error} alt="" className= "addItem__icon" /> Please enter a category!</p>
        <label htmlFor="category" className="label-text">Item Category</label>
        <div className="select-icon-styling">
        <select name="category" defaultValue="" className="addItem__select" onChange={handleError}>
        <option value="" disabled hidden>Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Sports">Sports</option>
          <option value="Gear">Gear</option>
          <option value="Accessories">Accessories</option>
          <option value="Health">Health</option>
        </select>
        <img className="addItem__dropdown" src = {dropdown} alt=""/>
        </div>
        </div>
        <div className="flex-section">
        <h2 className="addItem__title">Item Availability</h2>
        <label className="label-text">Status</label>
        <div className="radio-spacing">
        <input type="radio" name="status" value={true} id="inStock" onChange={handleError} />
        <label htmlFor="inStock" className="label-text">In Stock</label>
        <input type="radio" name="status" value={false} id="outOfStock" defaultChecked className="radio-spacing__right"onChange={handleError} />
        <label htmlFor="outOfStock" className="label-text">Out of Stock</label>
        </div>
        <p className={`${errors.warehouse_id ? "addItem__hide" : "addItem__error"}`}> <img src={error} alt="" className= "addItem__icon" /> Please enter a warehouse!</p>
        <label htmlFor="warehouse_id" className="label-text">Warehouse</label>
        <div className="select-icon-styling">
        <select name="warehouse_id"  defaultValue="" className="addItem__select" onChange={handleError}>
          <option value="" disabled hidden>Select Name</option>
          <option value="1">Manhattan</option>
          <option value="2">Washington</option>
          <option value="3">Jersey</option>
          <option value="4">SF</option>
          <option value="5">Santa Monica</option>
          <option value="6">Seattle</option>
          <option value="7">Miami</option>
          <option value="8">Boston</option>
        </select>
        <img className="addItem__dropdown" src = {dropdown} alt=""/>
        </div>
        <div className={`addItem__quantity ${errors.status === "false"  && "addItem__hide"}`} >
        <p className={`${errors.quantity ? "addItem__hide" : "addItem__error"}`}> <img src={error} alt="" className= "addItem__icon" /> Please enter a quantity!</p>
        <label htmlFor="quantity" className="label-text">Quantity</label>
        <input name="quantity" type="text" placeholder="Quantity" className="addItem__text" onChange={handleError} />
        </div>
        </div>
        </div>
        <div className="addItem__buttons">
        <button className="addItem__cancel">Cancel</button>
        <button className="addItem__submit" type="submit" >+ Add Item</button>
        </div>
      </form>
    </>
  );
}
