import React from "react";
import './Component_CSS/Login.css'


export default class Login extends React.Component {
  render() {
    const func1 = () => {
      alert("BOLA THA PASSWORD MAT BHUL");
    };

    const login = () => {
      alert("NIKAL JA YAHA SE");
    };

    return (
      <div className="Body">
        <div className="CenterContainer">
          <div className="navbar2">LOGIN</div>
          <h3>EMAIL ID</h3>
          <input
            type="email"
            className="inp"
            id="inp"
            placeholder="ENTER EMAIL ID"
          />
          <h3>PASSWORD</h3>
          <input
            type="password"
            className="inp"
            id="inp"
            placeholder="ENTER PASSWORD"
          />
          <div className="rem-me">
            <input type="checkbox" />
            Remember M
          </div>
          <div className="for-pass">
            <a
              href="#"
              onClick={func1}
              style={{ textDecoration: "none", color: "black", cursor: "pointer" }}
            >
              Forgot Password
            </a>
          </div>
          <div className="button-container">
            <button className="btn" id="login" onClick={login}>
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                LOGIN
              </a>
            </button>
            <button
              className="btn"
              id="sign-up"
              onClick={(event) => (window.location.href = "/signup")}
            >
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                SIGN UP
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
