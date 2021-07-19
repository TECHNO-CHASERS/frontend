import React from "react";
import Login from "./Login";
import Image from "./Image";
import Signup from "./Signup";
import "./Component_CSS/Mainbody.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default class MainBody extends React.Component {
  render() {
    return (
      <div className="Split">
        <ul>
          <li className="left">
            <Image />
          </li>
          <li className="right">
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/signup" component={Signup} />
              </Switch>
            </BrowserRouter>
          </li>
        </ul>
      </div>
    );
  }
}
