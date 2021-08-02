const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;

var btn1;
var btn2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  btn1 = createImg('right.png');
  btn1.position(220,30);
  btn1.size(50,50);
  btn1.mouseClicked(hForce);
  
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  var ball_options = {
    restitution: 0.95
  }

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);

var ball1_options = {
  restitution: 0.95
}

ball1 = Bodies.circle(200,100,40,ball1_options);
World.add(world,ball1);

rectMode(CENTER);
ellipseMode(RADIUS);

var ball2_options = {
  restitution: 0.95
}

ball2 = Bodies.circle(200,100,40,ball2_options);
World.add(world,ball2);

rectMode(CENTER);
ellipseMode(RADIUS);
var ball3_options = {
  restitution: 0.95
}

ball3 = Bodies.circle(200,100,40,ball3_options);
World.add(world,ball3);

rectMode(CENTER);
ellipseMode(RADIUS);
var ball4_options = {
  restitution: 0.95
}

ball4 = Bodies.circle(200,100,40,ball4_options);
World.add(world,ball4);

rectMode(CENTER);
ellipseMode(RADIUS);
}
function draw() 
{
  background(51);

  ellipse(ball.position.x,ball.position.y,20);
ellipse(ball1.position.x,ball1.position.y,40);
ellipse(ball2.position.x,ball2.position.y,30);
ellipse(ball3.position.x,ball3.position.y,50);
ellipse(ball4.position.x,ball4.position.y,10);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}


function hForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
