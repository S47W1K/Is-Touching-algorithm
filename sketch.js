var movingRect , fixedRect

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  fixedRect=createSprite(178, 200, 80, 30);
  movingRect.shapeColor=("red")
  fixedRect.shapeColor=("blue")
}



function draw() {
  background(178); 
  movingRect.x= World.mouseX
  movingRect.y= World.mouseY
  drawSprites();

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
   movingRect.shapeColor=("green")
   fixedRect.shapeColor=("yellow")

  }
  else{
    movingRect.shapeColor=("red")
    fixedRect.shapeColor=("blue")
  }

}