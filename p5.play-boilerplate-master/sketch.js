const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies //namespacing

var engine
var world
var canvas 
var ball ,ground


function setup() {
 canvas =  createCanvas(400,400);
 engine = Engine.create();
 world = engine.world;

var options = {  //json format {:}
restitution: 2,
}


 ball = Bodies.rectangle(200,200,40,40,options)
 World.add(world,ball)
console.log(ball)

var ground_options = {


  isStatic: true,
}

ground = Bodies.rectangle(0,390,800,20,ground_options)
World.add(world, ground)




}


function draw() {
  background(0,0,0); 
Engine.update(engine)

  
rectMode(CENTER)
rect(ground.position.x, ground.position.y, 800,40)
  
ellipseMode(RADIUS)
ellipse(ball.position.x, ball.position.y, 40,40)
}
















