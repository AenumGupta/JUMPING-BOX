var canvas,edges;
var music;
var rect1,rect2,rect3,rect4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
rect1=createSprite(150,580,100,20);
rect1.shapeColor="red";
rect2=createSprite(300,580,100,20);
rect2.shapeColor="blue";
rect3=createSprite(450,580,100,20);
rect3.shapeColor="green";
rect4=createSprite(600,580,100,20);
rect4.shapeColor="yellow";
    //create box sprite and give velocity
box=createSprite(random(20,750),20,50,50);
box.shapeColor="aqua";
box.velocityY=5;


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
music.play();

    bounceOff(rect1,box);
    bounceOff(rect2,box);
    bounceOff(rect3,box);
    bounceOff(rect4,box);


    //add condition to check if box touching surface and make it box
    if(rect1.isTouching(box) && box.bounceOff(rect1)){
   box.shapeColor="red";
  }
    
  if(rect2.isTouching(box) && box.bounceOff(rect2)){
    box.shapeColor="blue";
   }
    
   if(rect3.isTouching(box) && box.bounceOff(rect3)){
    box.shapeColor="green";
   }
    
   if(rect4.isTouching(box) && box.bounceOff(rect4)){
    box.shapeColor="yellow";
   }
    drawSprites();
    text(mouseX+"x"+mouseY+"y",mouseX,mouseY);
}

function isTouching(rect1,box){
    if((rect1.x-box.x<=rect1.width/2+box.width/2)&&
    (box.x-rect1.x<=rect1.width/2+box.width/2)&&
    (rect1.y-box.y<=rect1.height/2+box.height/2)&&
    (box.y-rect1.y<=rect1.height/2+box.height/2))
    {
      
      return true;
    }
    else {
      
      return false;
    }
  }

  function isTouching(rect2,box){
    if((rect2.x-box.x<=rect2.width/2+box.width/2)&&
    (box.x-rect2.x<=rect2.width/2+box.width/2)&&
    (rect2.y-box.y<=rect2.height/2+box.height/2)&&
    (box.y-rect2.y<=rect2.height/2+box.height/2))
    {
      
      return true;
    }
    else {
      
      return false;
    }
  }

  function isTouching(rect3,box){
    if((rect3.x-box.x<=rect3.width/2+box.width/2)&&
    (box.x-rect3.x<=rect3.width/2+box.width/2)&&
    (rect3.y-box.y<=rect3.height/2+box.height/2)&&
    (box.y-rect3.y<=rect3.height/2+box.height/2))
    {
      
      return true;
    }
    else {
      
      return false;
    }
  }

  function isTouching(rect4,box){
    if((rect4.x-box.x<=rect4.width/2+box.width/2)&&
    (box.x-rect4.x<=rect4.width/2+box.width/2)&&
    (rect4.y-box.y<=rect4.height/2+box.height/2)&&
    (box.y-rect4.y<=rect4.height/2+box.height/2))
    {
      
      return true;
    }
    else {
      
      return false;
    }
  }

  function bounceOff(rect2,box){
    if((rect2.x-box.x<=rect2.width/2+box.width/2)&&
    (box.x-rect2.x<=rect2.width/2+box.width/2)){
      rect2.velocityX=rect2.velocityX*(-1);
      box.velocityX=box.velocityX*(-1);
    }
    if((rect2.y-box.y<=rect2.height/2+box.height/2)&&
    (box.y-rect2.y<=rect2.height/2+box.height/2))
    {
      rect2.velocityY=rect2.velocityY*(-1);
      box.velocityY=box.velocityY*(-1);
    }
  
  }

  function bounceOff(rect3,box){
    if((rect3.x-box.x<=rect3.width/2+box.width/2)&&
    (box.x-rect3.x<=rect3.width/2+box.width/2)){
      rect3.velocityX=rect3.velocityX*(-1);
      box.velocityX=box.velocityX*(-1);
    }
    if((rect3.y-box.y<=rect3.height/2+box.height/2)&&
    (box.y-rect3.y<=rect3.height/2+box.height/2))
    {
      rect3.velocityY=rect3.velocityY*(-1);
      box.velocityY=box.velocityY*(-1);
    }
  
  }

  function bounceOff(rect4,box){
    if((rect4.x-box.x<=rect4.width/2+box.width/2)&&
    (box.x-rect4.x<=rect4.width/2+box.width/2)){
      rect4.velocityX=rect4.velocityX*(-1);
      box.velocityX=box.velocityX*(-1);
    }
    if((rect4.y-box.y<=rect4.height/2+box.height/2)&&
    (box.y-rect4.y<=rect4.height/2+box.height/2))
    {
      rect4.velocityY=rect4.velocityY*(-1);
      box.velocityY=box.velocityY*(-1);
    }
  
  }

  function bounceOff(rect1,box){
    if((rect1.x-box.x<=rect1.width/2+box.width/2)&&
    (box.x-rect1.x<=rect1.width/2+box.width/2)){
      rect1.velocityX=rect1.velocityX*(-1);
      box.velocityX=box.velocityX*(-1);
    }
    if((rect1.y-box.y<=rect1.height/2+box.height/2)&&
    (box.y-rect1.y<=rect1.height/2+box.height/2))
    {
      rect1.velocityY=rect1.velocityY*(-1);
      box.velocityY=box.velocityY*(-1);
    }
  
  }
  