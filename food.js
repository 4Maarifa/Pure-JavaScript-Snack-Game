import { onFood } from "./snack.js";
import { game_board } from "./game.js";

export let food_cord = { x: 1, y: 1 };

(function () {
  randomXY();
})();

function randomXY() {
  food_cord.x = Math.floor(Math.random() * 25);
  food_cord.y = Math.floor(Math.random() * 25);
  //  console.log("x: " + food_cord.x + " y: " + food_cord.y);
}

export function Draw() {
  /// lets draw
  //UpdateAndDraw();
  let foodElement = document.createElement("div");
  foodElement.classList.add("food");
  foodElement.style.display = "grid";
  foodElement.style.gridColumnStart = food_cord.x;
  foodElement.style.gridRowStart = food_cord.y;
  game_board.appendChild(foodElement);
}
export function UpdateAndDraw() {
  randomXY();
}
