function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if(mouseX < 400)
    {
      r = random(255); // r is a random number between 0 - 255
      g = random(100,200); // g is a random number betwen 100 - 200
      b = random(100); // b is a random number between 0 - 100
      a = random(200,255); // a is a random number between 200 - 255
      stroke(r, g, b);
      fill(r, g, b, a);
    }
  else
    {
       r = random(255); // r is a random number between 0 - 255
      g = random(100,200); // g is a random number betwen 100 - 200
      b = random(100); // b is a random number between 0 - 100
      a = random(200,255); // a is a random number between 200 - 255
      stroke(r, g, b);
      fill(r, g, b , a);
    }
  
  if(mouseIsPressed == true)
    {
      // ellipse(, mouseY, 30, 30);
      triangle(mouseX, mouseY, 320, 100, 310, 80);
    }
}