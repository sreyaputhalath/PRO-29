const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var stones =[];


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  ground = new Base(1380,height-200,150,150);
  ground1 = new Base(140,height-200,150,150);
  ground2 = new Base(width/2,height-200,150,150)
   bridge = new Bridge(15,{x:1580,y:550},);

  Matter.Composite.add(bridge.body, ground);
  link = new Link(bridge,ground2);
  link1 = new Link(bridge,ground1);

for(var i =0; i<=8; i++){
  var x = random(width/2 -200, width/2 + 300);
  var y = random(-10,140);
  var w =90;
  var h =90;
  var stone = new Stone(x,y,w,h);
  stones.push(stone);
}
for (var i = 0; i <=8; i++) {
    stones[i].show();
  }
  

}

function draw() {
  background(51);
  Engine.update(engine);
  ground.show();
  ground1.show();
 bridge.show();

}


