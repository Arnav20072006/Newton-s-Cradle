const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pendulum;
var string;

function setup(){
  var canvas = createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  
  pendulum = new Pendulum(500,500,"red");
  string   = new Sling(pendulum.body,{x:200,y:200})
}
function draw(){
  background(0);
  Engine.update(engine);

  pendulum.display();
  string.display();
}
function mouseDragged(){
  Matter.Body.setPosition(pendulum.body,{x:mouseX,y:mouseY});
}