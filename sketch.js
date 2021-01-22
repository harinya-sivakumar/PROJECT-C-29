const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2, polygon, slingshot, constrainedPoint;
var box100, box200, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;
var box17, box18, box19, box20, box21, box22, box23, box24, box25;



function preload() {
    
}

function setup(){
    var canvas = createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;

    constrainedPoint = new Ground(200, 200, 20, 20);
    polygon = new Polygon(80, 80);
    slingshot = new Slingshot(constrainedPoint.body, polygon.body);

    ground1 = new Ground(600, 380, 500, 20);
    ground2 = new Ground(1100, 200, 300, 20);
    
    box1 = new Bluebox(500, 340, 36, 36);
    box2 = new Bluebox(540, 340, 36, 36);
    box3 = new Bluebox(580, 340, 36, 36);
    box4 = new Bluebox(620, 340, 36, 36);
    box5 = new Bluebox(660, 340, 36, 36);
    box6 = new Bluebox(700, 340, 36, 36);
    box7 = new Bluebox(740, 340, 36, 36);
    box8 = new Pinkbox(540, 300, 36, 36);
    box9 = new Pinkbox(580, 300, 36, 36);
    box10 = new Pinkbox(620, 300, 36, 36);
    box11 = new Pinkbox(660, 300, 36, 36);
    box12 = new Pinkbox(700, 300, 36, 36);
    box13 = new Greenbox(580, 260, 36, 36);
    box14 = new Greenbox(620, 260, 36, 36);
    box15 = new Greenbox(660, 260, 36, 36);
    box16 = new Whitebox(620, 220, 36, 36);
    box17 = new Whitebox(1000, 140, 40, 40);
    box18 = new Whitebox(1040, 140, 40, 40);
    box19 = new Whitebox(1080, 140, 40, 40);
    box20 = new Whitebox(1120, 140, 40, 40);
    box21 = new Whitebox(1160, 140, 40, 40);
    box22 = new Purplebox(1040, 100, 40, 40);
    box23 = new Purplebox(1080, 100, 40, 40);
    box24 = new Purplebox(1120, 100, 40, 40);
    box25 = new Greenbox(1080, 60, 40, 40);
    
    
    
    
}

function draw(){
    background(0);
    Engine.update(engine);

    constrainedPoint.display();
    polygon.display();
    slingshot.display();
    
    
    ground1.display();
    ground2.display();
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    
    
}

        function mouseDragged(){
            Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
        }


        function mouseReleased(){
            slingshot.fly();
        }

        function keyPressed(){
            if(keyCode === 32){
                slingshot.attach(polygon.body);
            }
        }