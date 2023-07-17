import "./Header.scss";
import Logo from "../../assets/logo/InStock-Logo.svg";
import { NavLink, Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="header__content">
            <div className="header__title">
                <Link to="/">
                    <img src={Logo} alt="Instock Logo" className="header__image" />
                </Link>
            </div>

            <NavLink to="/warehouse" className="header__button">
               <p className="body-large">Warehouses</p>
            </NavLink>
            <NavLink to="/inventory" className="header__button">
                <p className="body-large">Inventory</p>
            </NavLink>
            </div>
        </header>

    )
}

export default Header;
