import "../PagePositioning.scss";
import EditWarehouse from "../../components/EditWarehouse/EditWarehouse";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function EditWarehouses() {
  const { id } = useParams();
  const [warehouseName, setwarehouseName] = useState("");
  const [warehouseAddress, setwarehouseAddress] = useState("");
  const [warehouseCountry, setwarehouseCountry] = useState("");
  const [warehouseCity, setwarehouseCity] = useState("");
  const [ContactName, setContactName] = useState("");
  const [ContactPosition, setContactPosition] = useState("");
  const [ContactPhone, setContactPhone] = useState("");
  const [ContactEmail, setContactEmail] = useState("");

  function updateFormValues(res) {
    setwarehouseName(res.data.warehouse_name);
    setwarehouseAddress(res.data.address);
    setwarehouseCountry(res.data.country);
    setwarehouseCity(res.data.city);
    setContactName(res.data.contact_name);
    setContactPosition(res.data.contact_position);
    setContactEmail(res.data.contact_email);
    setContactPhone(res.data.contact_phone);
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/warehouses/${id}`)
      .then((res) => {
        updateFormValues(res);
      })
      .catch((response) => {
        console.log(response);
      });
  }, [id]);

  return (
    <div>
      <EditWarehouse
        name={warehouseName}
        address={warehouseAddress}
        city={warehouseCity}
        country={warehouseCountry}
        contactName={ContactName}
        contactPhone={ContactPhone}
        contactEmail={ContactEmail}
        contactPosition={ContactPosition}
      />
    </div>
  );
}

export default EditWarehouses;
