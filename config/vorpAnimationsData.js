import {
  startGameVorp,
  startGameGears,
  startGameLids,
  startGameEye,
} from "../animations/vorpPageAnim/vorpStartGameAnim";

import {
  playGameVorp,
  playGameGears,
  playGameLids,
  playGameEye,
} from "../animations/vorpPageAnim/vorpPlayGameAnim";

const startGameAnim = {
  container: startGameVorp,
  gears: startGameGears,
  eye: startGameEye,
  lids: startGameLids,
};

const playGameAnim = {
  container: playGameVorp,
  gears: playGameGears,
  eye: playGameEye,
  lids: playGameLids,
};

export const vorpGameAnim = {
  startGameAnim,
  playGameAnim,
};
