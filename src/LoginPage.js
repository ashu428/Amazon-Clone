import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase";
import "./LoginPage.css";

function LoginPage() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((auth) => {
      history.push("/");
    });
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => {
        alert("User not Authenticated");
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="amazon-logo.png"
          alt="unable to load"
        />
      </Link>

      <div className="login_container">
        <h1>SIGN-IN</h1>
        <form>
          <h5>E-MAIL</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <h5>PASSWORD</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button type="submit" onClick={signIn} className="login_button1">
            Sign In
          </button>
        </form>
        <p className="login_term">
          By signing-in you agree to Amazon's terms and conditions of use and
          sale.Please see our privecy notice , cookies based noticr and our
          interest based ADS
        </p>
        <button onClick={register} className="login_button2">
          Create an amazon account
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
