import "./Header.scss";
import Logo from "../../assets/logo/InStock-Logo.svg";


function Header(){
    return (
        <header className="header">
            <div className="header__logo">
                <img src={Logo} alt="Instock Logo" className="header__logo-content" />
            </div>
            <div className="header__actions">
                <button className= "header__actions-button button-text" >Warehouses</button>
                <button  className="header__actions-button button-text">Inventory</button>
            </div>
        </header>
        
    )
}

export default Header;
