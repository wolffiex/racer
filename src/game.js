"use strict";
import {Sprite} from './sprite';
var gamepads = {};

function gamepadHandler(event, connecting) {
	console.log('hi', event.gamepad.index);
  var gamepad = event.gamepad;
  // Note:
  // gamepad === navigator.getGamepads()[gamepad.index]

  if (connecting) {
    gamepads[gamepad.index] = gamepad;
  } else {
    delete gamepads[gamepad.index];
  }

  console.log(gamepad);
}

window.addEventListener("gamepadconnected", function(e) { gamepadHandler(e, true); }, false);
window.addEventListener("gamepaddisconnected", function(e) { gamepadHandler(e, false); }, false);

console.log(navigator.getGamepads());

function takeInput() {
  var gamepads = navigator.getGamepads ?
    navigator.getGamepads() :
    navigator.webkitGetGamepads();

  var pad = gamepads[0];
  var axes = pad.axes;

  //console.log(buttons);
  for (var i=0; i < pad.axes.length; i++) {
    var el = document.getElementById('ax' + i);
    el.innerHTML = pad.axes[i];
  }

  return {x: axes[1], y: axes[3]};
}

var _pos = {r:0, x:100, y:100};
var accel = {r: 0, x:0, y:0};
function update(input) {
  _pos.x += input.x;
  _pos.y += input.y;
  return _pos;
}

let car = new Sprite('./assets/RacerMK1.png');
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

function render(pos) {
  car.draw(context, pos);
}


function gameLoop() {
  var input = takeInput();
  var pos = update(input);
  render(pos);
  requestAnimationFrame(gameLoop);

}

requestAnimationFrame(gameLoop);
