const CANVAS_BORDER_COLOR = 'black';
const CANVAS_BACKGROUND_COLOR = "white";
const SNAKE_COLOUR = 'lightgreen';
const SNAKE_BORDER_COLOUR = 'darkgreen';

let snake = [
	{x: 150, y: 150},
	{x: 140, y: 150},
	{x: 130, y: 150},
	{x: 120, y: 150},
	{x: 110, y: 150}
];

//horizontal velocity
let dx = 10;

//vertical velocity
let dy = 0;

//get the canvas element
var gameCanvas = document.getElementById('gameCanvas');

//return a two dimensional drawing context
var ctx = gameCanvas.getContext('2d');

//Select the color to fill the canvas
ctx.fillStyle = CANVAS_BACKGROUND_COLOR;
// Select the color for the border of the canvas
ctx.strokeStyle = CANVAS_BORDER_COLOR;

//Draw a "filled" rectangle to cover the entire canvas
ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
//Draw a 'border' around the entire canvas
ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);

//move one step to the right
moveSnake()

//Change vertical velocity to 0
dx = 0;
//change horizontal velocity to 10
dy = -10;

//move one step up
moveSnake()

//draw snake on the canvas
drawSnake()

function moveSnake() {
	const head = {x: snake[0].x + dx, y: snake[0].y + dy};

	snake.unshift(head);

	snake.pop();
}

//Draw the snake on the canvas
function drawSnake() {
	snake.forEach(drawSnakePart);
}

//set the colors of the snake
function drawSnakePart(snakePart) {
	ctx.fillStyle = SNAKE_COLOUR;
	ctx.strokeStyle = SNAKE_BORDER_COLOUR;

//draw a filled rectangle to represent the snake at the coordinates
//the part is located
	ctx.fillRect(snakePart.x, snakePart.y, 10, 10);

	//draw a border around the snake
	ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function clearCanvas() {
	ctx.fillStyle = 'white';
	ctx.strokeStyle = 'black';

	ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
	ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
}