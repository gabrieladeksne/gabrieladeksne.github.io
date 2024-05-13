let userHasClicked = false;

let riverSound;
let metalSound;



function preload() {
  soundFormats('mp3', 'ogg');
  riverSound = loadSound('assets/river.wav');
  metalSound = loadSound("assets/metal.wav");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
textSize(60)
textAlign(CENTER)

}

function draw() {
let metalColor = color ("blue");
let riverColor = color ("green");
  background('hotpink');
if(userHasClicked == false){
  text( "hi, click here to continue,",
  

  width/2,
  height/2
  )
} else {

  if(riverSound.isPlaying() == false){
  riverSound.play();
  }


  if(metalSound.isPlaying() == false){
    metalSound.play();
  }


let targetVolumeRiver = map(
  mouseX,
  0,
  width,
  0,
  1
)
riverSound.setVolume(targetVolumeRiver)


let targetVolumeMetal = map(
  mouseX,
  0,
  width,
  1,
  0
)
metalSound.setVolume(targetVolumeMetal)


let targetColor = lerpColor(riverColor, metalColor, targetVolumeRiver)
background(targetColor)


let distanceToMouse = dist(mouseX, mouseY, circleX, circleY)
let newVolume =map (distanceToMouse, 0, 150, 1, 0)
newVolume = constrain (newVolume, 0,1);
circle (circleX, circleY,50)

}

  
}
function mouseClicked(){
userHasClicked = true;
}