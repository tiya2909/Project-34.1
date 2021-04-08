var dog, happyDog,dogImg;
var foodS, foodstock;
var database;

function preload()
{
	dogImg = loadImage("images/Dog.png")
  dogHappy = loadImage("images/HappyDog.png")
}

function setup() {
	createCanvas(500, 500);

  database = firebase.database()

  dog = createSprite(200,200,20,20);
  dog.addImage(dogImg);

  foodstock = database.ref('Food')
  foodstock.on("value",readstock)
}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){

    writeStock(foodS);
    dog.addImage(dogHappy);

  }
 
  

  text("Press UP-arrow to feed the dog",250,450)
  

  drawSprites();

  text("foodStock"+foodstock,150,150);
  textSize(3);
  fill(0);
  

}

function readstock(data){

foodS = data.val();

}

function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
  x=x-1;
  }
  database.ref('/').update({
    Food : x
  })
}


