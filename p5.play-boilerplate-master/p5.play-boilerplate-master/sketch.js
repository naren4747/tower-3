const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world
var ground
function setup() {
  createCanvas(1200,400);
  engine=Engine.create()
  world=engine.world
  ground=new Ground(600,370,1200,10)
  box1= new Box(750,330)
  box2=new Box(900,330)
  
  pig1=new Pig(825,330)
  log1=new Log(825,310,200,PI/2)

  box3=new Box(750,280)
  box4=new Box(900,280)
  pig2=new Pig(825,280)
  log2=new Log(825,240,200,PI/2)
  
  box5=new Box(825,220)
  log3=new Log(780,200,130,PI/4)
  log4=new Log(865,200,130,PI/-4)

  bird=new Bird(100,100)
}

function draw() {
  background(0);  
  Engine.update(engine)
  
  box1.display()
  box2.display()
  ground.display()
  pig1.display()
  log1.display()
  box3.display()
  box4.display()
  pig2.display()
  log2.display()
  box5.display()
  log3.display()
  log4.display()
  bird.display()
}