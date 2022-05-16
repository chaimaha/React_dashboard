import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, videErrors, register } from "../../Redux/actions/user";
import Errors from "../../Components/Errors/Error";
// import { register, videErrors } from "../../Redux/actions/user";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = ({ history }) => {
  const [user, setUser] = useState({});
  const errors = useSelector((state) => state.userReducer.errors);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(user, history));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(user, history));
  };
  useEffect(() => {
    return () => {
      dispatch(videErrors());
    };
  }, []);
  return (
    <div>
      <div className="main">
        {errors.length > 0 ? errors.map((el) => <Errors error={el} />) : null}
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form onSubmit={handleRegister}>
            <label
              htmlFor="chk"
              aria-hidden="true"
              // onClick={() => {
              //   history.push("/register");
              // }}
            >
              Sign up
            </label>
            <input
              type="text"
              name="name"
              placeholder="User name"
              required
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
            />
            <button type="submit">Sign up</button>
          </form>
        </div>
        <div className="login">
          <form onSubmit={handleLogin}>
            <label
              htmlFor="chk"
              aria-hidden="true"
              onClick={() => history.push("/login")}
            >
              Login
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
