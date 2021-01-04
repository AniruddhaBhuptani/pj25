
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var log1,log2,log3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ball=new Ball(50, 650, 20, 20);

	Engine.run(engine);
  console.log(mouseX)
}


function draw() {
  rectMode(CENTER);
  background(0);

  

  if(keyCode==32){
	ball.X==600;
	ball.Y==640;
}

 
 
  ball.display();
 
}



