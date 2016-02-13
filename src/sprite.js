export class Sprite {
  constructor(src) {
    var img = new Image();
    img.src = src
    this.img = img;
  }

  draw(context){
    context.drawImage(this.img, 0, 0);
  }
};
