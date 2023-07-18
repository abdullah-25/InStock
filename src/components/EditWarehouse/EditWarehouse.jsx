import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import error from "../../assets/icons/error-24px.svg";
import { useState, useEffect } from "react";
import "../../components/NewWarehouse/NewWarehouse.scss";
import "./EditWarehouse.scss";
import axios from "axios";

import { useParams, Link, useNavigate } from "react-router-dom";

export default function EditWarehouse({
  name,
  address,
  city,
  country,
  contactName,
  contactPhone,
  contactEmail,
  contactPosition,
}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [warehouseName, setwarehouseName] = useState(name ?? " ");
  const [warehouseAddress, setwarehouseAddress] = useState(address ?? " ");
  const [warehouseCountry, setwarehouseCountry] = useState(country ?? " ");
  const [warehouseCity, setwarehouseCity] = useState(city ?? " ");
  const [ContactName, setContactName] = useState(contactName ?? " ");
  const [ContactPosition, setContactPosition] = useState(
    contactPosition ?? " "
  );
  const [ContactPhone, setContactPhone] = useState(contactPhone ?? " ");
  const [ContactEmail, setContactEmail] = useState(contactPosition ?? " ");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setwarehouseName(name ?? "");
    setwarehouseAddress(address ?? "");
    setwarehouseCountry(country ?? "");
    setwarehouseCity(city ?? "");
    setContactName(contactName ?? "");
    setContactPosition(contactPosition ?? "");
    setContactPhone(contactPhone ?? "");
    setContactEmail(contactEmail ?? "");
  }, [
    name,
    address,
    city,
    country,
    contactName,
    contactPosition,
    contactPhone,
    contactEmail,
  ]);

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
  function handleChangeContactPhone(e) {
    setContactPhone(e.target.value);
    checkPhoneNumber(e.target.value);
  }
  function handleChangeContactEmail(e) {
    setContactEmail(e.target.value);
    checkEmail(e.target.value);
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
    if (!ContactPhone || !checkPhoneNumber(ContactPhone)) {
      errors.ContactPhone = true;
    }
    if (!ContactEmail || !checkEmail(ContactEmail)) {
      errors.ContactEmail = true;
    }
    setErrors(errors);

    if (Object.keys(errors).length > 0) {
      return; // Return early if there are errors
    }

    axios
      .patch(`http://localhost:8080/api/warehouses/${id}`, {
        warehouseName,
        warehouseAddress,
        warehouseCountry,
        warehouseCity,
        ContactName,
        ContactPosition,
        ContactPhone,
        ContactEmail,
      })
      //validate from backend and if we get response back we can use navigate to warehouse page
      .then((response) => {
        navigate("/warehouse");
      })
      .catch(({ response }) => {
        console.log(`Error! ${response.data}`);
      });
  }
  function checkPhoneNumber(phoneNumber) {
    let phoneno = /^\d{10}$/;
    if (phoneNumber.match(phoneno)) {
      return true;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        ContactPhone: true,
      }));
      return false;
    }
  }
  function checkEmail(email) {
    let regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(regex)) {
      return true;
    } else return false;
  }

  return (
    <div className="outerdiv">
      <div className="container">
        <div className="container__heading">
          <button
            className="detailheader__back"
            onClick={() => {
              window.history.back();
            }}
          ></button>

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
                onChange={handleChangeWareHouseName}
                defaultValue={warehouseName}
                name="warehouseName"
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
                defaultValue={warehouseAddress}
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
                defaultValue={city}
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
                defaultValue={country}
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
                defaultValue={contactName}
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
                defaultValue={contactPosition}
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
                value={ContactPhone}
                onChange={handleChangeContactPhone}
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
                defaultValue={contactEmail}
                onChange={handleChangeContactEmail}
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
            <Link to={`/`} style={{ textDecoration: "none" }}>
              <button className="container__btndiv--cancel">Cancel</button>
            </Link>
            <button className="container__btndiv--add">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
