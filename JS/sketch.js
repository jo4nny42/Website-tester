function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {

  text('Current day: \n' + day + ":" + hour + " :" + minute + ":" + mili, 5, 50);

  rect (60, 20, 80, 50);
  fill(40);
  rect (70, 40, 10, 10);
  rect (100, 40, 10, 10);
  
  rect (65, 80, 70, 40);
  rect (8, 80, 40, 20);
  rect (160, 80, 40, 20);
  
  rect (70, 130, 20, 40);
  rect (120, 130, 20, 40);

  lights(128,56,100);
  rotateX(millis() / 900);
  rotateY(millis() / 2000);
  rotateZ(millis() / 3000);
  box();
  strokeWeight(0);
  stroke(0);

  let day = day();
  let hour = hour();
  let minute = minute();
  let mili = millis();
  let month = month();
  let second = second();
  let year = year();
}