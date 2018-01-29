var socket;

function setup() {
  createCanvas(200,200)
  background(51);
  fill(150);
  noStroke();
}


function draw() {
gecko(100,100,10,10,10)

}

function gecko(x,y, beta1, beta2, gamma){
  let leg_length = 50;
  let leg_radius = 50;
  let rump_length = 50;
  let rump_radius = 200;

  // Schwerpunkt
  fill(255,0,0);
  noStroke();
  ellipse(x,y,5);

  // Rumpf
  stroke(204, 204,0);
  noFill();
  rump(x, y, rump_length, rump_radius);

  noFill();
  stroke(0, 204, 204);
  right_arm(x,y,leg_length,40);
  left_arm(x,y,leg_length,30);



  stroke(0, 204, 204);
  right_leg(100,120,leg_length,30);
  left_leg(100,120,leg_length,40);

}

function rump(x_,y_,l,r){
  let y = y_;
  let x = x_;

  let portion_of_circle = l/2/PI/r; // Anteil des Umfangs, Bezug zur Länge

  if (r>0)
  {
    let start_angle =  -portion_of_circle*PI; // Oben
    let end_angle = portion_of_circle*PI;
    arc(x-r/2, y+sin(portion_of_circle*2*PI), r, r, start_angle, end_angle);
  }else if (r<0) {
    let start_angle =  PI- 0.5*portion_of_circle*2*PI; // Oben
    let end_angle = PI + 0.5*portion_of_circle*2*PI;
    arc(x+r/2, y, r, r, start_angle, end_angle);
  }else {
    line(x,y-l/2,x,y+l/2)
  }


}

function right_leg(x,y,l,r){
  let start_angle =  -PI*0.5; // Oben
  let portion_of_circle = l/2/PI/r; // Anteil des Umfangs, Bezug zur Länge
  let end_angle = start_angle + portion_of_circle*2*PI;
  arc(x, y+r/2, r, r, start_angle, end_angle);
}

function left_leg(x,y,l,r){
  let end_angle =  -PI*0.5; // Oben
  let portion_of_circle = l/2/PI/r; // Anteil des Umfangs, Bezug zur Länge
  let start_angle = 1.5*PI - portion_of_circle*2*PI;
  arc(x, y+r/2, r, r, start_angle, end_angle);
}

function right_arm(x,y,l,r){
  let end_angle =  PI*0.5; // Oben
  let portion_of_circle = l/2/PI/r; // Anteil des Umfangs, Bezug zur Länge
  let start_angle = 0.5*PI - portion_of_circle*2*PI;
  arc(x, y-r/2, r, r, start_angle, end_angle);
}

function left_arm(x,y,l,r){
  let start_angle =  PI*0.5; // Oben
  let portion_of_circle = l/2/PI/r; // Anteil des Umfangs, Bezug zur Länge
  let end_angle = 0.5*PI + portion_of_circle*2*PI;
  arc(x, y-r/2, r, r, start_angle, end_angle);
}
