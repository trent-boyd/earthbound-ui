import React, { Component } from "react";

import TextWindow from "./components/TextWindow";

import "normalize.css";
import "./App.scss";

export default class App extends Component {
  render() {
    const flavors = ["plain", "mint", "strawberry", "banana", "peanut"];

    return flavors.map(flavor => (
      <div style={{ marginBottom: 10 }}>
        <TextWindow flavor={flavor} key={flavor}>
          Hey bro. Did the sound wake you up? Were you freaked out?
        </TextWindow>
      </div>
    ));
  }
}
