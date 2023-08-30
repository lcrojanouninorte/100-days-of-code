//strict
//Defining a snake, each element is a piece of the snake and it has a position x and y

let currentPosition = [0, 0];

// food is an array with x and y position where it will apear randomly
let food = [];

function handleArrowKeys(event) {
  // Get the key code of the pressed key.
  const keycode = event.keyCode;

  // Check if the key code is one of the arrow keys.
  if (keycode === 38) {
    // Up arrow key was pressed.
    snake = [];
  } else if (keycode === 40) {
    // Down arrow key was pressed.
    console.log("Down arrow key was pressed.");
  } else if (keycode === 37) {
    // Left arrow key was pressed.
    console.log("Left arrow key was pressed.");
  } else if (keycode === 39) {
    // Right arrow key was pressed.
    console.log("Right arrow key was pressed.");
  }
}

function start({ startPosition, speed }) {
  const canvas = document.getElementById("canvas");
  const { width = 200, height = 500 } = canvas?.getBoundingClientRect();
  if (canvas?.getContext) {
    //start
    const ctx = canvas.getContext("2d");
    drawSnake(ctx, ...startPosition, 0, 0);
    drawFood(ctx, ...getRandomPosition(width, height), 100, 100);

    //playing

    //stop
  }
}

function drawSnake(ctx, newX, newY, oldX, oldY) {
  ctx.clearRect(oldX, oldY, 5, 15);
  //draw snake
  ctx.fillStyle = "rgb(200, 0, 0)";
  ctx.fillRect(newX, newY, 5, 15);
}

function drawFood(ctx, newX, newY, oldX, oldY) {
  ctx.clearRect(oldX, oldY, 5, 5);

  //draw food
  ctx.fillStyle = "rgb(200, 200, 0)";
  ctx.fillRect(newX, newY, 5, 5);
}

function getRandomPosition(width, height) {
  //TODO: check when position is the same as the snake
  return [
    Math.floor(Math.random() * width + 1),
    Math.floor(Math.random() * height + 1),
  ];
}

start({ startPosition: [0, 0], speed: 100 });
