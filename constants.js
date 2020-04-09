import { config } from './settings/config';

const gameWidth = config.width;
const gameHeight = config.height;
const halfGameWidth = gameWidth / 2;
const halfGameHeight = gameHeight / 2;

export default {
  gameWidth,
  gameHeight,
  halfGameWidth,
  halfGameHeight
}