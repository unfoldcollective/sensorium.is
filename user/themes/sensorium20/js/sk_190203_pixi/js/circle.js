// class Circle extends PIXI.Graphics{
class Circle extends PIXI.Sprite{

  constructor (x, y, clr, i){
      super();
      // setup initial positions
      this.position.x = x;
      this.position.y = y;
      this.targetPos = new PIXI.Point(Poof.random(Poof.width), Poof.random(Poof.height));
      this.initTargetPos = this.position.clone();
      // convert RGB colour to hex
      this.fillColor = Poof.rgb2hex(clr[0],clr[1],clr[2]);
      // make the same colour darker (keeping it at 0 as the lowest)
      let darkAmt = 20;
      this.shadowColor = Poof.rgb2hex(Math.max(0,clr[0] - darkAmt),
                     Math.max(0,clr[1] - darkAmt),
                     Math.max(0,clr[2] - darkAmt));
      // pick a random initial radius
      this.radius = Poof.random(1,16);
      
      this.index = i;

      // draw graphics
      this.g = new PIXI.Graphics();
      this.addChild(this.g);
      // this.g = this;
      this.draw(this.radius,this.fillColor,this.shadowColor);
  }

  draw(radius=9,fill=0xFF9900,shadow=0xDE9000,arcAngleStart=-Poof.QUARTER_PI,arcAngleEnd=Poof.PI-Poof.QUARTER_PI){
    if(!this.g) return;

    this.radius      = radius;
    this.fillColor   = fill;
    this.shadowColor = shadow;

    this.g.clear();
    this.g.beginFill(this.fillColor);
    this.g.drawCircle(this.radius,this.radius,this.radius)
    this.g.endFill();
    this.g.beginFill(this.shadowColor);
    this.g.arc(this.radius,this.radius,this.radius,-Poof.QUARTER_PI, Poof.PI-Poof.QUARTER_PI)
    this.g.endFill();
    this.cacheAsBitmap = false; //andrejm was true for performance reasons
    this.anchor.set(10.5,10.5);
  }

  update(lerpAmt){
    // update graphics
    this.position.x = Poof.lerp(this.initTargetPos.x, this.targetPos.x, lerpAmt);
    this.position.y = Poof.lerp(this.initTargetPos.y, this.targetPos.y, lerpAmt);
    // update radius
    this.radius = Poof.map(Math.sin(Poof.frameCount * 0.03 + this.index), -1.0, 1.0, 0.3, 1.0);
    // update scale based on radius
    this.scale.x = this.scale.y = this.radius;
  }

  run(lerpAmt){
      this.update(lerpAmt);
  }

}