
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy;
var stone;
var launcher;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);
  mango1=new mango(1100,100,30);
  mango2 = new mango(1100,200,30);
mango3 = new mango(1000,200,30);
mango4 = new mango(1000,100,30);
mango5 = new mango(950,200,30);
mango6 = new mango(1150,100,30);
mango7 = new mango(1200,200,30);
mango8 = new mango(1150,250,30);
mango9 = new mango(1150,150,30);
mango10 = new mango(950,250,30);
treeObj=new tree(1050,580);
groundObject=new ground(width/2,600,width,20);
stone = new Stone(250,400,50);
launcher = new Launcher(stone.body,{x:250,y:400});
}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
   detectcollision(stone,mango1);
   detectcollision(stone,mango2);
   detectcollision(stone,mango3);
   detectcollision(stone,mango4);
   detectcollision(stone,mango5);
   detectcollision(stone,mango6);
   detectcollision(stone,mango7);
   detectcollision(stone,mango8);
   detectcollision(stone,mango9);
   detectcollision(stone,mango10);
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stone.display();
  groundObject.display();
  launcher.display();
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  launcher.fly();
}

function detectcollision(Lstone,Lmango){
   mangoBodyPosition = Lmango.body.position;
   stoneBodyPosition = Lstone.body.position;

   var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
   if(distance<=Lmango.r + Lstone.r){
     Matter.Body.setStatic(Lmango.body,false);
   }
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:235,y:420});
    launcher.attach(stone.body);
  }
}