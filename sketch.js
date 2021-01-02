var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starryNight.jpg");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650, 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
   
  star.y =starBody.position.y
  drawSprites();
  keyPressed();

}

function keyPressed() {
	//write code here
	if(fairy.x <510){
	   if (keyCode === RIGHT_ARROW) {
		// Look at the hints in the document and understand how to make the package body fall only on
		fairy.x=fairy.x+10;
	   }
	   if (keyCode === LEFT_ARROW) {
		// Look at the hints in the document and understand how to make the package body fall only on
		fairy.x=fairy.x-10;
	   }
	} 
	if(starBody.position.y>476 && fairy.x === 510 ){
		Body.setStatic(starBody,true)
	}
	if(starBody.position.y===30 && fairy.x === 510){
		Body.setStatic(starBody,false)
		
	}
	
	
}