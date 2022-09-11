import { randomGridPosition } from "./grid.js";
import {onSnake, expandSnake} from "./snake.js"

let food = getrandomFoodPosition();
let expantionRate = 1;

export function update() {
    if(onSnake(food)) {
        expandSnake(expantionRate);
        food = getrandomFoodPosition();
    }
}

export function draw(gameBoard) {
        const foodElement = document.createElement('div');
        foodElement.style.gridColumnStart= food.x;
        foodElement.style.gridRowStart = food.y;
        foodElement.classList.add("food");
        gameBoard.appendChild(foodElement);
};

function getrandomFoodPosition() {
    let newFoodPosition;
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}