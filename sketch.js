const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;

var world,engine,maxDrops=100
var drops = [];
var walkingman;

function setup(){
    createCanvas(400,400);
   engine = Engine.create();
   world = engine.world;
   if(frameCount%60==0){
       for(var i=0;i<maxDrops;i++){
           drops.push(new Drops(random(0,400),random(0,400)));
       }
   }
   walkingman = new Umbrella(200,500)
}

function draw(){
  background(0);
  Engine.update(engine);
  for(var i=0;i<maxDrops;i++){
      drops[i].display();
      drops[i].update();
  }
walkingman.display();
}   

