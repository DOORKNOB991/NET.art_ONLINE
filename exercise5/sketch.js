function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(216,242,241);
  noFill();
  stroke(189,74,25);
  for(var i = 50; i < height; i+=10)
    {
      ellipse(width/2,height/2,i,i);
    }
  stroke(56,201,76);
  for(var i = 50; i < height; i+=10)
    {
      ellipse(width/4,height/2,i,i);
    }
  
  stroke(100,301,26);
  for(var i = 50; i < height; i+=10)
    {
      ellipse(width/4,height/8,i,i);
    }
  stroke(200,45,26);
  for(var i = 50; i < height; i+=10)
    {
      ellipse(width/4,height/12,i,i/2);
    }
  stroke(300,100,26);
  for(var i = 50; i < height; i+=10)
    {
      ellipse(width/4,height/12,i/2,i);
    }
   stroke(90,301,26);
  for(var i = 50; i < height; i+=10)
    {
      ellipse(width,height/8,i,i);
    }
  stroke(256,292,206);
  for(var i = 50; i < height; i+=10)
    {
      ellipse(width,height/2,i,i);
    }
   stroke(300,100,26);
  for(var i = 50; i < height; i+=10)
    {
      ellipse(width,height,i,i/2);
    }
  stroke(200,45,26);
  for(var i = 50; i < height; i+=10)
    {
      ellipse(width/4,height,i,i/2);
    }
}