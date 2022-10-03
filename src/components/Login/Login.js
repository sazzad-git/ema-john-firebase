import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { user, signInUsingGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  const hsndleGoogleLogIn = () => {
    signInUsingGoogle().then((result) => {
      console.log(result.user);
    });
  };
  return (
    <div className="login-form">
      <div>
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Your Email" id="" />
          <br />
          <input type="password" name="" id="" />
          <br />
          <input type="submit" value="submit" />
        </form>
        <p>
          new to ema-john website? <Link to="/register">Create Account</Link>
        </p>
        <div>-----------or-------</div>
        <button className="btn-common" onClick={hsndleGoogleLogIn}>
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
