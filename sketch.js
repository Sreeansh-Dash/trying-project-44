var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var bg1, bg2, bg3,bg4;

function preload(){
  
  bg1 = loadImage("js/download(2).jpg");
  bg2 = loadImage("js/download(3).jpg");
  bg3 = loadImage("js/download(4).jpg");
  bg4=loadImage("js/treasur.jpg");
 
 
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
