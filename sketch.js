//Create variables here
var dog, happyDog, database, foodS, foodStock,cdogImg, dogImg2;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  dogImg2 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  console.log(database);
  foodStock = database.ref('Food').on("value",readStock);
}


function draw() {  
  background(46,139,87);

  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
  drawSprites();
  
  textSize(20);
  stroke("white");
  fill("blue");
  text("foodstock: "+foodS,250,100);

  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  database.ref('/').update({
    Food: x
  })
}



