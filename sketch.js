// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/17WoOqgXsRM

var stars = [];

var speed;

function setup() {
  var parentHeight = document.getElementById('module').clientHeight;
  var canvasWidth = window.innerWidth;
  var canvas = createCanvas(canvasWidth, parentHeight);
  canvas.parent('star-field');
  for (var i = 0; i < 3000; i++) {
    stars[i] = new Star();
  }

  topMargin = "-" + parentHeight + "px";
  document.getElementById('star-field').style.marginTop = topMargin;
}

function draw() {
  // speed = map(mouseX, 0, width, 0, 50);
  speed = 1.5;

  background(0);
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}

function windowResized() {
  var parentHeight = document.getElementById('module').clientHeight;

  resizeCanvas(windowWidth, parentHeight);
}
