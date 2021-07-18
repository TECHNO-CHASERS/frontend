import { Navbar } from "./Components/Navbar";
import { MainBody } from "./Components/MainBody";
import { Footer } from "./Components/Footer";
import { Image } from "./Components/Image";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Signup } from "./Components/Signup";
import { ImageSignup } from "./Components/ImageSignup";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <div className="left">
          <Switch>
            <Route exact path="/" component={Image} />
            <Route path="/signup" component={ImageSignup} />
          </Switch>
        </div>
        <div className="right">
          <Switch>
            <Route exact path="/" component={MainBody} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
