import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

window.MyReactComponents = window.MyReactComponents || {};
window.MyReactComponents.App = App;
window.React = React;       // Optional, if you need React globally
window.ReactDOM = ReactDOM; // Must expose ReactDOM
