import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import "./NewWarehouse.scss";

export default function NewWarehouse() {
  return (
    <div className="container">
      <div className="container__heading">
        <img src={arrowBack} className="container__heading--arrow" />
        <h1>Add a New Warehouse</h1>
      </div>
      <hr className="container__hr" />
      <div className="container__form">
        <div className="container__form__warehouse">
          <h2>Warehouse Details</h2>
          <form>
            <div>Warehouse Name</div>
            <input
              type="text"
              className="container__form__warehouse--input"
              name="warehouse-name"
              autocomplete="name"
              enterkeyhint="next"
              required
            ></input>
            <div>Street Address</div>
            <input
              type="text"
              className="container__form__warehouse--input"
              name="warehouse-address"
              autocomplete="warehouse-address"
              required
              enterkeyhint="next"
            ></input>
            <div>City</div>
            <input
              type="text"
              className="container__form__warehouse--input"
              name="warehouse-city"
              autocomplete="warehouse-city"
              required
              enterkeyhint="next"
            ></input>
            <div>Country</div>
            <input
              type="text"
              className="container__form__warehouse--input"
              name="warehouse-country"
              autocomplete="warehouse-country"
              required
              enterkeyhint="next"
            ></input>
          </form>
          <hr />
        </div>
        <div className="container__form__contact"></div>
        <h2>Contact Details</h2>
        <form>
          <div>Contact Name</div>
          <input
            type="text"
            className="container__form__warehouse--input"
            name="contact-name"
            autocomplete="name"
            enterkeyhint="next"
            required
          ></input>
          <div>Street Address</div>
          <input
            type="text"
            className="container__form__warehouse--input"
            name="street-address"
            autocomplete="street-country"
            required
            enterkeyhint="next"
          ></input>
          <div>City</div>
          <input
            type="text"
            className="container__form__warehouse--input"
            name="contact-city"
            autocomplete="contact-country"
            required
            enterkeyhint="next"
          ></input>
          <div>Country</div>
          <input
            type="text"
            className="container__form__warehouse--input"
            name="contact-country"
            autocomplete="contact-country"
            required
            enterkeyhint="next"
          ></input>
        </form>
      </div>
      <div className="container__btndiv">
        <button className="container__btndiv--cancel">Cancel</button>
        <button className="container__btndiv--add">+ Add Warehouse</button>
      </div>
    </div>
  );
}
