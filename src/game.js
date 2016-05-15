"use strict";
import {Sprite} from './sprite';
import {Car} from './car';
var gamepads = {};

function pollGamepads() {
  return navigator.getGamepads ?
    navigator.getGamepads() :
    navigator.webkitGetGamepads();
}

function readInput(gamepads, gamepadNum) {
  if (global.fakeInput) {
    return global.fakeInput[gamepadNum];
  } else {
    let axes = gamepads[gamepadNum].axes;
    return {x: axes[0], y: axes[3]};
  }
}

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

let lastTick = (new Date).getTime();
function getElapsedTime() {
  let lastLastTick = lastTick;
  lastTick = (new Date).getTime();
  return lastTick - lastLastTick;
}

let cars = [new Car(new Sprite('./assets/RacerMK1.png'))];
function gameLoop() {

  context.clearRect(0, 0, canvas.width, canvas.height);

  let ms = getElapsedTime();
  for (var i=0; i< ms; i++) {
    cars.forEach(car => car.update());
  }

  cars.forEach(car => car.draw(context));

  let gamepads = pollGamepads();
  cars.forEach((car,n) => car.applyInput(readInput(gamepads, n)));

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
