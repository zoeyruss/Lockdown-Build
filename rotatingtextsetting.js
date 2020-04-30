let myFont;
let angle = 90;
let s1 = "L";
let s8Pos = -10;
let s7Pos = s8Pos - 50;
let s6Pos = s7Pos - 50;
let s5Pos = s6Pos - 50;
let s4Pos = s5Pos - 50;
let s3Pos = s4Pos - 50;
let s2Pos = s3Pos - 50;
let s1Pos = s2Pos - 50;


let s2 = "O";
let s3 = "C";
let s4 = "D";
let s5 = "O";
let s6 = "W";
let s7 = "N";

let s8 = "–";
let amount = 90;
let amount2 = amount / 1.5;
let amount3 = amount2 / 1.5;
let amount4 = amount3 / 1.5;
let amount5 = amount4 / 1.5;
let amount6 = amount5 / 1.5;
let amount7 = amount6 / 1.5;
let amount8 = amount7 / .25;


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  textSize(40);
  textAlign(CENTER,CENTER);
textFont("sharp");
}

function draw() {
  background(0);
  fill(255);

  for (let i = 1; i < 360; i += amount) {
  push();
  translate(width / 2, height / 2);
  rotate(radians(i));
  fill(300, 60, 100);
   rotate(angle);
  text(s8, 0, 0);
    pop();


}
  for (let i = 0; i < 360; i += amount2) {
    push();

    translate(width / 2, height / 2);
    
    rotate(radians(i));
    
      rotate(angle);
    text(s7, s7Pos, 0);
 
    pop();


  }
  for (let i = 0; i < 360; i += amount3) {
    push();

    translate(width / 2, height / 2);
    rotate(radians(i));
    
    rotate(angle);
    text(s6, s6Pos, 0);
    pop();


  }
    for (let i = 0; i < 360; i += amount4) {
			push();

			translate(width / 2, height / 2);
			rotate(radians(i));
			
			rotate(angle);
			text(s5, s5Pos, 0);
			pop();
    }
      for (let i = 0; i < 360; i += amount5) {
				push();

				translate(width / 2, height / 2);
				rotate(radians(i));
				
				rotate(angle);
				text(s4, s4Pos, 0);
				pop();
  }
  for (let i = 0; i < 360; i += amount6) {
			push();

			translate(width / 2, height / 2);
			rotate(radians(i));
			
			rotate(angle);
			text(s3, s3Pos, 0);
			pop();
  }
    for (let i = 0; i < 360; i += amount7) {
			push();

			translate(width / 2, height / 2);
			rotate(radians(i));
			

      text(s2, s2Pos, 0);
      			rotate(i*45);
			pop();
    }
      for (let i = 0; i < 360; i += amount8) {
				push();

				translate(width / 2, height / 2);
				rotate(radians(i));
      
 rotate(angle + PI / 2);
				text(s1, s1Pos, 0);	
				pop();
			}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function mousePressed() {
	angle = angle - 50;
}