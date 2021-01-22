const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,log1,bird1;
var pig2,log2,log3,log4;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(820,550,70,70);
    box2 = new Box(980,550,70,70);
    box3 = new Box(820,450,70,70);
    box4 = new Box(980,450,70,70);
    box5 = new Box(900,350,70,70);
    ground = new Ground(600,height,1200,20)
    pig1 = new Oink(900,550);
    pig2 = new Oink(900,450);
    bird1= new Brr(100,200);
    log1= new log(900,500,260,PI/2)
    log2= new log(900,400,260,PI/2);
    log3 = new log(950,300,150,-PI/7);
    log4 = new log(850,300,150,PI/7);
    //log3= new log();
    //log4 = new log();
}
function draw(){
    background(0);
    Engine.update(engine);
    fill(255);
    text(mouseX+','+mouseY,200,200);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig2.display();
    pig1.display();
    bird1.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
}