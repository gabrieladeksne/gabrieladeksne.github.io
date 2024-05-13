let sceneStarted = false;

function setup() {
  createCanvas(400, 400);
}

function setup() {
  createCanvas(400, 400);
}

let backgroundImage;
let objectImage;
let objectSize = 50; // Define the size of the object
let objectSpeed = 30; // Define the speed of the object
let objectPosition;
let objectCaught = false;
let objectSound; // Variable to store the sound

function preload() {
  // Load the background image
  backgroundImage = loadImage("bedroom.jpg");

  // Load the object image
  objectImage = loadImage("musha.png");

  // Load the sound file
  objectSound = loadSound("skana.mp3");
}

function setup() {
  createCanvas(800, 600);
  objectPosition = createVector(random(width), random(height));

  // Start playing the sound
  objectSound.loop();
  // imageMode(CENTER)
}

function draw() {
  if (sceneStarted == true) {
    // Draw the background image
    image(backgroundImage, 0, 0, width, height);

    // Update object position randomly
    objectPosition.x += random(-objectSpeed, objectSpeed);
    objectPosition.y += random(-objectSpeed, objectSpeed);

    // Constrain object position within canvas boundaries
    objectPosition.x = constrain(objectPosition.x, 0, width - objectSize);
    objectPosition.y = constrain(objectPosition.y, 0, height - objectSize);

    // Draw the object image if it hasn't been caught
    if (!objectCaught) {
      image(
        objectImage,
        objectPosition.x,
        objectPosition.y,
        objectSize,
        objectSize
      );
    }

    // Draw a spotlight effect around the cursor position
    drawSpotlight(mouseX, mouseY, 100);
  } else {
    background("black");
    fill("white");
    text("click to start please", width / 2, height / 2);
  }
}

function drawSpotlight(x, y, radius) {
  // Draw the spotlight effect
  // Similar to the spotlight effect in previous examples
}

function mouseClicked() {
  if (sceneStarted == true) {
    // Check if the mouse click is within the bounds of the object
    let d = dist(
      mouseX,
      mouseY,
      objectPosition.x + objectSize / 2,
      objectPosition.y + objectSize / 2
    );
    if (d < objectSize / 2) {
      // Set objectCaught to true if the object is clicked
      objectCaught = true;

      // Stop the sound
      objectSound.stop();
    }
  }
  else{
    sceneStarted = true;
  }
}

// function draw() {
//   background(220);
// }
