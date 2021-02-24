
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  Engine.run(engine);

	//Create the Bodies Here.

roof = new Roof(320,200,450,50);
//World.add(world, roof);

bob1 = new Bob(400,500,70);
World.add(world,bob1);
bob2 = new Bob(470,500,70);
World.add(world,bob2);
bob3 = new Bob(540,500,70);
World.add(world,bob3);
bob4 = new Bob(610,500,70);
World.add(world,bob4);
bob5 = new Bob(680,500,70);
World.add(world,bob5);

rope1 = new Rope(bob1.body,roof.body,75,0);
World.add(world, rope1);

rope2 = new Rope(bob2.body,roof.body,145,0);
World.add(world, rope2);

rope3 = new Rope(bob3.body,roof.body,215,0);
World.add(world, rope3);

rope4 = new Rope(bob4.body,roof.body,285,0);
World.add(world, rope4);

rope5 = new Rope(bob5.body,roof.body,355,0);
World.add(world, rope5);




	
  
}


function draw() {
 // rectMode(CENTER);
 createCanvas(800, 700);
  background("white");
  //Engine.Update(engine);

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  

  drawSprites();

  if(keyDown(UP_ARROW)){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-730,y:0});
  }

  //keyPressed();
  
}

//function keyPressed(){
//if(keyDown(UP_ARROW)){
 // Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-730,y:0});
////}
