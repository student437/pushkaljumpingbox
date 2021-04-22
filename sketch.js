var canvas;
var music;
var dabba,box1,box2,box3,box4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    var dabba = createSprite(700,500,40,40)
    dabba.shapeColor = "white"

    var box1 = createSprite(700,550,200,20)
    box1.shapeColor = "red"

    var box2 = createSprite(480,550,200,20)
    box2.shapeColor = "pink"
    
    var box3 = createSprite(260,550,200,20)
    box3.shapeColor = "blue"
    var box4 = createSprite(40,550,200,20)
    box4.shapeColor = "yellow"
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    drawSprites();
    //add condition to check if box touching surface and make it box
}

function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = rgb(0,0,255);

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = rgb(255,128,0);

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = rgb(153,0,76);

    block4 = createSprite(740,580,220,30);
    block4.shapeColor = rgb(0,100,0);

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 4;
    ball.velocityY = 9;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = rgb(0,0,255);
        music.play();
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = rgb(255,128,0);
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = rgb(153,0,76);
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = rgb(0,100,0);
    }

    drawSprites();
}
