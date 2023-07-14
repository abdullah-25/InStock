import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import error from "../../assets/icons/error-24px.svg";
import { useState, useEffect } from "react";
import "../../components/NewWarehouse/NewWarehouse.scss";
import "./EditWarehouse.scss";
import axios from "axios";

export default function EditWarehouse({
  warehouse_name,
  address,
  city,
  contact_name,
  contact_email,
  contact_phone,
  contact_position,
}) {
  const [warehouseName, setwarehouseName] = useState("");
  const [warehouseAddress, setwarehouseAddress] = useState("");
  const [warehouseCountry, setwarehouseCountry] = useState("");
  const [warehouseCity, setwarehouseCity] = useState("");
  const [ContactName, setContactName] = useState("");
  const [ContactPosition, setContactPosition] = useState("");
  const [ContactPhone, setContactPhone] = useState("");
  const [ContactEmail, setContactEmail] = useState("");
  const [errors, setErrors] = useState({});

  function handleChangeWareHouseName(e) {
    setwarehouseName(e.target.value);
  }
  function handleChangeWareHouseAddress(e) {
    setwarehouseAddress(e.target.value);
  }
  function handleChangeWareHouseCountry(e) {
    setwarehouseCountry(e.target.value);
  }
  function handleChangeWareHouseCity(e) {
    setwarehouseCity(e.target.value);
  }

  function handleChangeContactName(e) {
    setContactName(e.target.value);
  }
  function handleChangeContactPosition(e) {
    setContactPosition(e.target.value);
  }
  function handleChangeContactEmail(e) {
    setContactEmail(e.target.value);
    checkEmail(ContactEmail);
  }
  function handleChangeContactPhone(e) {
    setContactPhone(e.target.value);
    checkPhoneNumber(ContactPhone);
  }

  function SubmitDetails(e) {
    e.preventDefault();

    const errors = {};

    if (!warehouseName) {
      errors.warehouseName = true;
    }

    if (!warehouseAddress) {
      errors.warehouseAddress = true;
    }
    if (!warehouseCity) {
      errors.warehouseCity = true;
    }

    if (!warehouseCountry) {
      errors.warehouseCountry = true;
    }
    if (!ContactName) {
      errors.ContactName = true;
    }
    if (!ContactPosition) {
      errors.ContactPosition = true;
    }
    if (!ContactPhone) {
      errors.ContactPhone = true;
    }
    if (!ContactEmail) {
      errors.ContactEmail = true;
    }

    setErrors(errors);

    useEffect(() => {
      axios
        .put("http://localhost:8080/api/warehouse")
        .then(() => {})
        .catch((response) => {
          console.log(response);
        });
    }, []);
  }
  function checkPhoneNumber(ContactPhone) {
    let phoneno = /^\d{10}$/;
    if (ContactPhone.match(phoneno)) {
      return true;
    } else {
      alert("Enter Phone Number with the correct format");
      return false;
    }
  }
  function checkEmail(e) {
    let regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (e.target.value.match(regex)) {
      return true;
    } else return false;
  }

  return (
    <div className="outerdiv">
      <div className="container">
        <div className="container__heading">
          <img src={arrowBack} className="container__heading--arrow" />
          <h1>Edit Warehouse</h1>
        </div>
        <div className="container__hr"></div>
        <form onSubmit={SubmitDetails}>
          <div className="container__form">
            <div className="container__form__warehouse">
              <h2 className="container__form__warehouse--title">
                Warehouse Details
              </h2>

              <div className="label-text">Warehouse Name</div>
              <input
                type="text"
                className={`container__form__warehouse--input ${
                  errors.warehouseName
                    ? "container__form__warehouse--input--invalid"
                    : ""
                }`}
                placeholder={warehouse_name}
                name="warehouseName"
                onChange={handleChangeWareHouseName}
              ></input>

              {errors.warehouseName && (
                <div className="error">
                  <img src={error} />
                  <div className="error--text">This field is required</div>
                </div>
              )}

              <div className="label-text">Street Address</div>
              <input
                type="text"
                className={`container__form__warehouse--input ${
                  errors.warehouseAddress
                    ? "container__form__warehouse--input--invalid"
                    : ""
                }`}
                placeholder={address}
                name="warehouseAddress"
                onChange={handleChangeWareHouseAddress}
              ></input>

              {errors.warehouseAddress && (
                <div className="error">
                  <img src={error} />
                  <div className="error--text">This field is required</div>
                </div>
              )}

              <div className="label-text">City</div>
              <input
                type="text"
                className={`container__form__warehouse--input ${
                  errors.warehouseCity
                    ? "container__form__warehouse--input--invalid"
                    : ""
                }`}
                name="warehouseCity"
                placeholder={city}
                onChange={handleChangeWareHouseCity}
              ></input>
              {errors.warehouseCity && (
                <div className="error">
                  <img src={error} />
                  <div className="error--text">This field is required</div>
                </div>
              )}

              <div className="label-text">Country</div>
              <input
                type="text"
                className={`container__form__warehouse--input ${
                  errors.warehouseCountry
                    ? "container__form__warehouse--input--invalid"
                    : ""
                }`}
                name="warehouseCountry"
                placeholder="Country"
                onChange={handleChangeWareHouseCountry}
              ></input>
              {errors.warehouseCountry && (
                <div className="error">
                  <img src={error} />
                  <div className="error--text">This field is required</div>
                </div>
              )}
            </div>
            <div className="container__form__warehouse--hr"></div>
            <div className="container__form__contact--verticalline"></div>
            <div className="container__form__contact">
              <h2 className="container__form__contact--title">
                Contact Details
              </h2>

              <div className="label-text">Contact Name</div>
              <input
                type="text"
                className={`container__form__warehouse--input ${
                  errors.ContactName
                    ? "container__form__warehouse--input--invalid"
                    : ""
                }`}
                name="contactName"
                placeholder={contact_name}
                onChange={handleChangeContactName}
              ></input>
              {errors.ContactName && (
                <div className="error">
                  <img src={error} />
                  <div className="error--text">This field is required</div>
                </div>
              )}
              <div className="label-text">Position</div>
              <input
                type="text"
                className={`container__form__warehouse--input ${
                  errors.ContactPosition
                    ? "container__form__warehouse--input--invalid"
                    : ""
                }`}
                name="contactPosition"
                placeholder={contact_position}
                onChange={handleChangeContactPosition}
              ></input>
              {errors.ContactPosition && (
                <div className="error">
                  <img src={error} />
                  <div className="error--text">This field is required</div>
                </div>
              )}
              <div className="label-text">Phone Number</div>
              <input
                type="text"
                className={`container__form__warehouse--input ${
                  errors.ContactPhone
                    ? "container__form__warehouse--input--invalid"
                    : ""
                }`}
                name="contactPhone"
                placeholder={contact_phone}
                onClick={handleChangeContactPhone}
              ></input>
              {errors.ContactPhone && (
                <div className="error">
                  <img src={error} />
                  <div className="error--text">This field is required</div>
                </div>
              )}
              <div className="label-text">Email</div>
              <input
                type="text"
                className={`container__form__warehouse--input ${
                  errors.ContactEmail
                    ? "container__form__warehouse--input--invalid"
                    : ""
                }`}
                name="contactEmail"
                placeholder={contact_email}
                onClick={handleChangeContactEmail}
              ></input>
              {errors.ContactEmail && (
                <div className="error">
                  <img src={error} />
                  <div className="error--text">This field is required</div>
                </div>
              )}
            </div>
          </div>
          <div className="container__btndiv">
            <button className="container__btndiv--cancel">Cancel</button>
            <button className="container__btndiv--add">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
