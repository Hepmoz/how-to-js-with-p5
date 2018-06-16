function setup() {
    createCanvas(800,300);
    rectMode(CENTER);
}

function draw() {
    background(1,186,240);

    var x = width/2;
    var y = height/2;
    var size = 200;

    fill(237,34,93);
    noStroke();
    ellipse(x,y,size,size);

    if(mouseIsPressed === true) {
        fill(255);
        rect(x,y,size*0.75,size*0.15);
    }
}