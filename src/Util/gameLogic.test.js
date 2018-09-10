import { determineWinner } from "./gameLogic";

it("renders without crashing", () => {
  [
    { player: "Rock", computer: "Rock", winner: "Draw" },
    { player: "Paper", computer: "Paper", winner: "Draw" },
    { player: "Scissors", computer: "Scissors", winner: "Draw" },
    { player: "Rock", computer: "Paper", winner: "Computer" },
    { player: "Rock", computer: "Scissors", winner: "Player" },
    { player: "Paper", computer: "Rock", winner: "Player" },
    { player: "Paper", computer: "Scissors", winner: "Computer" },
    { player: "Scissors", computer: "Rock", winner: "Computer" },
    { player: "Scissors", computer: "Paper", winner: "Player" }
  ].forEach(scenario => {
    const result = determineWinner(scenario.player, scenario.computer);

    expect(result).toEqual(scenario.winner);
  });
});
