
import "./WarehouseDetailsDisplay.scss";
import edit from "../../assets/icons/edit-button-24px.svg"; 
import {Link} from "react-router-dom"
function WarehouseDetailsDisplay({ id,warehouse_name, address,city, contact_name, contact_email,contact_phone, contact_position}){
    return (
        <>
        <header className="detailheader">
            <Link to = {`/warehouse/`}>
            <button className="detailheader__back" ></button>
            </Link>
            <h1 className="detailheader__title">{warehouse_name}</h1>
            <Link to = {`/warehouse/edit/${id}`} >
            <button className="detailheader__edit--mobile"></button>
            <button className="detailheader__edit--tablet">
                <img class="edit-icon" src = {edit} alt = "" />
               Edit
                </button>
            </Link>
        </header>
        <article className="details">
            <div className="details__title">
                <p className="label-text">WAREHOUSE ADDRESS</p>
                <p className="body-medium">{address}</p>
                <p className="body-medium">{city}</p>
            </div>
            <div className="details__section">
            <p className="label-text">CONTACT NAME</p>
                <p className="body-medium">{contact_name}</p>
                <p className="body-medium">{contact_position}</p>
            </div>
            <div className="details__section">
            <p className="label-text">WAREHOUSE ADDRESS</p>
            <p className="body-medium">{contact_email}</p>
            <p className="body-medium">{contact_phone}</p>
            </div>
        </article>
        </>
    )
}

export default WarehouseDetailsDisplay;