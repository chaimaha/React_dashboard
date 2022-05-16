import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, videErrors } from "../../Redux/actions/user";
import Errors from "../../Components/Errors/Error";
import "../Login/Login.css";

const Register = ({ history }) => {
  const [user, setUser] = useState({});
  const errors = useSelector((state) => state.userReducer.errors);

  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(user, history));
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    return () => {
      dispatch(videErrors());
    };
  }, []);
  return (
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  {errors.length > 0
                    ? errors.map((el) => <Errors error={el} />)
                    : null}
                  <h3 className="login-heading mb-4">Create an account!</h3>
                  <form onSubmit={(e) => handleRegister(e)}>
                    <div className="form-label-group">
                      <input
                        type="TEXT"
                        id="inputnAME"
                        name="name"
                        className="form-control"
                        placeholder="Name User"
                        required
                        autofocus
                        onChange={handleChange}
                      />
                      <label htmlFor="inputEmail">Name:</label>
                    </div>
                    <div className="form-label-group">
                      <input
                        type="email"
                        name="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email address"
                        required
                        autofocus
                        onChange={handleChange}
                      />
                      <label htmlFor="inputEmail">Email address</label>
                    </div>
                    <div className="form-label-group">
                      <input
                        type="password"
                        name="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        required
                        onChange={handleChange}
                      />
                      <label htmlFor="inputPassword">Password</label>
                    </div>
                    <div className="form-label-group">
                      <input
                        type="number"
                        id="inputPhone"
                        className="form-control"
                        placeholder="enter your phone number"
                        name="phone"
                        autofocus
                        onChange={handleChange}
                      />
                      <label htmlFor="inputEmail">Phone Number</label>
                    </div>
                    <div className="custom-control custom-checkbox mb-3">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        Remember password
                      </label>
                    </div>
                    <button
                      className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                      type="submit"
                      onClick={handleRegister}
                    >
                      Sign Up
                    </button>
                    <div className="text-center">Forgot password?</div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
