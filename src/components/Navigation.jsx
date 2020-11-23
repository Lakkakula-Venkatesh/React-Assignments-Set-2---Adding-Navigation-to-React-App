import React from "react";
import Home from "./Home";
import About from "./About";
import { Route, Switch } from "react-router-dom";
import Invalid from "./Invalid";

export default function Navigation() {
  return (
    <>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} />
        <Route path="/" component={Invalid} />
      </Switch>
    </>
  );
}
