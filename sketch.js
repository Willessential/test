// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Video: https://youtu.be/FUI7HEEz9B0

let angle = 0;
let kitten;
let train;

function preload() {

  train = loadModel('line01b.obj');
}

function setup() {
  createCanvas(400, 300, WEBGL);
}

function draw() {
  background(0);
  ambientLight(255, 0, 255);
  directionalLight(255, 255, 255, 0, 0, 1);
  this.rotateY((this.mouseX - this.width / 2) / (this.width / 2));
this.rotateX((this.mouseY - this.height / 2) / (this.width / 2));
  //rotateX(angle);
  //rotateY(angle * 1.3);
  //rotateZ(angle * 0.7);
  //box(100);
  translate(0, 0, 0);
  
  model(train);
  angle += 0.03;
}