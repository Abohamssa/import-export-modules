import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi, triplePi } from "./maths";
// to import all
//import * as pi from './maths';

ReactDOM.render(
    <ul>
        <li>{pi}</li>
        <li>{doublePi()}</li>
        <li>{triplePi()}</li>
    </ul>,
    document.getElementById("root")
);
