//strict
//Defining a snake, each element is a piece of the snake and it has a position x and y
let snake = [];
let currentPosition = [0, 0];

// food is an array with x and y position where it will apear randomly
let food = [];

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

function getRandomPosition(width, height) {
  //TODO: check when position is the same as the snake
  return [
    Math.floor(Math.random() * width + 1),
    Math.floor(Math.random() * height + 1),
  ];
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

start({ startPosition: [0, 0], speed: 100 });
