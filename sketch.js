var fixedRect,movingRect;

var object1, object2;



function setup() {
  createCanvas(800,800);
  fixedRect=createSprite(200,400,50,80);
  movingRect=createSprite(200,600,80,30);
  fixedRect.shapeColor="Pink";
  movingRect.shapeColor="Pink";

  object1 = createSprite(100, 100, 50,50);
  object2 = createSprite(200, 100, 50,50);
  object1.shapeColor = "pink";
  object2.shapeColor = "pink";
}

function draw() {
  background(0);  

movingRect.x=World.mouseX;

movingRect.y=World.mouseY;


if (isTouching(movingRect,object1))
  {
        object1.shapeColor="purple";
        movingRect.shapeColor="purple";
  }
else
{
        object1.shapeColor="pink";
        movingRect.shapeColor="pink";
}


if (isTouching(movingRect,object2))
{
        object2.shapeColor="purple";
        movingRect.shapeColor="purple";
}
else
{
        object2.shapeColor="pink";
        movingRect.shapeColor="pink";
}


  drawSprites();
}

function isTouching(ob1,ob2)
{
    if(ob1.x-ob2.x<ob1.width/2+ob2.width/2 && ob2.x-ob1.x< ob1.width/2+ob2.width/2  
      && ob1.y-ob2.y<ob1.height/2+ob2.height/2 && ob2.y-ob1.y<ob1.height/2+ob2.height/2   )
    {
    
      return true;
    }
    else {
      return false;
    }
}