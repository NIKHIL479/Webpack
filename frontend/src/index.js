import * as ReactDOMClient from 'react-dom/client';
import React from "react";
import App from "./App";
import Privacy from "./Privacy";

window.App = App;
window.React = React;
window.ReactDOM = ReactDOMClient;
window.Privacy=Privacy;
