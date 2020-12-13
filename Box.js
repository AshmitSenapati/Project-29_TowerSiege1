class Box {
  constructor(x, y, width, height) {
    var options = {
        isStatic: false,
        restitution:0.8,
        friction:2.0,
        density:1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position
    push();
    stroke("black")
    strokeWeight(5)
    rectMode(CENTER);
    rect(pos.x,pos.y, this.width, this.height);
    pop();
  }
};
