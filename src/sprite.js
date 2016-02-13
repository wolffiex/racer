export class Sprite {
  constructor(src) {
    var img = new Image();
    img.src = src
    this.img = img;
  }

  draw(context, pos){
    context.drawImage(this.img, pos.x, pos.y);
  }
};
