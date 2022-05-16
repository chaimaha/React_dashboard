import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../Redux/actions/user";

import "./Navbar.css";
const Navbar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  return (
    <header>
      <h2>
        <i className="icon-plane" />
        <Link to="/"></Link>
      </h2>
      <nav>
        <ul>
          <ul className="ul_auth">
            {isAuth ? (
              <div>
                <ul>
                  <Link to="/">
                    {" "}
                    <li className="auth" onClick={() => dispatch(logout())}>
                      LOGOUT{" "}
                    </li>
                  </Link>
                </ul>
              </div>
            ) : (
              <ul>
                <Link to="/">
                  <li className="auth"></li>
                </Link>
                <Link to="/login">
                  <li className="auth"> </li>
                </Link>
              </ul>
            )}
          </ul>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
