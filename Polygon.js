class Polygon{
    constructor(width, height) {
        var options = {
            'restitution':0.8
            
        }
        this.body = Bodies.rectangle(80, 80, options);
        this.width = 80;
        this.height = 80;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
       //this.body.position.x = mouseX;
       //this.body.position.y = mouseY;
       
        push ();

        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop ();
      }
}
