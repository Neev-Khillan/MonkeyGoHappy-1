
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
var survivalTime=0;
var PLAY=1;
var END=0;
var gameState=PLAY;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
    createCanvas(400,400);

 
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  ground=createSprite(400,350,900,20);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  FoodGroup=new Group();
  obstacleGroup=new Group();
  score=0;
  survivalTIme=0;

  
}


function draw() {
  background(255);
  if(gameState===PLAY){
  food();
    obstacle();
  monkey.collide(ground);
if(ground.x<0){
     ground.x=ground.width/2;}
  if(keyDown("space")&& monkey.y>=298.95){
     monkey.velocityY=-15;
     
   }
   monkey.velocityY=monkey.velocityY+0.8;
  console.log(monkey.y);
   
   if(monkey.isTouching(FoodGroup)){
     score=score+2;}
  }
  if(gameState===END){
    monkey.velocity=0;
    ground.velocityX = 0;
    
  }
 drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50);
}
function food(){
  if(frameCount%80===0){
    var banana = createSprite(700,Math.round(random(110,230)),20,20);
    banana.addImage(bananaImage);
    banana.velocityX=-10-score/2;
    banana.scale=0.1;
    FoodGroup.add(banana);
  }
}
function obstacle(){
  if(frameCount%180===0){
    var obstacle=createSprite(700,315,20,20)
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.18;
    obstacle.velocityX=-10-score/2;
    obstacleGroup.add(obstacle);
  }
  if(monkey.isTouching(obstacleGroup))
      {gameState=END}
}








