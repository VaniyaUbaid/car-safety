var wall,car,speed,weight

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,400)
  wall.shapeColor="white";
  speed=random(55,90);
  weight=random (400,1500)
  car.velocityX=speed;
  
}

function draw() {
  background(0);
  if(wall.x-car.x<wall.width/2+car.width/2){
    //car.velocityX=0
    var d=0.5*weight*speed*speed/22509
    if(d<180){car.shapeColor="blue"}
    else {car.shapeColor="yellow"
  }  
  }
  drawSprites();

}