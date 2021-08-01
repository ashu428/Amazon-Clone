import React from "react";
import logo from "./images/amazon-logo.png";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const SignOutHandler = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img src={logo} className="header-logo" alt="Unable to load" />
      </Link>

      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <SearchIcon className="header-searchicon" />
      </div>

      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div className="header-option">
            <span className="header-optionLine1">Hello Guest</span>

            <span className="header-optionLine2" onClick={SignOutHandler}>
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-optionLine1">Return</span>
          <span className="header-optionLine2">Order</span>
        </div>
        <div className="header-option">
          <span className="header-optionLine1">Your</span>
          <span className="header-optionLine2">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header-optionBasket">
            <ShoppingBasketIcon />
            <span className="header-optionLine2 header-basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
