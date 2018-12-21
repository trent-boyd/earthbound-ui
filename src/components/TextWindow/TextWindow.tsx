import React, { Component } from "react";
import classnames from "classnames";

import "./TextWindow.scss";

type Props = {
  flavor?: "plain" | "mint" | "strawberry" | "banana" | "peanut";
  speed?: "fast" | "normal" | "slow";
};

export default class TextWindow extends Component<Props> {
  static defaultProps = {
    flavor: "plain", // not implemented
    speed: "normal" // not implemented
  };

  render() {
    return (
      <div className={classnames("window", this.props.flavor)}>
        {this.props.children}
      </div>
    );
  }
}
