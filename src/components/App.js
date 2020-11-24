import React, { Component, useState } from "react";
import "../styles/App.css";
import Navigation from "./Navigation";
import LocationDisplay from "./LocationDisplay";
import { useLocation } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <div id="main">{/* Do not remove the main div */}</div>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <Navigation />
        <LocationDisplay />
      </>
    );
  }
}

export default App;
