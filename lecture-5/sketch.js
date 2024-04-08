let img;
let circleX = 100;
let circleY = 100;

let score = 0;

// Load the image and create a p5.Image object.
function preload() {
  img = loadImage('./spot.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER)
  }
  
  function draw() {
    background(0);

    image(img, mouseX, mouseY, 500, 500);

    noFill();
    circle(circleX, circleY, 60);

    let distance;
    distance = dist(mouseX, mouseY, circleX, circleY);
    if(distance < 30) {
        circleX = random (0, width);
        circleY = random (0, height);
        score = score + 1
    }
    stroke("white");
    text (score, 50, 50);

    if (score > 5){
      text ("well done you have wasted some time", 50, 70);
    }
  }