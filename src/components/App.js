import React, { Component, useState } from "react";
import "../styles/App.css";
import Navigation from "./Navigation";
import { useLocation } from "react-router-dom";
import LocationDisplay from "./LocationDisplay";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div id="main">{/* Do not remove the main div */}</div>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <Navigation />
      <LocationDisplay url={location.pathname} />
    </>
  );
}

export default App;
