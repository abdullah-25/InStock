import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import error from "../../assets/icons/error-24px.svg";
import { useState } from "react";
import "../../components/NewWarehouse/NewWarehouse.scss";
import "../EditInventory/EditInventory.scss";

export default function AddInventory() {
  const [itemName, setitemName] = useState("");
  const [Category, setCategory] = useState("");
  const [Status, setStatus] = useState("");
  const [Description, setDescription] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [Warehouse, setWarehouse] = useState("");
  const [QuantityShown, setQuantityShown] = useState("");

  const [errors, setErrors] = useState("");

  function handleChangeitemName(e) {
    setitemName(e.target.value);
  }
  function handleChangeCategory(e) {
    setCategory(e.target.value);
  }
  function handleChangeStatus(e) {
    setStatus(e.target.value);
    setQuantityShown(e.target.value);
    showQuantity(QuantityShown);
  }
  function handleChangeQuantity(e) {
    setQuantity(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }
  function handleChangeWarehouse(e) {
    setWarehouse(e.target.value);
  }

  function showQuantity(QuantityShown) {
    if (QuantityShown === "Instock") {
      return false;
    } else {
      return true;
    }
  }

  function SubmitDetails(e) {
    e.preventDefault();

    const errors = {};

    if (!itemName) {
      errors.itemName = true;
    }

    if (!Category) {
      errors.category = true;
    }

    if (!Status) {
      errors.status = true;
    }
    if (!Quantity) {
      errors.quantity = true;
    }
    if (!Description) {
      errors.description = true;
    }
    if (!Warehouse) {
      errors.warehouse = true;
    }

    setErrors(errors);

    //make axios post request with these values
  }

  return (
    <div className="outerdiv">
      <div className="container">
        <div className="container__heading">
          <img src={arrowBack} className="container__heading--arrow" />
          <h1>Add New Inventory Item</h1>
        </div>
        <div className="container__hr"></div>
        <form onSubmit={SubmitDetails}>
          <div className="container__form">
            <div className="container__container__form__warehouse">
              <h2 className="container__form__warehouse--title">
                Item Details
              </h2>
              <div className="label-text">Item Name</div>
              <input
                type="text"
                className={`container__form__warehouse--input ${
                  errors.warehouseName
                    ? "container__form__warehouse--input--invalid"
                    : ""
                }`}
                placeholder="Item Name"
                name="itemName"
                onChange={handleChangeitemName}
              ></input>
              {errors.itemName && (
                <div className="error">
                  <img src={error} />
                  <div className="error--text">This field is required</div>
                </div>
              )}
              <div className="label-text">Description</div>
              <textarea
                type="text"
                className={`description ${
                  errors.description ? "description--invalid" : ""
                }`}
                placeholder="Please enter a brief item description..."
                name="description"
                onChange={handleChangeDescription}
              ></textarea>
              {errors.description && (
                <div className="error">
                  <img src={error} />
                  <div className="error--text">This field is required</div>
                </div>
              )}
              <div className="label-text">Category</div>{" "}
              <select
                type="text"
                className={`container__form__warehouse--input dropdown ${
                  errors.category
                    ? "container__form__warehouse--input--invalid"
                    : ""
                }`}
                name="category"
                onChange={handleChangeCategory}
              >
                <option value="" disabled selected hidden>
                  Please Select
                </option>
                <option value="Electronics">Electronics </option>
                <option value="Gear">Gear</option>
                <option value="Health">Health</option>
                <option value="Accessories">Accessories</option>
                <option value="Apparel">Apparel</option>
              </select>
              {errors.category && (
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
                Item Availability
              </h2>

              <div className="label-text">Status</div>
              <div className="radiobtns-outer">
                <div className="radiobtns-outer--radio">
                  <input
                    type="radio"
                    className={`description__status .body-medium ${
                      errors.status ? "description__status--invalid" : ""
                    }`}
                    name="Instock"
                    value="Instock"
                    onChange={handleChangeStatus}
                  ></input>
                  <label for="Instock">In Stock</label>
                </div>
                <div>
                  <input
                    type="radio"
                    className={`description__status .body-medium ${
                      errors.status ? "description__status--invalid" : ""
                    }`}
                    name="OutofStock"
                    value="Outofstock"
                    onChange={handleChangeStatus}
                  ></input>
                  <label for="Out of stock">Out of Stock</label>
                </div>
              </div>
              {showQuantity(QuantityShown) ? (
                ""
              ) : (
                <div className="quantity">
                  <div className="label-text">quantity</div>
                  <input
                    type="number"
                    className={`container__form__warehouse--input ${
                      errors.quantity
                        ? "container__form__warehouse--input--invalid"
                        : ""
                    }`}
                    //placeholder="name"
                    name="quantity"
                    placeholder="0"
                    onChange={handleChangeQuantity}
                  ></input>
                  {errors.status && (
                    <div className="error">
                      <img src={error} />
                      <div className="error--text">This field is required</div>
                    </div>
                  )}
                </div>
              )}

              {errors.quantity && (
                <div className="error">
                  <img src={error} />
                  <div className="error--text">This field is required</div>
                </div>
              )}
              <div className="label-text">Warehouse</div>
              <select
                type="text"
                className={`container__form__warehouse--input dropdown ${
                  errors.warehouse
                    ? "container__form__warehouse--input--invalid"
                    : ""
                }`}
                name="warehouseName"
                placeholder="Please Select"
                onChange={handleChangeWarehouse}
              >
                {" "}
                <option value="" disabled selected hidden>
                  Please Select
                </option>
                <option value="Manhattan">Manhattan</option>
                <option value="Washington">Washington</option>
                <option value="Jersey">Jersey</option>
                <option value="San Fran">San Fran</option>
                <option value="Santa Monica">Santa Monica</option>
                <option value="Seattle">Seattle</option>
                <option value="Miami">Miami</option>
              </select>

              {errors.warehouse && (
                <div className="error">
                  <img src={error} />
                  <div className="error--text">This field is required</div>
                </div>
              )}
            </div>
          </div>
          <div className="container__btndiv">
            <button className="container__btndiv--cancel">Cancel</button>
            <button className="container__btndiv--add">+ Add Item</button>
          </div>
        </form>
      </div>
    </div>
  );
}
