import error from "../../assets/icons/error-24px.svg";
import { useState } from "react";
import "../NewWarehouse/NewWarehouse.scss";
import axios from "axios";

export default function NewWarehouse() {
  //On load, all these values are true. This is to prevent showing errors before the user has typed anything.
  const [errors, setErrors] = useState({
    warehouseName:true,
    warehouseAddress:true,
    warehouseCountry:true,
    warehouseCity:true,
    ContactName:true,
    ContactPosition:true,
    ContactPhone:"647-555-9253",
    ContactEmail:"wrong@wrong.com",
    userInteracted:true
  })
  const submitDetails = (evt) => {
    evt.preventDefault();

    let warehouse = {
    warehouseName:evt.target.warehouseName.value,
    warehouseAddress:evt.target.warehouseAddress.value,
    warehouseCountry:evt.target.warehouseCountry.value,
    warehouseCity:evt.target.warehouseCity.value,
    ContactName:evt.target.ContactName.value,
    ContactPosition:evt.target.ContactPosition.value,
    ContactPhone:evt.target.ContactPhone.value,
    ContactEmail:evt.target.ContactEmail.value,
    }
    //Validation
    setErrors({ ...warehouse, userInteracted: errors.userInteracted })
    if (
    errors.warehouseName&&
    errors.warehouseAddress&&
    errors.warehouseCountry&&
    errors.warehouseCity&&
    errors.ContactName&&
    errors.ContactPosition&&
    errors.ContactPhone&&
    errors.ContactEmail&&
    errors.userInteracted) {
      axios.post("http://localhost:8080/api/warehouses", warehouse).then(response => {
        console.log(response);
      }).catch(response => {
        console.log(response);
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
        <h1 className="detailheader__title">Add New Warehouse</h1>
      </header>
      <form onSubmit={submitDetails}>
        <div className="addWarehouse">
        <div className="flex-section">
        <h2 className="addWarehouse__title">Warehouse Details</h2>

        <p className={`${errors.warehouseName ? "addWarehouse__hide" : "addWarehouse__error"}`}> <img src={error} alt="" className= "addItem__icon" /> Please enter a name!</p>
        <label htmlFor="warehouseName" className="label-text">Warehouse Name</label>
        <input className="addWarehouse__text" name="warehouseName" type="text" placeholder="Warehouse Name" onChange={handleError} />
        
        <p className={`${errors.warehouseAddress ? "addWarehouse__hide" : "addWarehouse__error"}`}> <img src={error} alt="" className= "addItem__icon" /> Please enter an address!</p>
        <label htmlFor="warehouseAddress" className="label-text">Warehouse Address</label>
        <input className="addWarehouse__text" name="warehouseAddress" type="text" placeholder="Warehouse Address" onChange={handleError} />

        <p className={`${errors.warehouseCity ? "addWarehouse__hide" : "addWarehouse__error"}`}> <img src={error} alt="" className= "addItem__icon" /> Please enter a city!</p>
        <label htmlFor="warehouseCity" className="label-text">Warehouse City</label>
        <input className="addWarehouse__text" name="warehouseCity" type="text" placeholder="Warehouse City" onChange={handleError} />

        <p className={`${errors.warehouseCountry ? "addWarehouse__hide" : "addWarehouse__error"}`}> <img src={error} alt="" className= "addItem__icon" /> Please enter a country!</p>
        <label htmlFor="warehouseCountry" className="label-text">Warehouse Country</label>
        <input className="addWarehouse__text" name="warehouseCountry" type="text" placeholder="Warehouse Country" onChange={handleError} />

        </div>
        <div className="flex-section">
        <h2 className="addWarehouse__title">Contact Details</h2>

        <p className={`${errors.ContactName ? "addWarehouse__hide" : "addWarehouse__error"}`}> <img src={error} alt="" className= "addItem__icon" /> Please enter a name!</p>
        <label htmlFor="ContactName" className="label-text">Contact Name</label>
        <input className="addWarehouse__text" name="ContactName" type="text" placeholder="Contact Name" onChange={handleError} />
        
        <p className={`${errors.ContactPosition ? "addWarehouse__hide" : "addWarehouse__error"}`}> <img src={error} alt="" className= "addItem__icon" /> Please enter a position!</p>
        <label htmlFor="ContactPosition" className="label-text">Contact Position</label>
        <input className="addWarehouse__text" name="ContactPosition" type="text" placeholder="Contact Position" onChange={handleError} />

        <p className={`${errors.ContactPhone.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/) ? "addWarehouse__hide" : "addWarehouse__error"}`}> <img src={error} alt="" className= "addItem__icon" /> Please enter a phone number!</p>
        <label htmlFor="ContactPhone" className="label-text">Phone Number</label>
        <input className="addWarehouse__text" name="ContactPhone" type="text" placeholder="Phone Number" onChange={handleError} />

        <p className={`${errors.ContactEmail.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ? "addWarehouse__hide" : "addWarehouse__error"}`}> <img src={error} alt="" className= "addItem__icon" /> Please enter an Email!</p>
        <label htmlFor="ContactEmail" className="label-text">Contact Email</label>
        <input className="addWarehouse__text" name="ContactEmail" type="text" placeholder="Contact Email" onChange={handleError} />

        </div>
        </div>
        <div className="addWarehouse__buttons">
        <button className="addWarehouse__cancel">Cancel</button>
        <button className="addWarehouse__submit" type="submit" >+ Add Warehouse</button>
        </div>
      </form>
    </>
  );
}
