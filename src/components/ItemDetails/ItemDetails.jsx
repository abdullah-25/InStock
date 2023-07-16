import "../ItemDetails/ItemDetails.scss"
import edit from "../../assets/icons/edit-24px.svg"
import { Link } from "react-router-dom"
function ItemDetails({ item }) {
    let {id, warehouse_id, warehouse_name, item_name, description, category, status, quantity } = { ...item }
    return (
        <>
            <header className="detailheader">
                <Link to = {`/${warehouse_id}`}>
            <button className="detailheader__back" ></button>
            </Link>
                <h1 className="detailheader__title">{item_name}</h1>
                <Link to={`/inventory/edit/${id}`} >
                    <button className="detailheader__edit--mobile"></button>
                    <button className="detailheader__edit--tablet">
                        <img src={edit} alt="" />
                        Edit
                    </button>
                </Link>
            </header>
            <article className="details">
                <div className="section-tablet section-tablet--left">
                    <div className="details__section details__section--stretch">
                        <p className="label-text">ITEM DESCRIPTION:</p>
                        <p className="body-medium details__description">{description}</p>
                    </div>
                    <div className="details__section details__section--stretch">
                        <p className="label-text">CATEGORY:</p>
                        <p className="body-medium details__content">{category}</p>
                    </div>
                </div>
                <div className="section-tablet">
                    <div className="details__section">
                        <p className="label-text">STATUS:</p>
                        <p className={`body-medium details__content${status === "In Stock" ? "--instock" : "--outofstock"}`}>{status.toUpperCase()}</p>
                    </div>
                    <div className="details__section">
                        <p className="label-text">QUANTITY:</p>
                        <p className="body-medium details__content">{quantity}</p>
                    </div>
                    <div className="details__section  details__section--stretch">
                        <p className="label-text">WAREHOUSE:</p>
                        <p className="body-medium details__content">{warehouse_name}</p>
                    </div>
                </div>

            </article>
        </>
    )
}

export default ItemDetails