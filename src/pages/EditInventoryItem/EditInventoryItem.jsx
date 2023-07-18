import "../PagePositioning.scss";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import EditInventory from "../../components/EditInventory/EditInventory";

function EditInventoryItem() {
  const { id } = useParams();
  const [inventoryData, setInventoryData] = useState({
    warehouse_id: null,
    item_name: "",
    category: "",
    description: "",
    status: "",
    quantity: "",
    warehouseName: "",
  });

  function updateFormValues(res) {
    setInventoryData({
      warehouse_id: id,
      item_name: res.item_name,
      category: res.category,
      description: res.description,
      status: res.status,
      quantity: res.quantity,
      warehouseName: res.warehouseName,
    });
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/inventories/${id}`)
      .then((res) => {
        updateFormValues(res.data[0]);
      })
      .catch((response) => {
        console.log(response);
      });
  }, [id]);

  return (
    <div>
      <EditInventory {...inventoryData} />
    </div>
  );
}

export default EditInventoryItem;
