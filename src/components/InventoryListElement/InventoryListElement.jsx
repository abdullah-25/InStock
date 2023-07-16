import "../InventoryListElement/InventoryListElement.scss";

import { useState } from "react";
import { Modal } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function InventoryListElement({ id, item_name,category,status,quantity,warehouse_name,description, displayWarehouseName ,...rest}) {
    const navigate = useNavigate();
    function handleDelete(){
        axios.delete(`http://localhost:8080/api/inventories/${id}`).then(response => {
            navigate(0)
        }).catch(error => {
            console.log(error);
        })
        handleClose()

import chevron from "../../assets/icons/chevron_right-24px.svg"


    }
       const [open, setOpen] = useState(false);
       const handleOpen = () => setOpen(true);
       const handleClose = () => setOpen(false);
    return (
        <li className="inventorylist__element">
                <div className="table-cell table-cell--first">
                    <p className="label-text inventorylist__title">INVENTORY ITEM</p>

                    <Link to = {`/inventory/${id}`} >
                    <p className="body-medium inventorylist__link">{item_name}
                     <img src={chevron} alt="" className="inventorylist__chevron"/>
                     </p>
                    </Link>

                </div>
                <div className="table-cell table-cell--category">
                    <p className="label-text inventorylist__title">CATEGORY</p>
                    <p className="body-medium inventorylist__content">{category}</p>
                </div>
                <div className="table-cell table-cell--status">
                    <p className="label-text inventorylist__title">STATUS</p>
                    <p className={`body-medium inventorylist__content--${status==="In Stock"?"instock":"outofstock"} inventorylist__content`}>{status}</p>
                </div>
                <div className="table-cell">
                    <p className="label-text inventorylist__title">QTY</p>
                    <p className="body-medium inventorylist__content">{quantity}</p>
                </div>  
                <div className="table-cell table-cell--empty">
                    {/* This cell left intentionally blank */}
                </div>

                <div className={`table-cell ${!displayWarehouseName && "table-cell--empty"}`}>
                    <p className="label-text inventorylist__title">{!displayWarehouseName && "WAREHOUSE"}</p>
                    <Link to={`/${rest.warehouse_id}`}>
                    <p className="body-medium warehouselist__content">{warehouse_name}</p>
                    </Link>
                </div>
                <div className="icon-container">
                <div className="table-cell">
                <button className="icon-delete" onClick={handleOpen}></button>
          <Modal open={open} onClose={handleClose} className="modal">
            <div className="modal-div">
              <h1 className="modal__title">Delete {item_name}?</h1>
              <p className="modal__text">
                Please confirm 
                that you’d like to delete the {item_name} from the
                inventory. You won’t be able to undo this action.
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
                    <Link to ={`/inventory/edit/${id}`}>
                    <button className="icon-edit" ></button>
                    </Link>
                </div>
                </div>
            
        </li>
    )
}
export default InventoryListElement;
