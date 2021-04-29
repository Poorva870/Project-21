var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,355,30);
    block1.shapeColor = "blue";

    block2 = createSprite(286,580,200,30);
    block2.shapeColor = "orange";
    //create two more blocks i.e. block3 and block4 here
    block3 = createSprite(490,580,185,30);
    block3.shapeColor = "green";

    block4 = createSprite(695,580,200,30);
    block4.shapeColor = "red";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = (0);

    //write code to add velocityX and velocityY
    ball.velocityX = -5;
    ball.velocityY = -5;
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    
    //write code to bounce off ball from the block1 
    if(ball.isTouching( block1)){
        ball.shapeColor = "blue";
        music.play();
        ball.bounceOff(block1);
    }

    if(ball.isTouching(block2)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
        ball.velocityX = 0;
        ball.velocityY = 0;
        //write code to stop music
        music.stop();
        ball.bounceOff(block2);
    }

    //write code to bounce off ball from the block3
    if(ball.isTouching( block3)){
        ball.shapeColor = "green";
        music.play();
        ball.bounceOff(block3);
    }

    //write code to bounce off ball from the block4
    if(ball.isTouching( block4)){
        ball.shapeColor = "red";
        music.play();
        ball.bounceOff(block4);
    }
 
    drawSprites();
}
