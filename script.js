
import { snakeSpeed, update as updateSnake, draw as drawSnake, getSnakeHead, snakeInterSelection, } from "./snake.js"; 
import { update as updateFood, draw as drawFood } from "./food.js"
import { outsideGrid } from "./grid.js";

let lastRenderTime = 0;
let gameOver = false;

const gameBoard = document.getElementById("game-board");
function main(currentTime) {
        if(gameOver) {
            if(confirm("You are a Loser hahaha, press Ok to restart noob")){
                window.location = "/";
            }
            return;
        }

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1 / snakeSpeed) return;
    console.log("render")
    lastRenderTime = currentTime;

    update();
    draw();
    checkDeath();
}

window.requestAnimationFrame(main);

function update() {
    updateSnake();
    updateFood();
}

function draw() {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead( )) || snakeInterSelection();
}