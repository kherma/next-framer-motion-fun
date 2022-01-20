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

const sleepActionAnim = {
  container: startGameVorp,
  gears: startGameGears,
  eye: startGameEye,
  lids: startGameLids,
};

const eatActionAnim = {
  container: startGameVorp,
  gears: startGameGears,
  eye: startGameEye,
  lids: startGameLids,
};

const readActionAnim = {
  container: startGameVorp,
  gears: startGameGears,
  eye: startGameEye,
  lids: startGameLids,
};

export const vorpGameAnim = {
  startGameAnim,
  playGameAnim,
  sleepActionAnim,
  eatActionAnim,
  readActionAnim,
};
