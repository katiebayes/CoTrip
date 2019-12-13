import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import SplashPage from "./pages/SplashPage/SplashPage";
import HomePage from "../src/pages/HomePage/HomePage";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckSquare,
  faHeart,
  faTable,
  faComment,
  faCaretRight,
  faCaretLeft,
  faSearch,
  faAngleLeft,
  faAngleRight,
  faCommentDots
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(
  fab,
  far,
  fas,
  faCheckSquare,
  faHeart,
  faTable,
  faComment,
  faCaretRight,
  faCaretLeft,
  faSearch,
  faAngleLeft,
  faAngleRight,
  faCommentDots
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route path="/" exact component={SplashPage}></Route>
          <Route path="/home" exact component={HomePage}></Route>
        </main>
      </div>
    );
  }
}

export default App;
