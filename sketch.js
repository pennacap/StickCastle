const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var rectangle1, rectangle2, rectangle3, rectangle4;
var circle1, circle2;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  rectangle1 = new Rectangle(360, 175, 50, 100);
  rectangle2 = new Rectangle(40, 175, 50, 100);
  rectangle4 = new Rectangle(200, 175, 50, 100);
  rectangle3 = new Rectangle(200, 325, 380, 200);

}

function draw() {
  background(255,255,255);  
  drawSprites();
  Engine.update(engine);
  
  rectangle1.display();
  
  rectangle2.display();
  rectangle3.display();
  rectangle4.display();
  fill(0);
  triangle(0, 125, 40, 75, 80, 125);
  triangle(160, 125, 200, 75, 240, 125);
  triangle(320, 125, 360, 75, 400, 125);
}