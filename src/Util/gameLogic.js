/**
 * Determines the winner of a round of RPS.
 *
 * @param {'Rock' | 'Paper' | 'Scissors'} playerWeapon
 * @param {'Rock' | 'Paper' | 'Scissors'} computerWeapon
 * @returns 'Player' | 'Computer' | 'Draw'
 */
export const determineWinner = (playerWeapon, computerWeapon) => {
  const outcomes = {
    Rock: ['Scissors'],
    Paper: ['Rock'],
    Scissors: ['Paper']
  };

  if (playerWeapon === computerWeapon) {
    return 'Draw';
  }

  return outcomes[playerWeapon].includes(computerWeapon) ? 'Player' : 'Computer';
}
