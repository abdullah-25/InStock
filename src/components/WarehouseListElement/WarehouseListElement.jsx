import "../WarehouseListElement/WarehouseListElement.scss";
import ReactModal from "react-modal";
import { useState } from "react";
import { Modal } from "@mui/material";
function WarehouseListElement({
  name,
  address,
  city,
  contactName,
  contactPhone,
  contactEmail,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
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
          <Modal open={open} onClose={handleClose}>
            <div >
              <h1>Delete Washington warehouse?</h1>
              <p>
                Please confirm 
                that you’d like to delete the Washington from the
                list of warehouses. You won’t be able to undo this action.
              </p>
            </div>
          </Modal>
        </div>
        <div className="table-cell table-cell--right">
          <button className="icon-edit"></button>
        </div>
      </div>
    </li>
  );
}
export default WarehouseListElement;
