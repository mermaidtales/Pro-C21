var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 differemt surfaces
    
    surface1 = createSprite (60, 580, 200, 40);
    surface1.shapeColor = "blue";
    
    surface2 = createSprite (270, 580, 200, 40);
    surface2.shapeColor = "orange";

    surface3 = createSprite (480, 580, 200, 40);
    surface3.shapeColor = "red";

    surface4 = createSprite (690, 580, 200, 40);
    surface4.shapeColor = "green";

    //create box sprite and give velocity
    
    box = createSprite (random(20, 750), 240, 50, 50);
    box.shapeColor = "white";
}

function draw() {
    background(rgb(0, 0, 0));
    
    //create edgeSprite
    
    createEdgeSprites ();

    //box.bounceOff (edge);
    box.bounceOff (surface1);
    box.bounceOff (surface2);
    box.bounceOff (surface3);
    box.bounceOff (surface4);

    box.velocityX = 2;
    box.velocityY = 2;

    //add condition to check if box touching surface and make it box
    
    if (surface1.isTouching (box)) {
        box.shpaeColor = "blue";
    }

    if (surface2.isTouching (box)) {
        box.shpaeColor = "orange";
    }

    if (surface3.isTouching (box)) {
        box.shpaeColor = "red";
    }

    if (surface4.isTouching (box)) {
        box.shpaeColor = "green";
    }
    drawSprites ();
}
