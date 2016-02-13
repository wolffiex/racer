export class Sprite {
  constructor(src) {
    var img = new Image();
    this.width = 0;
    this.height = 0;
    img.onload = () => {this.width = img.width; this.height = img.height;};
    img.src = src
    this.img = img;
  }

  draw(context){
    context.drawImage(this.img, -this.width/2, -this.height/2);
  }
};
