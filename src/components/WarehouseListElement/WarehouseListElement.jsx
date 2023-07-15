import "../WarehouseListElement/WarehouseListElement.scss";
import { useState } from "react";
import { Modal } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
function WarehouseListElement({
  id,
  name,
  address,
  city,
  country,
  contactName,
  contactPosition,
  contactPhone,
  contactEmail,
  warehouseArray,
  setWarehouseArray,
}) {
  function handleDelete() {
    axios.delete(`http://localhost:8080/api/warehouses/${id}`).then(() => {
      axios.get(`http://localhost:8080/api/warehouses`).then((response) => {
        setWarehouseArray(response.data);
        handleClose();
      });
    });
  }
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Link to={`/${id}`} style={{ textDecoration: "none" }}>
      <li className="warehouselist__element">
        <div className="table-cell">
          <p className="body-small warehouselist__title">Warehouse</p>
          <p className="body-small warehouselist__link">{name}</p>
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
                  Please confirm that you’d like to delete the {city} from the
                  list of warehouses. You won’t be able to undo this action.
                </p>
                <div className="button-style">
                  <div className="modal-button__div">
                    <button className="modal-cancel" onClick={handleClose}>
                      Cancel
                    </button>
                    <button className="modal-delete" onClick={handleDelete}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
          <div className="table-cell table-cell--right">
            <Link to={`/edit/${id}`} style={{ textDecoration: "none" }}>
              <button className="icon-edit"></button>
            </Link>
          </div>
        </div>
      </li>
    </Link>
  );
}
export default WarehouseListElement;
