import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
// function generateCodeFromObject(obj){
//     //return a code generated string
//    }

// module.exports=generateCodeFromObject;

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);
