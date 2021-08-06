const Engine = Matter.Engine;
const World= Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snow, engine , world , object1, snowArray=[];

function preload(){
  snow = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
 
  
  
}

function draw() {
  background(snow);  
  Engine.update(engine);

  if(frameCount%20===0){
    object1 = new Snow(random(50,950),0);
    snowArray.push(object1);
  
  }
  for(var i=0; i<snowArray.length; i++){
    snowArray[i].display();
  }
  
 
 
}