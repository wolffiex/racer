const STEERING_SENSITIVITY = .004;
const THROTTLE_POWER = .0005;
const BRAKE_POWER = .02;

export class Car {
  constructor(sprite) {
    this._sprite = sprite;
    this._position = {x:0, y:canvas.height/2 };
    this._r = 0;
    this._speed = 0;

    this._wheelAngle = 0;
    this._accel = 0;
    this._brake = 0;
  }

  // ms number of milliseconds to 
  // steering -1 full left to 1 full right
  // accel 1 full accel to -1 full braking
  applyInput({x, y}) {
    if (Math.abs(x) > .01) {
      this._wheelAngle = x * STEERING_SENSITIVITY;
    } else {
      this._wheelAngle = 0;
    }
    this._accel = y > 0 ? y * THROTTLE_POWER : 0;
    this._brake = y < 0 ? y * BRAKE_POWER : 0;
  }

  // calculate car position in next ms
  update() {
    this._position.x += Math.sin(-this._r) * -this._speed;
    this._position.y += Math.cos(-this._r) * -this._speed;

    this._r += this._wheelAngle;
    this._speed += this._accel

  }

  draw(context) {
    context.save();
    context.translate(this._position.x, this._position.y);
    context.rotate(this._r);
    this._sprite.draw(context);
    context.restore();
  }
}
