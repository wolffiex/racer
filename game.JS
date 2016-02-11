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

function gameLoop() {
  var j = 0;
  var pad = navigator.getGamepads()[0];
  var buttons = pad.buttons;
  //console.log(buttons);
  for (var i=0; i < pad.axes.length; i++) {
	var el = document.getElementById('ax' + i);
	el.innerHTML = pad.axes[i];
  }

  requestAnimationFrame(gameLoop);

}

requestAnimationFrame(gameLoop);
