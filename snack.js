import * as input from "./input.js";
import { draw as drawagaine } from "./game.js";
import {
  Draw as DrawFood,
  food_cord as FoodCords,
  UpdateAndDraw,
} from "./food.js";

export const SNACK_SPEED = 5;
export const EXPENSIVE_SEGMENT = 1;

let snack_body = [{ x: 13, y: 13 }];

export function update() {
  let direction = input.getDirection();

  for (let i = snack_body.length - 2; i >= 0; i--) {
    snack_body[i + 1] = { ...snack_body[i] };
  }
  snack_body[0].x += direction.x;
  snack_body[0].y += direction.y;
  if (
    snack_body[0].x < 1 ||
    snack_body[0].x > 25 ||
    snack_body[0].y < 1 ||
    snack_body[0].y > 25
  ) {
    window.alert("You lose! ; do you replay ? press OK");
    snack_body = [{ x: 13, y: 13 }];
  }

  for (let i = snack_body.length - 1; i > 0; i--) {
    if (
      snack_body[0].x === snack_body[i].x &&
      snack_body[0].y === snack_body[i].y
    ) {
      window.alert("you lose !");
      snack_body = [{ x: 13, y: 13 }];
    }
  }
  onFood();
}

export function draw(game_board) {
  snack_body.forEach((sagment) => {
    let element = document.createElement("div");
    element.style.gridColumnStart = sagment.x;
    element.style.gridRowStart = sagment.y;
    element.classList.add("snack");
    game_board.appendChild(element);
  });
}
export function expensive(expensive_seg) {
  for (let i = 1; i <= expensive_seg; i++)
    snack_body.push({ ...snack_body[snack_body.length - 1] });
}
export function onFood() {
  if (snack_body[0].x === FoodCords.x && snack_body[0].y === FoodCords.y) {
    UpdateAndDraw();
    expensive(EXPENSIVE_SEGMENT);
  }
}
