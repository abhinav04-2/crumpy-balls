
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
var ball_options();{
isStaic();
restitution=0.5
friction=0.3
}


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



