const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var Matter,block1,block2,block3,block4,block5,block6,block7,
block8,block9,block10,block11,block12,block13,block14
,block15,block16,ground,slingShot,polygon;



function setup(){
createCanvas(1500,1000);
engine = Engine.create();
world = engine.world;
Engine.run(engine);

ground=new Ground(200,700,10000,20);
stand1=new Stand(500,300,300,20);
stand2=new Stand(800,150,300,20);
polygon=new Polygon(200,100,50,50);
//ground2=new Ground(200,120,20,10);
slingShot=new SlingShot(polygon.body,{x:200, y:100});
block1= new Block(550,220,20,50);
block2= new Block(550,230,20,50);
block3= new Block(550,240,20,50);
block4= new Block(550,150,20,50);
block5= new Block(400,100,20,50);
block6= new Block(400,130,20,50);
block7= new Block(850,70,20,50);
block8= new Block(850,80,20,50);
block9= new Block(850,90,20,50);
block10=new Block(850,10,20,50);
block11=new Block(700,40,20,50);
block12=new Block(700,70,20,50);
}


function draw(){
background("white");
Engine.update(engine);
ground.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
stand1.display();
stand2.display();
polygon.display();
slingShot.display();

}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

