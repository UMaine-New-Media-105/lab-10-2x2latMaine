//1. Draw lanes in the background

function setup() {
  createCanvas(400, 400);

  carSpeed = 3;
  carColors = ["red", "gray", "yellow", "blue"];

  frogJump = 50;
  frogStartX = 200;
  frogStartY = 375;

  logSpeed = 2;

  bottomCars = [];
  topCars = [];
  botLogs = [];
  topLogs = [];

  for (let botCarsDrawn = 0; botCarsDrawn < 2; botCarsDrawn++) {
    botX = random(-200, width + 200);
    botY = 295;
    botLen = 2;
    botColor = random(carColors);

    bottomCars.push(new Car(botX, botY, botLen, botColor));
  }
  for (let topCarsDrawn = 0; topCarsDrawn < 3; topCarsDrawn++) {
    topX = random(-200, width + 200);
    topY = 225;
    topLen = 1;
    topColor = random(carColors);

    topCars.push(new Car(topX, topY, topLen, topColor));
  }
  
  for (let botLogsDrawn = 0; botLogsDrawn < 3; botLogsDrawn++){
    botX = random(-200, width + 200);
    botY = 125;
    botLen = random(2, 4);
    
    botLogs.push(new Log(botX, botY, botLen));
  }
  for (let topLogsDrawn = 0; topLogsDrawn < 3; topLogsDrawn++){
    topX = random(-200, width + 200);
    topY = 60;
    topLen = random(2, 4);
    
    topLogs.push(new Log(topX, topY, topLen));
  }
  
  myFrog = new Frog(frogStartX, frogStartY);
}

function draw() {
  background(0);
  drawBackground();

  
  for (let botCarsShown = 0; botCarsShown < bottomCars.length; botCarsShown++) {
    bottomCars[botCarsShown].update();
    bottomCars[botCarsShown].move();
    bottomCars[botCarsShown].show();
  }
  for (let topCarsShown = 0; topCarsShown < topCars.length; topCarsShown++) {
    topCars[topCarsShown].update();
    topCars[topCarsShown].move();
    topCars[topCarsShown].show();
  }
  for (let botLogsShown = 0; botLogsShown < botLogs.length; botLogsShown++){
    botLogs[botLogsShown].update();
    botLogs[botLogsShown].move();
    botLogs[botLogsShown].show();
  }
  for (let topLogsShown = 0; topLogsShown < topLogs.length; topLogsShown++){
    topLogs[topLogsShown].update();
    topLogs[topLogsShown].move();
    topLogs[topLogsShown].show();
  }
  
  myFrog.show();
}

function drawBackground() {
  push();
  fill("dodgerblue");
  rect(0, 0, 400, 200);
  stroke("yellow");
  strokeWeight(5);
  line(0, 290, 400, 290);
  line(0, 280, 400, 280);
  noStroke();
  fill("slategray");
  rect(0, 175, 400, 50);
  rect(0, 350, 400, 50);
  rect(0, 0, 400, 50);
  pop();
}

class Car {
  constructor(x, y, length, hue) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.hue = hue;
    this.addX = carSpeed;
  }
  update() {
    let isTooFarRight = this.x > width;

    if (isTooFarRight) {
      this.x = -200;
    }
  }
  move() {
    this.x += this.addX;
  }
  show() {
    noStroke();
    fill(this.hue);
    rect(this.x, this.y, 50 * this.length, 50);
    fill("dodgerBlue");
    rect(this.x + 30 * (this.length + this.length / 15), this.y + 5, 20, 40);
  }
}

class Log {
  constructor(x, y, length) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.addX = logSpeed;
  }
  update() {
    if (this.x > width + 200) {
      this.x = -200;
    }
  }
  move() {
    this.x += this.addX;
  }
  show() {
    noStroke();
    fill("saddlebrown");
    rect(this.x, this.y, 50 * this.length, 50);
  }
}

class Frog {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  update(x, y) {
    this.x += x;
    this.y += y;
  }
  show() {
    noStroke();
    fill("greenyellow");
    ellipse(this.x, this.y, 50);
  }
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
      myFrog.update(0, -frogJump)
    }
    if (keyCode === DOWN_ARROW) {
      myFrog.update(0, frogJump);
    }
    if (keyCode === LEFT_ARROW) {
      myFrog.update(-frogJump, 0)
    }
    if (keyCode === RIGHT_ARROW) {
      myFrog.update(frogJump, 0)
    }
}
