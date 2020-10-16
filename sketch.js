const Engine = Matter.Engine;
 const World = Matter.World; 
 const Bodies = Matter.Bodies; 
 const Constraint = Matter.Constraint;

var engine, world
var ground

var gameState = "onSling";

function preload(){
  polygonIMG=loadImage("hex ball.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world=engine.world;
  Engine.run(engine);

  ground = new Ground1();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);

  //first stand
  blox1 = new Block(300,275,30,40);
  blox2 = new Block(330,275,30,40);
  blox3 = new Block(360,275,30,40);
  blox4 = new Block(390,275,30,40);
  blox5 = new Block(420,275,30,40);
  blox6 = new Block(450,275,30,40);
  blox7 = new Block(480,275,30,40);

  blox8 = new Block(330,235,30,40);
  blox9 = new Block(360,235,30,40);
  blox10 = new Block(390,235,30,40);
  blox11 = new Block(420,235,30,40);
  blox12 = new Block(450,235,30,40);

  blox13 = new Block(360,195,30,40);
  blox14 = new Block(390,195,30,40);
  blox15 = new Block(420,195,30,40);

  blox16 = new Block(390,155,30,40);

  //second stand
  b17 = new Block(661,198,30,40);
  b18 = new Block(690,198,30,40);
  b19 = new Block(721,198,30,40);
  b20 = new Block(750,198,30,40);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  
  sling = new Slingshot(this.ball, {x:50, y:200});

}

function draw() {
  background(73,73,73);
  
stand1.display();
stand2.display();

ground.display();

fill("turquoise");
 blox1.display();
 blox2.display();
 blox3.display();
 blox4.display();
 blox5.display();
 blox6.display();
 blox7.display();
 blox8.display();
 blox9.display();
 blox10.display();
blox11.display();
blox12.display();
blox13.display();
blox14.display();
blox15.display();
blox16.display();
b17.display();
b18.display();
b19.display();
b20.display();
sling.display();

imageMode(CENTER);
image(polygonIMG,ball.position.x, ball.position.y, 40, 40);
} 

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}