let points = [];
let linesDrawn = 0;
let prevMidPoint = null;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  frameRate(5);
  setupCanvas();
}

function setupCanvas() {
     
  for (let i = 0; i < 12; i++) {
    let x = 0;
    let y = 0;
    if (i < 4) {
        // augsejas malas 4 punkti
      x = map(i, 0, 3, 0, width);
      y = 0;
    } else if (i >= 4 && i < 6) {
        // kreisas malas 2 punkti
      x = 0;
      y = map(i, 4, 5, height / 3, 2 * height / 3);
    } else if (i >= 6 && i < 8) {
        //labas malas 2 punkti
      x = width;
      y = map(i, 6, 7, height / 3, 2 * height / 3);
    } else {
        //apaksmalas 4 punkti
      x = map(i, 8, 11, 0, width);
      y = height;
    }
    points.push(createVector(x, y));
  }
}

function draw() {
  stroke(0, 0, 255); 
  strokeWeight(0.4); 



  if (linesDrawn < 399) {
    let start, end;
    if (prevMidPoint === null) {
//nejausi punkti pirmajai linijai
      start = floor(random(12));
      end = floor(random(12));
      while (end === start) {
        end = floor(random(12)); 
      }
      line(points[start].x, points[start].y, points[end].x, points[end].y);
      prevMidPoint = createVector(
        (points[start].x + points[end].x) / 2,
        (points[start].y + points[end].y) / 2
      );


    } else {
      start = prevMidPoint;
      end = floor(random(12));
      let endPoint = points[end];
      line(start.x, start.y, endPoint.x, endPoint.y);
      // viduspunkts
      prevMidPoint = createVector(
        (start.x + endPoint.x) / 2,
        (start.y + endPoint.y) / 2
      );


    }
    linesDrawn++;
  } else 
    noLoop(); // zimet lidz 399 linijam
}
