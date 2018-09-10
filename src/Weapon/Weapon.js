import React, { Component } from "react";

export class Weapon extends Component {
  render() {
    return (
      <button
        onClick={() => {
          this.props.onWeaponSelected(this.props.name);
        } }
      >
        {this.props.name}
      </button>
    );
  }
}
