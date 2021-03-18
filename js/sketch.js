var moon;
var clouds;
var unicorn;
var invisibleGround;
var starbucks,starbucksGroup;
var obstacle,obstacleGroup;
var invisibleGround;
var Play = 1;
var End = 0;
var gamestate = Play;
score=0;

function preload() {
    moonImage=loadImage("Images/moon.png");

    cloudsImage=loadImage("Images/clouds2.png");

    unicorn_running=loadAnimation("Images/1.png","Images/2.png","Images/3.png","Images/4.png","Images/5.png","Images/6.png","Images/7.png","Images/8.png");
    unicorn_collided=loadImage("Images/2.png");
   

    obstacleImage=loadImage("Images/crystal.png");
}

function setup() {
    createCanvas(1000,500);
    moon=createSprite(850,250,20,20);
    moon.addImage("moon",moonImage);

    clouds=createSprite(0,250,20,20);
    clouds.addImage("clouds",cloudsImage);
    clouds.scale=0.7;
    clouds.velocityX=-5
 
    unicorn=createSprite(200,425,20,20);
    unicorn.addAnimation("running",unicorn_running);
    unicorn.addImage("collided",unicorn_collided)
    unicorn.scale=2;
    

    invisibleGround=createSprite(unicorn.x,530,200,20);
    invisibleGround.visible=false

    starbucksGroup=createGroup();
    obstacleGroup=createGroup();
 }


function draw() {
background(0);
  
if (clouds.x<=150){
clouds.x=600;
}

unicorn.collide(invisibleGround);

unicorn.setCollider("rectangle",0,0,98,80);

if(keyDown("SPACE") && unicorn.y>=200 ) {
  unicorn.velocityY = -20;
}

unicorn.velocityY += 0.85;

camera.position.y=unicorn.y
if(unicorn.isTouching(obstacleGroup)){
  gamestate=End;
 }

if (gamestate === End) {
    unicorn.velocityY=0;
    clouds.velocityX=0;
    obstacleGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    unicorn.changeAnimation("collided",unicorn_collided);
  

}
drawSprites();

Obstacles();
}

  function Obstacles(){
  
    if (frameCount % 200 === 0) {
    obstacle=createSprite(1000,430,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.3;
    obstacle.velocityX=-9   
    obstacle.lifetime=700;
    obstacle.setCollider("rectangle",0,0,250,300);
    obstacleGroup.add(obstacle);
    
  } 
  }
  