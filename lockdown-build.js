let myFont;
let angle = 0;
/* Controls Postion  of Letters*/
let Dash8Pos = -10;
let N7Pos = Dash8Pos - 40;
let W6Pos = N7Pos - 40;
let O5Pos = W6Pos - 40;
let D5Pos = O5Pos - 40;
let K4Pos = D5Pos - 40;
let C3Pos = K4Pos - 40;
let O2Pos = C3Pos - 40;
let L1Pos = O2Pos - 40;

let L1 = "L";
let O2 = "O";
let C3 = "C";
let K4 = "K";
let D5 = "D";
let O5 = "O";
let W6 = "W";
let N7 = "N";
let Dash8 = "–";

/* Controls amount of letter forms around circle*/
let amountDash8 = 90;
let amountN7 = amountDash8 / 1.5;
let amountW6 = amountN7 / 1.33;
let amountO5 = amountW6 / 1.255;
let amountD5 = amountO5 / 1.18;
let amountK4 = amountD5 / 1.18;
let amountC3 = amountK4 / 1.15;
let amountO2 = amountC3 / 1.12;


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  textFont("sharp");
  textSize(40);
  textAlign(CENTER, CENTER)
}

function draw() {
  background(0);
  fill(255);

/* Open Dash Group*/
  for (let i = 1; i < 360; i += amountDash8) {
  push();
    textSize(40);
  /* center on canvas*/
    translate(width / 2, height / 2);
  /* rotate Letters around circle*/
    rotate(radians(i));
  /* rotate on click*/
  rotate(angle);
  text(Dash8,Dash8Pos, 0);
  pop();
  }
/* Close Dash Group*/
  
  
  
/* Open N Group*/
  for (let i =0; i < 360; i += amountN7) {
    push();
  /* center on canvas*/
    translate(width / 2, height / 2);
  /* rotate Letters around circle*/
    rotate(radians(i));
  /* rotate on click*/
    rotate(angle);
    push();
  /* test rotate letter upward*/
    translate(45,45);
    rotate(45);
    text(N7, N7Pos,-45);
    pop();
    pop();
  }
/* Close N Group*/
  
  
/* Open W Group*/

  for (let i = 0; i < 360; i += amountW6) {
    push();
  /* center on canvas*/
    translate(width / 2, height / 2);
  /* rotate Letters around circle*/
    rotate(radians(i));
  /* rotate on click*/
    rotate(angle);
    text(W6, W6Pos, 0);
    pop();
  }
/* Close W Group*/
  
  
  
/* Open O Group*/
    for (let i = 0; i < 360; i += amountO5) {
			push();
    /* center on canvas*/
      translate(width / 2, height / 2);
    /* rotate Letters around circle*/
			rotate(radians(i));
    /* rotate on click*/
			rotate(angle);
			text(O5, O5Pos, 0);
			pop();
    }
/* Close O Group*/
  
  
/* Open D Group*/
      for (let i = 0; i < 360; i += amountD5) {
				push();
      /* center on canvas*/
        translate(width / 2, height / 2);
      /* rotate Letters around circle*/
				rotate(radians(i));
      /* rotate on click*/
				rotate(angle);
				text(D5, D5Pos, 0);
				pop();
      }
/* Close D Group*/
  
  
/* Open K Group*/
  for (let i = 0; i < 360; i += amountK4) {
			push();
  /* center on canvas*/
      translate(width / 2, height / 2);
  /* rotate Letters around circle*/
			rotate(radians(i));
  /* rotate on click*/
			rotate(angle);
			text(K4, K4Pos, 0);
			pop();
  }
/* Close K Group*/
  
/* Open C Group*/
    for (let i = 0; i < 360; i += amountC3) {
			push();
    /* center on canvas*/
      translate(width / 2, height / 2);
    /* rotate Letters around circle*/
			rotate(radians(i));
    /* rotate on click*/
      rotate(angle); 
      text(C3, C3Pos, 0);
      		
			pop();
    }
/* Close C Group*/
  
/* Open O Group*/
      for (let i = 0; i < 360; i += amountO2) {
				push();
      /* center on canvas*/
        translate(width / 2, height / 2);
      /* rotate Letters around circle*/
			 	rotate(radians(i));
      /* rotate on click*/
        rotate(angle);
				text(O2, O2Pos, 0);	
				pop();
      }
/* Close O Group*/
  
/* Open L Group*/
  for (let i = 0; i < 360; i += amountO2) {
    push();
  /* center on canvas*/
    translate(width / 2, height / 2);
  /* rotate Letters around circle*/
    rotate(radians(i));
  /* rotate on click*/
    rotate(angle);
    text(L1, L1Pos, 0);
    pop();
  }
/* Close L Group*/
 
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function mousePressed() {
	angle = angle - 50;
}
