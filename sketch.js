var bullet,wall;
var thickness,speed,weight;

function setup(){
  createCanvas(1600,400);
  bullet=createSprite(100,200,50,20);
  bullet.shapeColor="orange";
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="blue";
}
function draw(){
  background("black");
  bullet.velocityX=50;

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor="green";
    }

    if(damage<10){
      wall.shapeColor="red";
    }

   textSize(20);
   fill("cyan"); 
   text("DAMAGE:"+damage,600,350);
    text("PRESS CTRL+R TO SEE DIFFERENT DAMAGES",600,250);
  }else{
    wall.shapeColor="blue";
    bullet.velocityX=50;
  }



















  drawSprites();
}


function hasCollided(b1,w1){
  bulletRightEdge=b1.x+b1.width;
  wallLeftEdge=w1.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}
