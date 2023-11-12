var angle = 0.0;
var speed = 0.05;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(143, 188, 143);
  
 var lo = map(mouseX, 0, width, 10, 300);
   var li = map(mouseY, 0, width, 10, 300);
  
  translate(width/2,height/2);
  rotate(angle);
  
  for(var i = 0; i < 20; i++)
    {
      push();
      rotate(i+TWO_PI/2);
      translate(0,lo);
     
       r = random(255); // r is a random number between 0 - 255
      g = random(100,200); // g is a random number betwen 100 - 200
      b = random(100); // b is a random number between 0 - 100
      a = random(200,255); // a is a random number between 200 - 255
      fill(r, g, b,a);
       triangle(10, 10,320, 100, 310,
               80);
      pop();
    }
  angle +=speed;

}


