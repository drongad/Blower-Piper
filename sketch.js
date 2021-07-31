const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine
let world
var blower, ball, BlowerMouth,button


function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ball = new Ball(502,190,70,70)
  blower = new Blower(450,250,250,22)
  BlowerMouth = new blowerMouth(495,206,160,110)

  button = createButton("Press To Blow")
  button.position(530,290)
  button.class("blowbutton")
  button.mousePressed(blowBall)
}

function draw() {
  background(0);  
  Engine.update(engine);
  drawSprites();
  ball.show()
  blower.show()
  BlowerMouth.show()
}
function blowBall(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05})
}