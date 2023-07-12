import "./Header.scss";
import Logo from "../../assets/logo/InStock-Logo.svg";


function Header(){
    return (
        <header className="header">
            <article className="header__logo">
                <img src={Logo} alt="Instock Logo" className="header__logo-content" />
            </article>
            <article className="header__actions">
                <button className= "header__actions-button button-text" >Warehouses</button>
                <button  className="header__actions-button button-text">Inventory</button>
            </article>
        </header>
        
    )
}

export default Header;
