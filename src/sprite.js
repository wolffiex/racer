export class Sprite {
  constructor(src) {
    this.width = 0;
    this.height = 0;
    var img = new Image();
    img.onload = () => {this.width = img.width; this.height = img.height;};
    img.src = src
    this.img = img;
  }

  draw(context){
    context.drawImage(this.img, -this.width/2, -this.height/2);
  }
};
