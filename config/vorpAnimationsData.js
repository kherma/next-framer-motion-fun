import { GiNightSleep, GiBookCover, GiElectric } from "react-icons/gi";

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

import {
  sleepActionVorp,
  sleepActionGears,
  sleepActionLids,
  sleepActionEye,
} from "../animations/vorpPageAnim/vorpSleepActionAnim";

import {
  readActionVorp,
  readActionGears,
  readActionLids,
  readActionEye,
} from "../animations/vorpPageAnim/vorpReadActionAnim";

const controlsData = [
  { Icon: GiNightSleep, action: "sleepActionAnim", time: 10 },
  { Icon: GiElectric, action: "eatActionAnim", time: 10 },
  { Icon: GiBookCover, action: "readActionAnim", time: 10 },
];

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
  container: sleepActionVorp,
  gears: sleepActionGears,
  eye: sleepActionEye,
  lids: sleepActionLids,
};

const eatActionAnim = {
  container: sleepActionVorp,
  gears: sleepActionGears,
  eye: sleepActionEye,
  lids: sleepActionLids,
};

const readActionAnim = {
  container: readActionVorp,
  gears: readActionGears,
  eye: readActionEye,
  lids: readActionLids,
};

export const vorpGameAnim = {
  animations: {
    startGameAnim,
    playGameAnim,
    sleepActionAnim,
    eatActionAnim,
    readActionAnim,
  },
  controlsData,
};
