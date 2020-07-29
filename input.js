let Direction_cord = { x: -1, y: 0 };
export function getDirection() {
  return Direction_cord;
}

let lastpress = 37;
window.addEventListener("keydown", (e) => {
  switch (e.keyCode) {
    case 40:
      if (lastpress == 38) return;
      Direction_cord.x = 0;
      Direction_cord.y = 1;
      break;
    case 37:
      if (lastpress == 39) return;
      Direction_cord.x = -1;
      Direction_cord.y = 0;
      break;
    case 39:
      if (lastpress == 37) return;
      Direction_cord.x = 1;
      Direction_cord.y = 0;
      break;
    case 38:
      if (lastpress == 40) return;
      Direction_cord.x = 0;
      Direction_cord.y = -1;
      break;
  }
  lastpress = e.keyCode;
});
