
let x,y,x1,y1;



function setup() {
  createCanvas(windowWidth, windowHeight);




  describe(
    'A black line on a gray canvas running from top-center to bottom-right.'
  );
}
function draw(){
  x = random(0,windowWidth);
  y = random(0,windowHeight);
  x1 = random(0,windowWidth);
  y1 = random(0,windowHeight);

  stroke('blue');
  strokeWeight(0.1);


  line(x, y, x1, y1);

  x = random(windowHeight /2,windowWidth);
  y = random(windowHeight /2,windowHeight);
  x1 = random(windowWidth /2,windowWidth);
  y1 = random(windowHeight /2,windowHeight);


  line(x, y, x1, y1);

  x = random(windowHeight /4,windowWidth/3 * 2);
  y = random(windowHeight /4,windowHeight/3 * 2);
  x1 = random(windowWidth /4,windowWidth/3 * 2);
  y1 = random(windowHeight /4,windowHeight/3 * 2);


  line(x, y, x1, y1);

  stroke('blue');

  x = random(0 ,windowHeight /2);
  y = random(0 ,windowHeight /4 * 3);
  x1 = random(0 ,windowHeight /2);
  y1 = random(0 ,windowHeight /4 * 3);

  line(x, y, x1, y1);

  x = random(windowWidth /2 , windowWidth);
  y = random(0, windowHeight / 2);
  x1 = random(windowWidth /2 , windowWidth);
  y1 = random(0, windowHeight / 2);
  

  


  line(x, y, x1, y1);
  stroke('blue');
}

// <a href="./algoritms1/index.html"> Algoritms </a>

