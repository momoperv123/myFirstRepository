let xBall = Math.floor(Math.random() * 300) + 50;
let yBall = 50;
let xSpeed = (2, 7);
let ySpeed = (-7, -2);
let score = 0;
let xPos = 200;
let gameOverSound;
let pongHitSound;
let r = 255;
let g = 255;
let b = 255;

function preload() {
  gameOverSound = loadSound("sounds/game_over.mp3");
  pongHitSound = loadSound("sounds/pong_hit.mp3");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  if (keyIsDown(RIGHT_ARROW)) {
    xPos += 5;
  }
  if (keyIsDown(LEFT_ARROW)) {;
    xPos -= 5;
  }

  fill(r, g, b);
  rect(xPos, 375, 90, 15);

  move();
  display();
  bounce();
  resetBall();
  paddle();

  fill(r, g, b);
  textSize(24);
  text("Score: " + score, 10, 25);
}


function move() {
  xBall += xSpeed + xSpeed;
  yBall += ySpeed + ySpeed;
}


function bounce() {
  if (xBall < 10 || xBall > 400 - 10) {
    xSpeed *= -1;
  }
  if (yBall < 10 || yBall > 400 - 10) {
    ySpeed *= -1;
  }
}


function resetBall() {
  if (yBall >= 400 || yBall > 400 - 10) {
        ySpeed = 4;
        fill(r, g, b);
        textSize(25);
        text("Game over", 140, 150);
        if (score <= 5) {
          text("Your final score was terrible!", 45, 200);
        }  
        if (score <= 10 && score > 5) {
          text("Your final score was okay.", 42, 200);
        }  
        if (score <= 15 && score > 10) {
          text("Your final score was pretty good.", 48, 200);
        }   
        if (score >= 16) {
          text("Your final score was awesome!", 44, 200);
        } 
        rect(140, 230, 131, 25);
        fill(0, 0, 0);
        text("Play again?", 140, 250);
        gameOverSound.play(); 
        noLoop();   
    }
}

function mouseClicked() {
  if (mouseX > 140 && mouseX < 271 && mouseY > 230 && mouseY < 255) {
    xBall = Math.floor(Math.random() * 300) + 50;
    yBall = 50;
    xSpeed = (2, 7);
    ySpeed = (-7, -2);
    score = 0;
    xPos = 200;
    r = 255;
    g = 255;
    b = 255;
    loop();
    background(0);
    draw();
  }
}

function display() {
  fill(r, g, b);
  ellipse(xBall, yBall, 20, 20);
}

function paddle() {
  if ((xBall > xPos && xBall < xPos + 90) && (yBall + 10 >= 375)) {
    xSpeed *= -1;
    ySpeed *= -1;
    score++;
    pongHitSound.play();
    r = random(15, 255);
    g = random(15, 255);
    b = random(15, 255);
    fill(r, g, b);
  }
}