import "../WarehouseList/WarehouseList.scss"
import WarehouseListElement from "../WarehouseListElement/WarehouseListElement.jsx"
import search_icon from "../../assets/icons/search-24px.svg"
import {Link} from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
function WarehouseList({warehousearray, setWarehouseArray}) {

     
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
        try {
            console.log('running')
            console.log(isAscending)
          const response = await axios.get('http://localhost:8080/api/warehouses', {
            params: { sort_by: isAscending ? 'warehouse_name ACS' : 'warehouse_name DESC' },
          });
          setWarehouseArray(response.data);
          console.log(response.data)
        } catch (error) {
          console.log(error);
        }
      };
    fetchData();
  }, [isAscending]);

  
  const toggleSorting = () => {
      setIsAscending((prevIsAscending) => !prevIsAscending);
  };

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/warehouses', {
//         params: { sort_by: isAscending ? 'warehouse_name ASC' : 'warehouse_name DESC' },
//       });
//       setWarehouseArray(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };


    
    return (
        <div className="component-container">
            <form className="warehouseform">
                <h1 className="title">Warehouses</h1>
                <div className="warehouseform__search">
                <input className="warehouseform__input" type="text" placeholder="Search.." />
                <img className="icon warehouseform__icon" src={search_icon} alt=""/>
                </div>
                <Link to="/warehouse/new">
                <button className="warehouseform__addnew" type="button"><p className="button-text">+ Add New Warehouse</p></button>
                </Link>
            </form>
            <ul className="warehouselist">
                <ul className="warehouselist__labels">
                   <li className="list-label label-text">
                    Warehouse
                    <button onClick={toggleSorting} className="sort-up"></button>
                    
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
                    <li className="list-label--end label-text">
                    Actions
                    </li>
                </ul>
               { warehousearray.map((warehouse) => <WarehouseListElement key={warehouse.id} id={warehouse.id} name={warehouse.warehouse_name} address={warehouse.address} city={warehouse.city}contactName={warehouse.contact_name} contactPhone={warehouse.contact_phone} contactEmail={warehouse.contact_email} warehousearray={warehousearray}  />)}
            </ul>
        </div>
    );
}
export default WarehouseList