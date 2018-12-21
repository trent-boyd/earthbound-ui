import React, { Component } from "react";

import TextWindow from "./components/TextWindow";

import "normalize.css";
import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <TextWindow>
        Hey bro. Did the sound wake you up? Were you freaked out?
      </TextWindow>
    );
  }
}
