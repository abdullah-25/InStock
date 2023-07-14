import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import error from "../../assets/icons/error-24px.svg";
import { useState } from "react";
import "../../components/NewWarehouse/NewWarehouse.scss";
import "./EditInventory.scss";

export default function EditInventory({
  item_name,
  category,
  description,
  status,
  quantity,
  warehouseName,
}) {
  const [itemName, setitemName] = useState(item_name);
  const [Category, setCategory] = useState(category);
  const [Status, setStatus] = useState(status);
  const [Description, setDescription] = useState(description);
  const [Quantity, setQuantity] = useState(quantity);
  const [Warehouse, setWarehouse] = useState(warehouseName);
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
    console.log(QuantityShown);
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

    useEffect(() => {
      axios
        .post("http://localhost:8080/api/inventories")
        .then(() => {})
        .catch((response) => {
          console.log(response);
        });
    }, []);
  }

  return (
    <div className="outerdiv">
      <div className="container">
        <div className="container__heading">
          <img src={arrowBack} className="container__heading--arrow" />
          <h1>Edit Inventory Item</h1>
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
                placeholder={"Item Name"}
                name="itemName"
                value={itemName}
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
                placeholder="Description"
                name="description"
                value={description}
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
                  {category}
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
                    placeholder="status"
                    value={status}
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
                    value={status}
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
                    value={quantity}
                    onChange={handleChangeQuantity}
                  ></input>
                </div>
              )}

              {errors.status && (
                <div className="error">
                  <img src={error} />
                  <div className="error--text">This field is required</div>
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
                placeholder="Warehouse Name"
                value={warehouseName}
                onChange={handleChangeWarehouse}
              >
                {" "}
                <option value="" disabled selected hidden>
                  {warehouseName}
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
            <button className="savebtn">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
