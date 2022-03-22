//classes
let x;
let y;

let xspeed;
let yspeed;

//variable for colours
let r,g,b;

function setup() {
    createCanvas(800,600);
    //defining position and speed
    x = random(width);
    y = random(height);
    xspeed = 10;
    yspeed = 10;

    //picking random colour
    pickColour();
}

function pickColour() {
    //randome colour
    r = random(256);
    g = random(256);
    b = random(256);
}

function draw () {
    background(140,213,255);
    noStroke();
    fill(r,g,b);
    ellipse (x, y, 120, 120);
    
    
    x = x + xspeed;
    y = y + yspeed;

    //determine if ball hits edge to bounce back and to change colour
    if(x >= width || x <= 0) {
        xspeed = xspeed * -1;
        pickColour();
    }
    if(y >= height || y <= 0) {
        yspeed = yspeed * -1;
        pickColour();
    }
}