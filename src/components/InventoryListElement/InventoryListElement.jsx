import "../InventoryListElement/InventoryListElement.scss";

function InventoryListElement({
  item_name,
  category,
  status,
  quantity,
  warehouseName,
  description,
}) {
  return (
    <li className="inventorylist__element">
      <div className="table-cell table-cell--first">
        <p className="label-text inventorylist__title">INVENTORY ITEM</p>
        <p className="body-medium inventorylist__link">{item_name}</p>
      </div>
      <div className="table-cell table-cell--category">
        <p className="label-text inventorylist__title">CATEGORY</p>
        <p className="body-medium inventorylist__content">{category}</p>
      </div>
      <div className="table-cell table-cell--status">
        <p className="label-text inventorylist__title">STATUS</p>
        <p
          className={`body-medium inventorylist__content--${
            status === "In Stock" ? "instock" : "outofstock"
          } inventorylist__content`}
        >
          {status}
        </p>
      </div>
      <div className="table-cell">
        <p className="label-text inventorylist__title">QTY</p>
        <p className="body-medium inventorylist__content">{quantity}</p>
      </div>
      <div className="table-cell table-cell--empty">
        {/* This cell left intentionally blank */}
      </div>
      <div className={`table-cell ${!warehouseName && "table-cell--empty"}`}>
        <p className="label-text inventorylist__title">
          {warehouseName && "WAREHOUSE"}
        </p>
        <p className="body-medium warehouselist__content">{warehouseName}</p>
      </div>
      <div className="icon-container">
        <div className="table-cell">
          <button className="icon-delete"></button>
        </div>
        <div className="table-cell table-cell--right">
          <button className="icon-edit"></button>
        </div>
      </div>
    </li>
  );
}
export default InventoryListElement;
