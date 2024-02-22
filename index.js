let backgroundColor = '#564138';
let ballColor = ['#2E86AB', '#F6F5AE', '#F5F749', '#F24236'];
let alpha = 0.9;
let xPos;
let yPos;
let randomColor = '#2E86AB';
let recording = true;
let radius = 10;
let offset = 0;
let offsetRandomY = 0;
let offsetRandomX = 0;

function setup() {
  createCanvas(innerWidth, innerHeight);
  xPos = random(width / 2);
  yPos = random(innerHeight * 0.65);
  background(backgroundColor);

  //
  // for (let i = 0; i <= 5; i++) {
  //   createCirlce(xPos * i, yPos, 70, alpha);
  // }
}

function draw() {
  if (frameCount === 1) {
    // capturer.start();
  }

  for (let i = 0; i <= width; i += 150) {
    createCirlce(
      xPos + i * cos(offsetRandomX),
      yPos + +offset * cos(offsetRandomY),
      radius,
      alpha
    );
    offsetRandomX = random(-50, 50);

    alpha -= 0.0025;
    offset += 1;
  }

  // createCirlce(xPos, yPos, radius, alpha);

  // yPos += 10;
  console.log(offsetRandomX);
  capturer.capture(canvas);
}

function createCirlce(x, y, radius, a) {
  noStroke();
  c1 = color(randomColor);
  c1._array[3] = a;
  fill(c1);
  ellipse(x, y, radius);

  if (y >= innerHeight || alpha <= 0) {
    xPos = random(width / 2);
    yPos = random(innerHeight * 0.65);
    offset = 0;
    offsetRandomX = random(-10, 100);
    offsetRandomY = random(-10, 10);
    randomColor = random(ballColor);
    alpha = 0.8;
  }
}

function mousePressed() {
  capturer.stop();
  capturer.save();
}
