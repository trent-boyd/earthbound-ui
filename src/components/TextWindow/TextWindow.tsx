import React, { Component } from "react";
import classnames from "classnames";

import "./TextWindow.scss";

// TODO: Get enums/types to work with these.
// export type Flavors = "plain" | "mint" | "strawberry" | "banana" | "peanut";
// export type Speeds = "fast" | "normal" | "slow";

// type Props = {
//   flavor?: Flavors;
//   speed?: Speeds;
// };

type Props = {
  flavor?: string;
  speed?: string;
};

export default class TextWindow extends Component<Props> {
  static defaultProps = {
    flavor: "plain",
    speed: "normal" // not implemented
  };

  render() {
    return (
      <div className={classnames("window", `flavor-${this.props.flavor}`)}>
        {this.props.children}
      </div>
    );
  }
}
