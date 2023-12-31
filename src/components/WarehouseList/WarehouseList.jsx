
import "../WarehouseList/WarehouseList.scss";
import WarehouseListElement from "../WarehouseListElement/WarehouseListElement.jsx";
import search_icon from "../../assets/icons/search-24px.svg";
import { Link } from "react-router-dom";
function WarehouseList({ warehousearray }) {
  return (
    <div className="component-container">
      <form className="warehouseform">
        <h1 className="title">Warehouses</h1>
        <div className="warehouseform__search">
          <input
            className="warehouseform__input"
            type="text"
            placeholder="Search.."
          />
          <img className="icon warehouseform__icon" src={search_icon} alt="" />
        </div>
        <Link to="/warehouse/new">
          <button className="warehouseform__addnew" type="button">
            <p className="button-text">+ Add New Warehouse</p>
          </button>
        </Link>
      </form>
      <ul className="warehouselist">
        <ul className="warehouselist__labels">
          <li className="list-label label-text">
            Warehouse
            <button className="sort-up"></button>
          </li>
          <li className="list-label label-text">
            Address
            <button className="sort-up"></button>
          </li>
          <li className="list-label label-text">
            Contact Name
            <button className="sort-up"></button>
          </li>
          <li className="list-label label-text">
            Contact Information
            <button className="sort-up"></button>
          </li>
          <li className="list-label--end label-text">Actions</li>
        </ul>
        {warehousearray.map((warehouse) => (
          <WarehouseListElement
            key={warehouse.id}
            id={warehouse.id}
            name={warehouse.warehouse_name}
            address={warehouse.address}
            city={warehouse.city}
            country={warehouse.country}
            contactName={warehouse.contact_name}
            contactPhone={warehouse.contact_phone}
            contactEmail={warehouse.contact_email}
            contactPosition={warehouse.contact_position}
            warehousearray={warehousearray}
          />
        ))}
      </ul>
    </div>
  );
=======
import "../WarehouseList/WarehouseList.scss"
import WarehouseListElement from "../WarehouseListElement/WarehouseListElement.jsx"
import search_icon from "../../assets/icons/search-24px.svg"
import {Link} from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
function WarehouseList({warehousearray, setWarehouseArray}) {

    // whORD = warehouse order :)
  const [whOrd, setwhOrd] = useState(true);
  const [addressOrd, setAddressOrd] = useState(true)
  const [cName, setcName] = useState(true)
  const [cInfo, setCInfo] = useState(true)


useEffect(() => {
    const fetchWHData = async () => {
        try {
            console.log('running')
          const response = await axios.get('http://localhost:8080/api/warehouses', {
            params: { sort_by: whOrd ? 'warehouse_name ACS' : 'warehouse_name DESC' },
          });
          setWarehouseArray(response.data);
          console.log(response.data)
        } catch (error) {
          console.log(error);
        }
      };
    fetchWHData();
}, [whOrd]);

useEffect(() => {
    const fetchAddrData = async () => {
        try {
            console.log('running2')
            console.log(addressOrd)
          const response = await axios.get('http://localhost:8080/api/warehouses', {
            params: { sort_by: addressOrd ? 'address ACS' : 'address DESC' },
          });
          setWarehouseArray(response.data);
          console.log(response.data)
        } catch (error) {
          console.log(error);
        }
      };
    fetchAddrData();
}, [addressOrd]);

useEffect(() => {
    const fetchCNameData = async () => {
        try {
            console.log('running3')
            console.log(cName)
          const response = await axios.get('http://localhost:8080/api/warehouses', {
            params: { sort_by: cName ? 'contact_name ACS' : 'contact_name DESC' },
          });
          setWarehouseArray(response.data);
          console.log(response.data)
        } catch (error) {
          console.log(error);
        }
      };
    fetchCNameData();
}, [cName]);

useEffect(() => {
    const fetchCInfoData = async () => {
        try {
            console.log('running4')
          const response = await axios.get('http://localhost:8080/api/warehouses', {
            params: { sort_by: cInfo ? 'contact_email ACS' : 'contact_email DESC' },
          });
          setWarehouseArray(response.data);
          console.log(response.data)
        } catch (error) {
          console.log(error);
        }
      };
    fetchCInfoData();
}, [cInfo]);


  const toggleWH = () => {
      setwhOrd((prevwhOrd) => !prevwhOrd);
  };
  const toggleAddr = () => {
    setAddressOrd((prevAddressOrd) => !prevAddressOrd);
};

  const toggleCName = () => {
    setcName((prevcName) => !prevcName)
  }

  const toggleCInfo = () => {
    setCInfo((prevcInfo) => !prevcInfo)
  }

    return (
        <>
            <form className="warehouseform">
                <h1 className="title">Warehouses</h1>
                <div className="warehouseform__search">
                <input className="warehouseform__input" type="text" placeholder="Search.." />
                <img className="icon warehouseform__icon" src={search_icon} alt=""/>
                </div>
                <Link to="/warehouse/new">
                <button className="warehouseform__addnew" type="button">+ Add New Warehouse</button>
                </Link>
            </form>
            <ul className="warehouselist">
                <ul className="warehouselist__labels">
                   <li className="list-label label-text">
                    Warehouse
                    <button onClick={toggleWH} className="sort-up"></button>
                    
                    </li>
                   <li className="list-label label-text">
                    Address
                    <button onClick={toggleAddr} className="sort-up"></button>
                   
                    </li>
                   <li className="list-label label-text">
                    Contact Name
                    <button onClick={toggleCName} className="sort-up"></button>
                  
                    </li>
                   <li className="list-label label-text">
                    Contact Information
                    <button onClick={toggleCInfo} className="sort-up"></button>
                    </li>
                    <li className="list-label--end label-text">
                    Actions
                    </li>
                </ul>
               { warehousearray.map((warehouse) => <WarehouseListElement key={warehouse.id} id={warehouse.id} name={warehouse.warehouse_name} address={warehouse.address} city={warehouse.city}contactName={warehouse.contact_name} contactPhone={warehouse.contact_phone} contactEmail={warehouse.contact_email} warehousearray={warehousearray}  />)}
            </ul>
        </>
    );

}
export default WarehouseList;
