const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var polygon;

var block1,block2,block3,block4,block5,block6,block7;

var block8,block9,block10,block11,block12;

var block13,block14,block15;

var block16;

var ground;

var score=0;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(400,300,250,10)

  block1 = new Block(330,275,30,40);
  block2 = new Block(360,275,30,40);
  block3 = new Block(390,275,30,40);
  block4 = new Block(420,275,30,40);
  block5 = new Block(450,275,30,40);
  block6 = new Block(480,275,30,40);
  block7 = new Block(300,275,30,40);

  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);

  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);

  block16 = new Block(390,155,30,40);

  polygon= new Polygon(75,100,50,50);

  slingshot = new SlingShot(polygon.body,{x:75, y:100});



}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  
  
  text("SCORE : "+ score,600,40);
  
  
  
  
  drawSprites();
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  block16.display();
  block16.score();
  ground.display();
  slingshot.display();
  polygon.display();


}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
     Matter.Body.setPosition(polygon.body,{x:75,y:100})
     slingshot.attach(polygon.body);
  }

}
