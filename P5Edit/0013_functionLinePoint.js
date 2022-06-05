// 0013_Line_Point
function setup() {
    // Sets the screen to be 800 pixels wide and 400 pixels high
    createCanvas(800, 400);
}
function draw() {

    background('yellow');
    strokeWeight(3);

    stroke('red');
    line(30, 20, 85, 20);

    stroke('green');
    line(85, 20, 85, 75);

    stroke('blue');
    line(85, 75, 30, 75);

    stroke('black'); // Change the color
    strokeWeight(20);
    point(30, 20);
    point(85, 20);

    stroke('purple'); // Change the color
    strokeWeight(10); // Make the points 10 pixels in size
    point(85, 75);
    point(30, 75);



    stroke('red');
    strokeWeight(5);
    let a = createVector(300, 50);
    point(a);

    stroke('green');
    strokeWeight(10);
    let b = createVector(300, 100);
    point(b);

    stroke('blue');
    strokeWeight(15);
    point(createVector(350, 50));

    stroke('white');
    strokeWeight(20);
    point(createVector(350, 100));
}
