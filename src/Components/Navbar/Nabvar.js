import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import "./Navbar.css";
import { useCartContext } from "../../Context/CartContext";
import { useAuth0 } from "@auth0/auth0-react";

function Nabvar() {
  const [toggleMenu, setoggleMenu] = useState(false);
  const { cart } = useCartContext();
  const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();
  return (
    <>
      <div className="navbar-container">
        <div className="logo">LAXELANE</div>
        <div className="nav-links">
          <p>
            <NavLink to="/" className="links">
              Home
            </NavLink>
          </p>
          <p>
            <NavLink to="/about" className="links">
              About
            </NavLink>
          </p>
          <p>
            <NavLink to="/contact" className="links">
              Contact
            </NavLink>
          </p>
          <p>
            <NavLink to="/products" className="links">
              Products
            </NavLink>
          </p>
        </div>
        <div className="signin-btn">
          <div className="flex">
            <div>
              {isAuthenticated && (
                <h4 className="user-name">{user.name.slice(0, 1)}</h4>
              )}
            </div>
            <div>
              {isAuthenticated ? (
                <button
                  className="nav-btn"
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
                  Sign Out
                </button>
              ) : (
                <button onClick={() => loginWithRedirect()} className="nav-btn">
                  Sign In
                </button>
              )}
            </div>
          </div>

          <NavLink to="/cart" className="link">
            <BsCart2 className="cart-icon" />
          </NavLink>
          <p className="cart_count">{cart.length}</p>
        </div>
        <div className="menu">
          {toggleMenu ? (
            <MdClose
              className="menu-icon"
              onClick={() => setoggleMenu(false)}
            />
          ) : (
            <FiMenu className="menu-icon" onClick={() => setoggleMenu(true)} />
          )}
          {toggleMenu && (
            <div className="menu-list" onClick={() => setoggleMenu(false)}>
              <p>
                <NavLink to="/" className="links">
                  Home
                </NavLink>
              </p>
              <p>
                <NavLink to="/about" className="links">
                  About
                </NavLink>
              </p>
              <p>
                <NavLink to="/contact" className="links">
                  Contact
                </NavLink>
              </p>
              <p>
                <NavLink to="/products" className="links">
                  Products
                </NavLink>
              </p>
              {isAuthenticated && (
                <h4 className="user-name">{user.name.slice(0, 1)}</h4>
              )}

              {isAuthenticated ? (
                <button
                  className="nav-btn"
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
                  Sign Out
                </button>
              ) : (
                <button onClick={() => loginWithRedirect()} className="nav-btn">
                  Sign In
                </button>
              )}

              <NavLink to="/cart" className="link">
                <BsCart2 className="cart-icon" />
              </NavLink>
              <p className="cart_count">{cart.length}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Nabvar;
