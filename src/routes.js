// ./react-redux-client/src/routes.js
import React from "react";
import { Route } from "react-router-dom";
import App from "./App";
import IntroScreen from "./components/IntroScreen";
import MagicTypesContainer from "./containers/MagicTypesContainer";

export default (
  <Route path="/" component={MagicTypesContainer} />
)
    {/* <Route component={IntroScreen} /> */}
    {/* <Route path="/magicTypes" component={MagicTypesContainer} /> */}
     {/* <Route path="/:id" component={Todo} /> */}
  

