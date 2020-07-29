import * as input from "./input.js";

export const SNACK_SPEED = 1;

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
    snack_body[0].x > 24 ||
    snack_body[0].y < 1 ||
    snack_body[0].y > 24
  ) {
    window.alert("You lose! ; do you replay ? press OK");
    snack_body = [{ x: 13, y: 13 }];
  }
}

export function draw(game_board) {
  snack_body.forEach((sagment) => {
    let element = document.createElement("div");
    element.style.gridColumnStart = sagment.x;
    // element.style.gridColumnEnd = sagment.x + 1;
    element.style.gridRowStart = sagment.y;
    //element.style.gridRowEnd = sagment.y + 1;
    element.classList.add("snack");
    game_board.appendChild(element);
  });
}
