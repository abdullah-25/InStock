import React from "react";
import { useState } from "react";
import ReactModal from "react-modal";
<button onClick={handleClick}>delete</button>;
export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);   
  const handleClose = () => setOpen(false);
  
  return (
    <>
    <div>
      <button onClick={handleOpen}>Open modal</button>
      <Modal
        open={open}
        onClose={handleClose}
      
      >
        <div sx={style}>
          <h1>
          Delete Washington  warehouse?
          </h1>
          <p>
          Please confirm that you’d like to delete the Washington from the list of warehouses. You won’t be able to undo this action.
          </p>
        </div>
      </Modal>
    </div>
    </>
  );
}
