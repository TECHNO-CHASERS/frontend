import React from "react";
import "./Component_CSS/Signup.css";

export default class Signup extends React.Component {
  render() {
    function signup() {
      alert("YOUR ARE SIGNED UP NOW");
    }
    return (
      <div className="Body">
        <div className="CenterContainer2">
          <div className="navbar2">SIGN UP</div>
          <h3>NAME</h3>
          <input
            type="text"
            className="inp"
            id="inp"
            placeholder="ENTER YOUR NAME"
          />
          <div className="inp-style">
            <ul>
              <li>
                <h3>DATE OF BIRTH</h3>
                <input
                  type="date"
                  className="inp2"
                  id="email-inp"
                  placeholder="ENTER YOUR DOB"
                />
              </li>
              <li>
                <h3>DIVISION</h3>
                <input
                  type="text"
                  className="inp2"
                  id="pass-inp"
                  placeholder="ENTER YOUR DIVISION"
                />
              </li>
            </ul>
          </div>
          <div className="inp-style">
            <ul>
              <li>
                <h3>EMAIL (OFFICIAL)</h3>
                <input
                  type="email"
                  className="inp2"
                  id="email-inp"
                  placeholder="ENTER YOUR EMAIL (OFFICIAL)"
                />
              </li>
              <li>
                <h3>EMAIL (ALTERNATIVE)</h3>
                <input
                  type="email"
                  className="inp2"
                  id="pass-inp"
                  placeholder="ENTER YOUR EMAIL (ALTERNATIVE)"
                />
              </li>
            </ul>
          </div>
          <div className="inp-style">
            <ul>
              <li>
                <h3>CITY</h3>
                <input
                  type="text"
                  className="inp2"
                  id="email-inp"
                  placeholder="ENTER YOUR MOBILE CITY"
                />
              </li>
              <li>
                <h3>PHONE NUMBER</h3>
                <input
                  type="tel"
                  className="inp2"
                  id="pass-inp"
                  placeholder="ENTER YOUR PHONE NUMBER"
                />
              </li>
            </ul>
          </div>
          <div className="inp-style">
            <ul>
              <li>
                <h3>PASSWORD</h3>
                <input
                  type="text"
                  className="inp2"
                  id="email-inp"
                  placeholder="ENTER YOUR PASSWORD"
                />
              </li>
              <li>
                <h3>CONFIRM PASSWORD</h3>
                <input
                  type="text"
                  className="inp2"
                  id="pass-inp"
                  placeholder="ENTER YOUR CONFIRM PASSWORD"
                />
              </li>
            </ul>
          </div>
          <div className="button-container2">
            <button
              className="btn"
              href="#"
              id="sign-up"
              onClick={signup}
              style={{ cursor: "pointer" }}
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    );
  }
}
