var canvas;
var surface1;
var surface2;
var surface3;
var surface4;
var box;

function preload(){

}


function setup(){
  var canvas = createCanvas(800,600);
 surface1 = createSprite(150,550,100,35);
 surface1.shapeColor = "green";

 surface2 = createSprite(300,550,100,35);
 surface2.shapeColor = "blue";

 surface3 = createSprite(450,550,100,35);
 surface3.shapeColor = "yellow";

 surface4 = createSprite(600,550,100,35);
 surface4.shapeColor = "purple";

 box = createSprite(random(150,600),300,20,20);
 box.shapeColor = "white";
 box.velocityY = 10;
 box.velocityX = 2.5;
 }

 function draw() {
  background("black");
 createEdgeSprites();
 edges=createEdgeSprites();
 box.bounceOff(edges);
 
 if(surface1.isTouching(box)&& box.bounceOff(surface1)){
   box.shapeColor = "green";
 }
  
 if(surface2.isTouching(box)&& box.bounceOff(surface2)){
  box.shapeColor = "blue";
 }
 
 if(surface3.isTouching(box)&& box.bounceOff(surface3)){
  box.shapeColor = "yellow";
 }
 
 if(surface4.isTouching(box)&& box.bounceOff(surface4)){
  box.shapeColor = "purple";
 }
  drawSprites();
  }