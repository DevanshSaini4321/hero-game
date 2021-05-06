const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;
                                                                   
  ground = new Ground(600, 600, 1200, 20);
  
  hero = new Hero(400,800,100);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,100);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(900, 80, 70, 100);
  box6 = new Box(900, 80, 70, 100);

  box7 = new Box(800, 20, 70, 100);
  box8 = new Box(800, 40, 20, 80);
  box9 = new Box(600, 50, 70, 30);
  box10 = new Box(700, 130, 120, 10);
  box12 = new Box(700, 130, 120, 90);
  box11 = new Box(700, 130, 120, 40);
  box13 = new Box(700, 130, 150, 10);
  box14 = new Box(700, 130, 110, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
  slingshot.fly();
  
}
