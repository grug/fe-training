import React, { Component } from "react";

export class ComputerArea extends Component {
  render() {
    return <div className="computer-area">Computer has chosen: {this.props.computerWeapon}</div>;
  }
}
