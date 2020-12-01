//Create variables here
var dog,dogImg,happydog,happydogImg;
var database;
var foods,foodstock;
var note=0;
var milk,milkImg;


function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png");
  happydogImg=loadImage("images/dogImg1.png")
  milkImg=loadImage("Milk.png");


}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog = createSprite(250,250,30,40);
  dog.addImage(dogImg);
  dog.scale=0.3;


  foodstock=database.ref('foods');
  foodstock.on("value",readStock);
}


function draw() { 
background(46,139,87)
 
 if(keyWentDown(UP_ARROW)){
   writeStock(foods);
   dog.addImage(happydogImg);
 }
dog.display();
 drawSprites();


textSize(20);
fill (250);
stroke (30);
text("Note :Press up arrow to feed ginger,milk",10,30)

 

}
function readStock(data){
  foods=data.val();


}
function writeStock(x){
  database.ref("/").update({
    foods:x
  });
}



