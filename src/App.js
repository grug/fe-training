import React, { Component, Fragment } from "react";
import { sample } from "lodash";
import { PlayerArea } from "./PlayerArea/PlayerArea";
import { ComputerArea } from "./ComputerArea/ComputerArea";
import { ResultArea } from "./ResultArea/ResultArea";
import { WEAPON_LIST } from "./Weapon/WeaponList";
import { determineWinner } from "./Util/gameLogic";
import "./App.css";

class App extends Component {
  state = {
    playerWeapon: undefined,
    computerWeapon: undefined,
    result: undefined
  };

  fight = playerWeapon => {
    const computerWeapon = sample(WEAPON_LIST);
    const result = determineWinner(playerWeapon, computerWeapon);

    this.setState(prev => ({
      ...prev,
      computerWeapon,
      result
    }));
  };

  resetGame = () => {
    this.setState({
      playerWeapon: undefined,
      computerWeapon: undefined,
      result: undefined
    });
  };

  render() {
    return (
      <Fragment>
        <div className="box">
          <PlayerArea onWeaponSelected={this.fight} />
          {this.state.computerWeapon && (
            <ComputerArea computerWeapon={this.state.computerWeapon} />
          )}
        </div>
        {this.state.result && <ResultArea result={this.state.result} />}
      </Fragment>
    );
  }
}

export default App;
