import {
  update as updatSnack,
  draw as drawSnack,
  SNACK_SPEED,
} from "./snack.js";

import { Draw, getRandomXY } from "./food.js";

let LastRendertime = 0;
const game_board = document.getElementById("game-board");

function main(currentTime) {
  window.requestAnimationFrame(main);
  const renderInSecende = (currentTime - LastRendertime) / 1000;
  if (renderInSecende < 1 / SNACK_SPEED) return;

  LastRendertime = currentTime;
  update();
  draw();
}

function update() {
  updatSnack();
}

function draw() {
  game_board.innerHTML = "";
  drawSnack(game_board);
  Draw(game_board);
}

window.requestAnimationFrame(main);
