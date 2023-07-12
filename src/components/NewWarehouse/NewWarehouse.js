import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import "./NewWarehouse.scss";

export default function NewWarehouse() {
  function SubmitDetails(e) {
    e.preventDefault();
    const warehouseName = e.target.warehouseName.value;
    const warehouseAddress = e.target.warehouseAddress.value;
    const warehouseCountry = e.target.warehouseCountry.value;
    const warehouseCity = e.target.warehouseCity.value;
    const ContactName = e.target.contactName.value;
    const ContactPosition = e.target.contactPosition.value;
    const ContactPhone = e.target.contactPhone.value;
    const ContactEmail = e.target.contactEmail.value;

    //make axios post request with these values
  }
  function checkPhoneNumber(e) {
    let phoneno = /^\d{10}$/;
    if (e.target.value.match(phoneno)) {
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
    <div className="container">
      <div className="container__heading">
        <img src={arrowBack} className="container__heading--arrow" />
        <h1>Add a New Warehouse</h1>
      </div>
      <hr className="container__hr" />
      <form onSubmit={SubmitDetails}>
        <div className="container__form">
          <div className="container__form__warehouse">
            <h2 className="container__form__warehouse--title">
              Warehouse Details
            </h2>

            <div className="label-text">Warehouse Name</div>
            <input
              type="text"
              className="container__form__warehouse--input"
              placeholder="Warehouse Name"
              name="warehouseName"
              autocomplete="name"
              enterkeyhint="next"
              required
            ></input>
            <div className="label-text">Street Address</div>
            <input
              type="text"
              className="container__form__warehouse--input"
              placeholder="Address"
              name="warehouseAddress"
              autocomplete="warehouse-address"
              required
              enterkeyhint="next"
            ></input>
            <div className="label-text">City</div>
            <input
              type="text"
              className="container__form__warehouse--input"
              name="warehouseCity"
              placeholder="City"
              autocomplete="warehouse-city"
              required
              enterkeyhint="next"
            ></input>
            <div className="label-text">Country</div>
            <input
              type="text"
              className="container__form__warehouse--input"
              name="warehouseCountry"
              placeholder="Country"
              autocomplete="warehouse-country"
              required
              enterkeyhint="next"
            ></input>

            <hr className="container__form__warehouse--hr" />
          </div>
          <div className="container__form__contact"></div>
          <h2 className="container__form__contact--title">Contact Details</h2>

          <div className="label-text">Contact Name</div>
          <input
            type="text"
            className="container__form__warehouse--input"
            name="contactName"
            autocomplete="name"
            placeholder="Contact Name"
            enterkeyhint="next"
            required
          ></input>
          <div className="label-text">Position</div>
          <input
            type="text"
            className="container__form__warehouse--input"
            name="contactPosition"
            autocomplete="contact-position"
            required
            enterkeyhint="next"
            placeholder="Position"
          ></input>
          <div className="label-text">Phone Number</div>
          <input
            type="text"
            className="container__form__warehouse--input"
            name="contactPhone"
            autocomplete="contact-phone"
            required
            enterkeyhint="next"
            placeholder="Phone Number"
            onClick={checkPhoneNumber}
          ></input>
          <div className="label-text">Email</div>
          <input
            type="text"
            className="container__form__warehouse--input"
            name="contactEmail"
            autocomplete="contact-email"
            required
            enterkeyhint="next"
            placeholder="Email"
            onClick={checkEmail}
          ></input>
        </div>
        <div className="container__btndiv">
          <button className="container__btndiv--cancel">Cancel</button>
          <button className="container__btndiv--add">+ Add Warehouse</button>
        </div>
      </form>
    </div>
  );
}
