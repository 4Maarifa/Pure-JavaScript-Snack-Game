import {
  update as updatSnack,
  draw as drawSnack,
  SNACK_SPEED,
} from "./snack.js";

import { Draw as DrawFood } from "./food.js";

let LastRendertime = 0;
export const game_board = document.getElementById("game-board");

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

export function draw() {
  game_board.innerHTML = "";
  drawSnack(game_board);
  DrawFood();
}

window.requestAnimationFrame(main);
