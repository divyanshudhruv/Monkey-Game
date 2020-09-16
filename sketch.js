
var monkey , monkey_running
var banana,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var ground
var invisibleGround
var background1,b45
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  background1=loadImage("JUNGLE.jpg")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  
monkey=createSprite(80,335,20,20);
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1
  monkey.depth=10;
    b45=createSprite(200,200,50,50);
  b45.addImage(background1);
  
  survivalTime=0
  
  invisibleGround=createSprite(200,380,800,10);
  invisibleGround.visible=false;
  
  
  
  ground=createSprite(200,370,800,10)
  ground.velocityX=-5
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
}


function draw() {
  //background color
background(1000);
  
  //scrolling effect
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
    if (b45.x < 80){
      b45.x = b45.width/2;
    }
  
  //velocity for background
  b45.velocityX=-3
  
  //increasing depth
  monkey.depth=b45.depth+1
  
  //jumping monkey
  if(keyDown("space")&& monkey.y>90){
  monkey.velocityY=-10
  }
  //gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  //colliding ground
  monkey.collide(ground)
 
  
  if(bananaGroup.isTouching(monkey)){
  score=score+1
    bananaGroup.destroyEach();
  }
  
 
  
  food();
  obstacle();
  
  drawSprites()
  
  
  
  
   var survivalTime=0
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime,140,50)
}



function food(){
if (frameCount % 80 === 0){
var banana=createSprite(410,200,20,20);
  banana.addImage(bananaImage)
  banana.scale=0.07
  banana.y = Math.round(random(120, 200))
    
  banana.velocityX=-4
banana.lifetime=145;
bananaGroup.add(banana);

}
  
  
  

}

function obstacle(){
if(frameCount%300===0){
var obstacle = createSprite(410,346,20,20);
  obstacle.addImage(obstacleImage)
  obstacle.scale=0.1
  obstacle.velocityX=-4
  obstacle.lifetime=130
  obstacleGroup.add(obstacle);
}



}
