const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var m1, m2, m3, m4;
var m5, m6, m7,m8;
var f1, f2, f3, f4;
var f5,f6,f7;
var spaceship, spaceshipIMG;

function preload() {
  spaceshipIMG = loadImage("spaceship.png");
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    spaceship = createSprite(50,400,30,30);
    spaceship.addImage(spaceshipIMG);
    spaceship.scale = 0.125;
m1 = new Maze(125,125,250,10);
m2 = new Maze(125,675,250,10)
m3 = new Maze(400,400,10,400);
m4 = new Maze(600,125,100,10);
m5 = new Maze(600,675,100,10);
m6 = new Maze(850,550,200,10,);
m7 = new Maze(850,250,200,10);
m8 = new Maze(850,400,200,100);
m9 = new Maze(1050,250,10,150);
m10 = new Maze(1050,550,10,150);
f1 = new Food(200,200,10,10);
f2 = new Food(200,600,10,10);
f3 = new Food(500,300,10,10);
f4 = new Food(500,500,10,10);
f5 = new Food(850,625,10,10);
f6 = new Food(850,175,10,10);
f7 = new Food(1050,390,10,10);
}
function draw(){
background("black");
if();

m1.display();
m2.display();
m3.display();
m4.display();
m5.display();
m6.display();
m7.display();
m8.display();
m9.display();
m10.display();
f1.display();
f2.display();
f3.display();
f4.display();
f5.display();
f6.display();
f7.display();
text(mouseX +"," +mouseY, mouseX,mouseY);
drawSprites();
}