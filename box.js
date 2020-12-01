class Box {
    constructor(x, y, width, height ) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){

        push();
      
      this.visibility = this.visibility -5
      tint(255,this.visibility);
      pop();

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        fill = ("blue")
        rotate(angle);
        rectMode(CENTER);
        
        pop();
      }
      score(){
        if(this.visibility < 0 && this.visibility > -1000){
          score++
        }
}
}