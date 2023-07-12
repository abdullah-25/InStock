import "./Header.scss"
import Logo from "../../assets/logo/InStock-Logo.svg"


function Header(){

    function clickHandler(){

    }

    return (
        <header className="header">
            <article className="header__logo">
                <img src={Logo} alt="Instock Logo" className="header__logo-content" />
            </article>
            <article className="header__actions">
                <button onClick={clickHandler} className="header__actions-button warehouses-button">Warehouses</button>
                <button onClick={clickHandler} className="header__actions-button inventory-button">Inventory</button>
            </article>
        </header>
        
    )
}

export default Header;