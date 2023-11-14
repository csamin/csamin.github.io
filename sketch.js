let dec; //variable for the text
let colbttn; 
let clearbttn;
let size;
let space;

function preload() {
  dec = loadStrings("chowdhurysy.pdf", decLoaded); //use loadStrings to turn the text into an array of lines, when the poem is loaded, call the function poemLoaded
}
function decLoaded() {
  console.log(dec); //see in the console what the array looks like
}
function setup() {
  createCanvas(800, 3400);
  background(255);
  //colbttn = createButton("Highlighter color");
  //colbttn.mousePressed(changeCol);
  clearbttn = createButton("Clear");
  clearbttn.mousePressed(clearCanvas);
  size = 12;
  space = 0;
}

function mouseDragged() { //highlighter
  noStroke();
  fill(255, 255, 0)
  circle(mouseX, mouseY, 15);
}

function changeCol() {
  noStroke();
  fill(random(255), random(255), random(255));
}

function draw() {
  //loop through the array of lines and display the lines vertically on the canvas
  for (let i = 0; i < dec.length; i++) {
    fill(0);
    textSize(size)
    //fill(random(255 * 3), random(255 * 3), random(255 * 3)); //random colors
    //fill(frameCount % 255 - i * 4, i * 4, 250);
    text(dec[i], 20, ((20 + 20 * i) + space));
  }
}

function clearCanvas() {
  background(255);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    background(255);
    size = size - 6;
    space = space - 8;
  } else if (keyCode === RIGHT_ARROW) {
    background(255);
    size = size + 6;
    space = space + 8;
  }
}