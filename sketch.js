var monkey,background1,ground;

var score;

var bananaG,obG; 

var backgroundI,bananaI,stoneI,monkeyI;

function preload(){
  
 backgroundI=loadImage("jungle.jpg"); 
  
  monkeyI = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaI = loadImage("banana.png");
  stoneI = loadImage("stone.png");
}

function setup() {
   createCanvas(400, 400);
  background1= createSprite(200,200,400,400);
  background1.addImage(backgroundI);
  background1.velocityX=-3;
  
  monkey=createSprite(100,340,20,50);
monkey.addAnimation("monkey",monkeyI);
monkey.scale=0.1;
  
  score=0;
 
  
  ground=createSprite(200,390,400,40);
  ground.visible=false;
  
   bananaG=createGroup();
 obG=createGroup();
 
 }


function draw() {
  background(220);
  
  
  if (background1.x < 0){
      background1.x = background1.width/2;
    }
 
  
  if(World.frameCount%80===0){
    var banana=createSprite(400,random(120,200));
    banana.addAnimation("Banana",bananaI);
    banana.scale=0.07;
    banana.velocityX=-12;
    banana.lifetime=55;
    bananaG.add(banana);
  }
  
  if(World.frameCount%300===0){
    var stone=createSprite(400,350,10,10);
    stone.addAnimation("stone",stoneI);
    stone.scale=0.15;
    stone.velocityX=-8;
    
    
    stone.lifetime=55;
    stone.collide(ground);
    obG.add(stone);
  }
  
  if (bananaG.isTouching(monkey)){
    score=score+2;
    bananaG.destroyEach();
  }
  
  switch (score){
      
    case 10 :monkey.scale=0.12;
           break;
    case 20 :monkey.scale=0.14;
           break;
    case 30 :monkey.scale=0.16;
           break;
    case 40 :monkey.scale=0.18;
           break;
    case 50 :monkey.scale=0.20;
    default:break;
  }
  
  if(obG.isTouching(monkey)){
    monkey.scale=0.1;
    obG.destroyEach();
  }
  
  
  
  if(keyDown("space")&&monkey.y>=309){
    monkey.velocityY=-15;
  }
  
 
  
 
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
 
  drawSprites();
  
   stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,300,50);
  
  
}
