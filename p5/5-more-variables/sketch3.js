function setup () {
    createCanvas(800,300);
}

function draw() {
    background(1,75,100);

    var x = mouseX;
    var y = mouseY;
    var size = 50;

    fill(237,34,93);
    noStroke();
    ellipse(x,y,size,size);
}