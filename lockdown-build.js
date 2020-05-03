let myFont;
let angle = 0;
/* Controls Postion  of Letters*/
let Pos9 = 0;
let Pos8 = Pos9 - 50;
let Pos7 = Pos8 - 50;
let Pos6 = Pos7 - 50;
let Pos5 = Pos6 - 50;
let Pos4 = Pos5 - 50;
let Pos3 = Pos4 - 50;
let Pos2 = Pos3 - 50;
let Pos1 = Pos2 - 50;

let L1 = "L";
let L2 = "O";
let L3 = "C";
let L4 = "K";
let L5 = "D";
let L6 = "O";
let L7 = "W";
let L8 = "N";
let L9 = "-";

/* Controls amount of letter forms around circle*/
let amountL9 = 90;
let amountL8 = amountL9 / 1.5;
let amountL7 = amountL8 / 1.33;
let amountL6 = amountL7 / 1.25;
let amountL5 = amountL6 / 1.2;
let amountL4 = amountL5 / 1.17;
let amountL3 = amountL4 / 1.14;
let amountL2 = amountL3 / 1.12;
let amountL1 = amountL2 / 1.11;

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB);
	textFont("sharp");
	textSize(50);
	textAlign(CENTER, CENTER);
}

function draw() {
	background(0);
	fill(255);

	/* Open Dash Group*/
	for (let i = 1; i < 360; i += amountL9) {
		push();
		/* center on canvas*/
		translate(width / 2, height / 2);
		/* rotate Letters around circle*/
		rotate(radians(i));
		/* rotate on click*/
		rotate(angle);
		push();

		/* test rotate letter upward*/
		translate(0, 0);
		/* test rotate letter upward*/
		rotate(190);
		/*60 push out*/
		text(L9, 0, Pos9);
		pop();
		pop();
	}
	/* Close Dash Group*/

	/* Open N Group*/
	for (let i = 0; i < 360; i += amountL8) {
		push();
		/* center on canvas*/
		translate(width / 2, height / 2);
		/* rotate Letters around circle*/
		rotate(radians(i));
		/* rotate on click*/
		rotate(angle);
		push();

		/* test rotate letter upward*/
		translate(0, -2);
		/* test rotate letter upward*/
		rotate(189);
		/*60 push out*/
		text(L8, 0, Pos8);
		pop();
		pop();
	}
	/* Close N Group*/

	/* Open W Group*/

	for (let i = 0; i < 360; i += amountL7) {
		push();
		/* center on canvas*/
		translate(width / 2, height / 2);
		/* rotate Letters around circle*/
		rotate(radians(i));
		/* rotate on click*/
		rotate(angle);
		push();

		rotate(90);
		/* test rotate letter upward*/
		translate(0, 0);
		/* test rotate letter upward*/
		rotate(49);
		/*60 push out*/
		text(L7, 0, Pos7);
		pop();
		pop();
	}
	/* Close W Group*/

	/* Open O Group*/
	for (let i = 0; i < 360; i += amountL6) {
		push();
		/* center on canvas*/
		translate(width / 2, height / 2);
		/* rotate Letters around circle*/
		rotate(radians(i));
		/* rotate on click*/
		rotate(angle);
		push();

		rotate(90);
		/* test rotate letter upward*/
		translate(0, 0);
		/* test rotate letter upward*/
		rotate(90);
		/*60 push out*/
		text(L6, 0, Pos6);
		pop();
		pop();
	}
	/* Close O Group*/

	/* Open D Group*/
	for (let i = 0; i < 360; i += amountL5) {
		push();
		/* center on canvas*/
		translate(width / 2, height / 2);
		/* rotate Letters around circle*/
		rotate(radians(i));
		/* rotate on click*/
		rotate(angle);
		push();

		rotate(89.55);
		/* test rotate letter upward*/
		translate(0, 0);
		/* test rotate letter upward*/

		/*60 push out*/
		text(L5, 0, Pos5);
		pop();
		pop();
	}
	/* Close D Group*/

	/* Open K Group*/
	for (let i = 0; i < 360; i += amountL4) {
		push();
		/* center on canvas*/
		translate(width / 2, height / 2);
		/* rotate Letters around circle*/
		rotate(radians(i));
		/* rotate on click*/
		rotate(angle);
		push();

		rotate(90);
		/* test rotate letter upward*/
		translate(0, 0);
		/* test rotate letter upward*/

		/*60 push out*/
		text(L4, 0, Pos4);
		pop();
		pop();
	}
	/* Close K Group*/

	/* Open C Group*/
	for (let i = 0; i < 360; i += amountL3) {
		push();
		/* center on canvas*/
		translate(width / 2, height / 2);
		/* rotate Letters around circle*/
		rotate(radians(i));
		/* rotate on click*/
		rotate(angle);
		push();

		rotate(89.55);
		/* test rotate letter upward*/
		translate(0, 0);
		/* test rotate letter upward*/

		/*60 push out*/
		text(L3, 0, Pos3);
		pop();
		pop();
	}
	/* Close C Group*/

	/* Open O Group*/
	for (let i = 0; i < 360; i += amountL2) {
		push();
		/* center on canvas*/
		translate(width / 2, height / 2);
		/* rotate Letters around circle*/
		rotate(radians(i));
		/* rotate on click*/
		rotate(angle);
		push();

		rotate(89.55);
		/* test rotate letter upward*/
		translate(0, 0);
		/* test rotate letter upward*/

		/*60 push out*/
		text(L2, 0, Pos2);
		pop();
		pop();
	}
	/* Close O Group*/

	/* Open L Group*/
	for (let i = 0; i < 360; i += amountL1) {
		push();
		/* center on canvas*/
		translate(width / 2, height / 2);
		/* rotate Letters around circle*/
		rotate(radians(i));
		/* rotate on click*/
		rotate(angle);
		push();

		rotate(89.55);
		/* test rotate letter upward*/
		translate(0, 0);
		/* test rotate letter upward*/

		/*60 push out*/
		text(L1, 0, Pos1);
		pop();
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
