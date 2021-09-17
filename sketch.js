var sea,ship;
var seaImg,shipImg;

function preload(){
  manImg1 = loadAnimation("man.png");
  manImg1 = loadAnimation("man-1.png","man-1.png",
                            "man-2.png","man-1.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

   //Moving background
  man=createSprite(400,200);
  man.addImage(manImg);
  man.velocityX = -5;
  man.scale=0.3;

  
  man = createSprite(130,200,30,30);
  man.addAnimation("movingMan",manImg1);
  man.scale =0.25;
  
}

function draw() {
  background(0);
  man.velocityX = -3;

  
  //code to reset the background
  if(rod.x < 0){
   rod.x = rod.width/8;
  
    
  drawSprites();
}
}