import React, {Fragment} from "react";
import {AboutMe, MyProcess, MyWork, Splash} from "../index";

const App = () => (
  <Fragment>
    <Splash />
    <MyWork />
    <MyProcess />
    <AboutMe />
  </Fragment>
);

export default App;
