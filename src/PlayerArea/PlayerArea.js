import React, { Component } from "react";
import { Weapon } from "../Weapon/Weapon";
import { WEAPON_LIST } from "../Weapon/WeaponList";
import "./PlayerArea.css";

export class PlayerArea extends Component {
  render() {
    return (
      <div className="player-area">
        <header>Select your weapon</header>
        <div className="weaponContainer">
          {WEAPON_LIST.map((weapon, index) => (
            <Weapon name={weapon} onWeaponSelected={this.props.onWeaponSelected} key={index} />
          ))}
        </div>
      </div>
    );
  }
}
