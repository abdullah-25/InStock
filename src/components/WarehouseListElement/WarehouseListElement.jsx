import "../WarehouseListElement/WarehouseListElement.scss";
import { useState } from "react";
import { Modal } from "@mui/material";
import axios from "axios";

import { Link,useNavigate } from "react-router-dom";


import chevron from "../../assets/icons/chevron_right-24px.svg"

function WarehouseListElement({
  id,
  name,
  address,
  city,
  contactName,
  contactPhone,
  contactEmail,
}) {
  const navigate = useNavigate();
  function handleDelete(){
   axios.delete(`http://localhost:8080/api/warehouses/${id}`).then(() => {
    setOpen(false)
    //Refresh the page. This allows us to see the new data. 
    navigate(0);
   }).catch(response => {
    console.log(response);
   })
  
    }
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <li className="warehouselist__element">
      <div className="table-cell">
        <p className="body-small warehouselist__title">Warehouse</p>

        <Link to ={`/${id}`}>
        <p className="body-small warehouselist__link">{name}
        <img src={chevron} alt="" className="warehouselist__chevron"/></p>
        </Link>

      </div>
      <div className="table-cell">
        <p className="body-small warehouselist__title">Address</p>
        <p className="body-small warehouselist__content">{address}</p>
        <p className="body-small warehouselist__content">{city}</p>
      </div>

      <div className="table-cell">
        <p className="body-small warehouselist__title">Contact Name</p>
        <p className="body-small warehouselist__content">{contactName}</p>
      </div>
      <div className="table-cell">
        <p className="body-small warehouselist__title">Contact Information</p>
        <p className="body-small warehouselist__content">{contactEmail}</p>
        <p className="body-small warehouselist__content">{contactPhone}</p>
      </div>

      <div className="icon-container">
        <div className="table-cell">
          <button className="icon-delete" onClick={handleOpen}></button>
          <Modal open={open} onClose={handleClose} className="modal">
            <div className="modal-div">
              <h1 className="modal__title">Delete {city} warehouse?</h1>
              <p className="modal__text">
                Please confirm 
                that you’d like to delete the {city} from the
                list of warehouses. You won’t be able to undo this action.
              </p>
              <div className="button-style">
              <div className="modal-button__div">
              <button className="modal-cancel" onClick={handleClose}>Cancel</button>
              <button className="modal-delete"onClick={handleDelete}>Delete</button>
              </div>
              </div>
            </div>
          </Modal>
        </div>
        <div className="table-cell table-cell--right">
          <Link to = {`edit/${id}`} >
          <button className="icon-edit"></button>
          </Link>
        </div>
      </div>
    </li>
  );
}
export default WarehouseListElement;
