const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var  bg,bgImg;
var girlrunning,girl;
var coins,coinsGroup;
var invisibleGround;

function preload(){

    bgImg = loadImage("images/gamebackground.jpg");
    girlrunning = loadAnimation("images/Run(1).png","images/Run(2).png","images/Run(3).png","images/Run(4).png","images/Run(5).png","images/Run(6).png","images/Run(7).png","images/Run(8).png");
    coinsImg = loadImage("images/coins.png");


}
function setup(){
    var canvas = createCanvas(1350,600);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(645,525,1350,20);
    invisibleGround = createSprite(645,545,1350,20);
    invisibleGround.visible=true;
    girl = createSprite(50,480,50,50);
    girl.addAnimation("girlisrunning",girlrunning);
    girl.scale=0.2;
    girl.collide(invisibleGround);
    
    coinsGroup = createGroup();
}

function draw(){
    background(bgImg);
    
    if(keyDown("space")&& girl.y >=100){
        girl.velocityY = -12;
        }
     
     girl.velocityY = girl.velocityY + 0.8


    Engine.update(engine);
   
    spawnCoins();
   
    ground.display();

    drawSprites();
   
}

function spawnCoins() {
  
    if (frameCount % 100 === 0) {
      var coins = createSprite(1350,450,10,10);
      coins.y = Math.round(random(200,500));
      coins.addImage(coinsImg);
      coins.scale = 0.06;
      coins.velocityX = -3;
      
       //assign lifetime to the variable
      coins.lifetime = 300;
      
      //adjust the depth
      coins.depth = girl.depth;
      girl.depth = girl.depth + 1;
      
     
      coinsGroup.add(coins);
    }
  }






