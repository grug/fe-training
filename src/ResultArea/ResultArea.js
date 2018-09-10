import React, { Component } from "react";
import "./ResultArea.css";

export class ResultArea extends Component {
  render() {
    return (
      <div className="result-area">
        Result:
        {this.props.result === "Draw" && <span>It's a draw!</span>}
        {this.props.result === "Computer" && <span>You lose!</span>}
        {this.props.result === "Player" && <span>You win!</span>}
      </div>
    );
  }
}
