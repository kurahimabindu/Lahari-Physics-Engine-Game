const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,ballImg
var pin1,pin2,pin3,pin4;
var pin6,pin7, pin8,pin9;
var pin10,pin11,pin12,pin13;
var slingshot;
var bkg,bg
var backgroundImg;
var score=0;

function preload(){
  ballImg=loadImage("sprites/ball.png");
  //pinImg=loadImage("sprites/pin.png")
  //bkgImg=loadImage("sprites/bkg.png")
  getTime();
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
 
  
  
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  pin1=new Pin(500,100,20,20)
  pin2=new Pin(500,150,20,20)
  pin3=new Pin(500,200,20,20)
  pin4=new Pin(500,250,20,20)
  pin5=new Pin(500,300,20,20)
  pin6=new Pin(500,350,20,20)
  pin7=new Pin(500,400,20,20)
  pin8=new Pin(390,170,20,20)
  pin9=new Pin(390,230,20,20)
  pin10=new Pin(390,290,20,20)
  pin11=new Pin(390,350,20,20)
  pin12=new Pin(290,220,20,20)
  pin13=new Pin(290,280,20,20)
  //pin.addImage("sprites/pin.png")

  ground = new Ground(700,200,800,400);
  


  slingshot= new Slingshot(ball,{x:200,y:100});
}

function draw() {
  if(backgroundImg)
 background(backgroundImg);  


  

  pin1.display();
  pin2.display();
  pin3.display();
  pin4.display();
  pin5.display();
  pin6.display();
  pin7.display();
  pin8.display();
  pin9.display();
  pin10.display();
  pin11.display();
  pin12.display();
  pin13.display();



  
  slingshot.display();


  fill("brown")
  ground.display();

  textSize(35)
  fill("purple")  
  text("SCORE:"+score,width-300,50)


  pin1.score();
  pin2.score();
  pin3.score();
  pin4.score();
  pin5.score();
  pin6.score();
  pin7.score();
  pin8.score();
  pin9.score();
  pin10.score();
  pin11.score();
  pin12.score();
  pin13.score();

  imageMode(CENTER) 
  image(ballImg,ball.position.x,ball.position.y,50,50)

  drawSprites();
}


function mouseDragged(){
  Matter.Body.setPosition(ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if (keyCode===32){
   // slingshot.attach(ball)
  }
}
async function getTime(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJson=await response.json()
  var dateTime=responseJson.datetime
  var hour=dateTime.slice(11,13)
 // console.log(hour)

  if(hour>=06 && hour<=19){
      bg="sprites/bkg.png"
  }else {
   bg="sprites/bkg2.png"
  }
backgroundImg=loadImage(bg)
}
