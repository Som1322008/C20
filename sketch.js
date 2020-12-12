function setup() {
  createCanvas(800,400);
  movingrect= createSprite(400,200,80,150);
  movingrect.shapeColor="red";
 fixedrect= createSprite(200,300,130,80);
 fixedrect.shapeColor="red";
}

function draw() {
  background("cyan"); 
  movingrect.x = World.mouseX; 
  movingrect.y = World.mouseY; 

if(movingrect.x-fixedrect.x < movingrect.width/2+fixedrect.width/2
  &&   fixedrect.x -movingrect.x< movingrect.width/2+fixedrect.width/2
  && movingrect.y-fixedrect.y < movingrect.height/2+fixedrect.height/2
  &&   fixedrect.y -movingrect.y< movingrect.height/2+fixedrect.height/2){
  movingrect.shapeColor="green"
  fixedrect.shapeColor="green"
}else{
  movingrect.shapeColor="red";
fixedrect.shapeColor="red";
  
}



  
  drawSprites();
}