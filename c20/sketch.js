var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor= "green"

  movingRect = createSprite(400,200, 80 , 50);
  movingRect.shapeColor = "green"
  gO1 = createSprite(100,100,50,50);
  gO1.shapeColor = "green"
  gO2 = createSprite(200,100,50,50);
  gO2.shapeColor = "green"
  gO3 = createSprite(300,100,50,50);
  gO3.shapeColor = "green"
  gO4 = createSprite(400,100,50,50);
  gO4.shapeColor = "green"
}

function draw() {
  background(255,255,255);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(isTouching(movingRect,gO4)){
    gO4.shapeColor = "red";
    movingRect.shapeColor = "red";

  }
  else{
    gO4.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  drawSprites();
}

