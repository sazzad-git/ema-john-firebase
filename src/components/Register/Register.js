import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div>
        <h2>Register: Create Account</h2>
        <form onSubmit="">
          <input type="email" name="" id="" placeholder="Your Email" />
          <br />
          <input type="password" name="" id="" placeholder="Password" />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="Re-enter Password"
          />
          <br />
          <input type="submit" value="submit" />
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
        <div>-----------or----------</div>
        <button className="btn-common">Google Sign In</button>
      </div>
    </div>
  );
};

export default Register;
