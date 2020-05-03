var Lt1 = "L";
var O2 = "O";
var C3 = "C";
var K4 = "K";
var D5 = "D";
var O6 = "O";
var W7 = "W";
var N8 = "N";
var Dashnine = "-";

/* Number forms Varible*/
var L12 = "12";
var L11 = "11";
var L10 = "10";
var L9 = "9";
var L8 = "8";
var L7 = "7";
var L6 = "6";
var L5 = "5";
var L4 = "4";
var L3 = "3";
var L2 = "2";
var L1 = "1";
let myFont;
let angle = 0;
let angle1 = 0;
let angle2 = 0;
let angle3 = 0;
let angle4 = 0;
let angle5 = 0;
let angle6 = 0;
let angle7 = 0;
let angle8 = 0;
let angle9 = 0;
let angle10 = 0;
let angle11 = 0;
let angle12 = 0;

/* Controls Postion  of Letters*/
let Pos9 = 0;
let Pos8 = Pos9 - 55;
let Pos7 = Pos8 - 55;
let Pos6 = Pos7 - 55;
let Pos5 = Pos6 - 55;
let Pos4 = Pos5 - 55;
let Pos3 = Pos4 - 55;
let Pos2 = Pos3 - 55;
let Pos1 = Pos2 - 55;

/* Controls Postion  of Numbers*/
let PosL1 = 0;
let PosL2 = PosL1 - 40;
let PosL3 = PosL2 - 40;
let PosL4 = PosL3 - 40;
let PosL5 = PosL4 - 40;
let PosL6 = PosL5 - 40;
let PosL7 = PosL6 - 40;
let PosL8 = PosL7 - 40;
let PosL9 = PosL8 - 40;
let PosL10 = PosL9 - 40;
let PosL11 = PosL10 - 40;
let PosL12 = PosL11 - 40;

/* Controls amount of letter forms around circle*/
let amountDashnine = 90;
let amountN8 = amountDashnine / 1.5;
let amountW7 = amountDashnine / 2;
let amountO6 = amountDashnine / 2.5;
let amountD5 = amountDashnine / 3;
let amountK4 = amountDashnine / 3.5;
let amountC3 = amountDashnine / 4;
let amountO2 = amountDashnine / 4.5;
let amountLt1 = amountDashnine / 5;

/* Controls amount of Number Letter forms around circle*/
let amountL1 = 90;
let amountL2 = amountL1 / 1.5;
let amountL3 = amountL1 / 2;
let amountL4 = amountL1 / 2.5;
let amountL5 = amountL1 / 3;
let amountL6 = amountL1 / 3.5;
let amountL7 = amountL1 / 4;
let amountL8 = amountL1 / 4.5;
let amountL9 = amountL1 / 5;
let amountL10 = amountL1 / 5.5;
let amountL11 = amountL1 / 6;
let amountL12 = amountL1 / 6.5;

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB);
	textFont("sharp");
	textSize(40);
	frameRate(30);
	textAlign(CENTER, CENTER);
}

function Screen1() {
    
		for (let i = 1; i < 360; i += amountDashnine) {
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
			text(Dashnine, 0, Pos9);
			pop();
			pop();
		}
		/* Close Dash Group*/

		/* Open N Group*/
		for (let i = 0; i < 360; i += amountN8) {
			push();
			/* center on canvas*/
			translate(width / 2, height / 2);
			/* rotate Letters around circle*/
			rotate(radians(i));
			/* rotate on click*/
			rotate(angle1);
			push();

			/* test rotate letter upward*/
			translate(0, -2);
			/* test rotate letter upward*/
			rotate(189);
			/*60 push out*/
			text(N8, 0, Pos8);
			pop();
			pop();
		}
		/* Close N Group*/

		/* Open W Group*/

		for (let i = 0; i < 360; i += amountW7) {
			push();
			/* center on canvas*/
			translate(width / 2, height / 2);
			/* rotate Letters around circle*/
			rotate(radians(i));
			/* rotate on click*/
			rotate(angle2);
			push();

			rotate(90);
			/* test rotate letter upward*/
			translate(0, 0);
			/* test rotate letter upward*/
			rotate(49);
			/*60 push out*/
			text(W7, 0, Pos7);
			pop();
			pop();
		}
		/* Close W Group*/

		/* Open O Group*/
		for (let i = 0; i < 360; i += amountO6) {
			push();
			/* center on canvas*/
			translate(width / 2, height / 2);
			/* rotate Letters around circle*/
			rotate(radians(i));
			/* rotate on click*/
			rotate(angle3);
			push();

			rotate(90);
			/* test rotate letter upward*/
			translate(0, 0);
			/* test rotate letter upward*/
			rotate(90);
			/*60 push out*/
			text(O6, 0, Pos6);
			pop();
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
			rotate(angle4);
			push();

			rotate(89.55);
			/* test rotate letter upward*/
			translate(0, 0);
			/* test rotate letter upward*/

			/*60 push out*/
			text(D5, 0, Pos5);
			pop();
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
			rotate(angle5);
			push();

			rotate(90);
			/* test rotate letter upward*/
			translate(0, 0);
			/* test rotate letter upward*/

			/*60 push out*/
			text(K4, 0, Pos4);
			pop();
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
			rotate(angle6);
			push();

			rotate(89.55);
			/* test rotate letter upward*/
			translate(0, 0);
			/* test rotate letter upward*/

			/*60 push out*/
			text(C3, 0, Pos3);
			pop();
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
			rotate(angle7);
			push();

			rotate(89.55);
			/* test rotate letter upward*/
			translate(0, 0);
			/* test rotate letter upward*/

			/*60 push out*/
			text(O2, 0, Pos2);
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
			rotate(angle8);
			push();

			rotate(89.55);
			translate(0, 0);

			text(L1, 0, Pos1);

			pop();

			pop();
		}
		/* Close L Group*/
		if (mouseX > 800) {
			angle = angle + 0.09;
			angle1 = angle1 + 0.08;
			angle2 = angle2 + 0.07;
			angle3 = angle3 + 0.06;
			angle4 = angle4 + 0.05;
			angle5 = angle5 + 0.04;
			angle6 = angle6 + 0.03;
			angle7 = angle7 + 0.02;
			angle8 = angle8 + 0.01;
		}

}
function Screen2() {
    



      for (let i = 1; i < 360; i += amountL1) {
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
				text(L1, 0, PosL1);
				pop();
				pop();
			}
			/* Close Number 1 Group*/

			/* Open Number 2 Group*/
			for (let i = 0; i < 360; i += amountL2) {
				push();
				/* center on canvas*/
				translate(width / 2, height / 2);
				/* rotate Letters around circle*/
				rotate(radians(i));
				/* rotate on click*/
				rotate(angle1);
				push();

				/* test rotate letter upward*/
				translate(0, -2);
				/* test rotate letter upward*/
				rotate(189);
				/*60 push out*/
				text(L2, 0, PosL2);
				pop();
				pop();
			}
			/* Close Number 2 Group*/

			/* Open Number 3 Group*/
			for (let i = 0; i < 360; i += amountL3) {
				push();
				/* center on canvas*/
				translate(width / 2, height / 2);
				/* rotate Letters around circle*/
				rotate(radians(i));
				/* rotate on click*/
				rotate(angle2);
				push();

				rotate(90);
				/* test rotate letter upward*/
				translate(0, 0);
				/* test rotate letter upward*/
				rotate(49);
				/*60 push out*/
				text(L3, 0, PosL3);
				pop();
				pop();
			}
			/* Close 3 Group*/

			/* Open 4 Group*/
			for (let i = 0; i < 360; i += amountL4) {
				push();
				/* center on canvas*/
				translate(width / 2, height / 2);
				/* rotate Letters around circle*/
				rotate(radians(i));
				/* rotate on click*/
				rotate(angle3);
				push();

				rotate(90);
				/* test rotate letter upward*/
				translate(0, 0);
				/* test rotate letter upward*/
				rotate(90);
				/*60 push out*/
				text(L4, 0, PosL4);
				pop();
				pop();
			}
			/* Close 4 Group*/

			/* Open 5 Group*/
			for (let i = 0; i < 360; i += amountL5) {
				push();
				/* center on canvas*/
				translate(width / 2, height / 2);
				/* rotate Letters around circle*/
				rotate(radians(i));
				/* rotate on click*/
				rotate(angle4);
				push();

				rotate(89.55);
				/* test rotate letter upward*/
				translate(0, 0);
				/* test rotate letter upward*/

				/*60 push out*/
				text(L5, 0, PosL5);
				pop();
				pop();
			}
			/* Close 5 Group*/

			/* Open 6 Group*/
			for (let i = 0; i < 360; i += amountL6) {
				push();
				/* center on canvas*/
				translate(width / 2, height / 2);
				/* rotate Letters around circle*/
				rotate(radians(i));
				/* rotate on click*/
				rotate(angle5);
				push();

				rotate(90);
				/* test rotate letter upward*/
				translate(0, 0);
				/* test rotate letter upward*/

				/*60 push out*/
				text(L6, 0, PosL6);
				pop();
				pop();
			}
			/* Close 6 Group*/

			/* Open 7 Group*/
			for (let i = 0; i < 360; i += amountL7) {
				push();
				/* center on canvas*/
				translate(width / 2, height / 2);
				/* rotate Letters around circle*/
				rotate(radians(i));
				/* rotate on click*/
				rotate(angle6);
				push();

				rotate(89.55);
				/* test rotate letter upward*/
				translate(0, 0);
				/* test rotate letter upward*/

				/*60 push out*/
				text(L7, 0, PosL7);
				pop();
				pop();
			}
			/* Close 7 Group*/

			/* Open  Group*/
			for (let i = 0; i < 360; i += amountL8) {
				push();
				/* center on canvas*/
				translate(width / 2, height / 2);
				/* rotate Letters around circle*/
				rotate(radians(i));
				/* rotate on click*/
				rotate(angle7);
				push();

				rotate(89.55);
				/* test rotate letter upward*/
				translate(0, 0);
				/* test rotate letter upward*/

				/*60 push out*/
				text(L8, 0, PosL8);
				pop();
				pop();
			}
			/* Close O Group*/

			/* Open 9 Group*/
			for (let i = 0; i < 360; i += amountL9) {
				push();
				/* center on canvas*/
				translate(width / 2, height / 2);
				/* rotate Letters around circle*/
				rotate(radians(i));
				/* rotate on click*/
				rotate(angle8);
				push();

				rotate(89.55);
				/* test rotate letter upward*/
				translate(0, 0);
				/* test rotate letter upward*/

				/*60 push out*/
				text(L9, 0, PosL9);

				pop();

				pop();
			}
			/* Close 9 Group*/
			/* Open 1O Group*/
			for (let i = 0; i < 360; i += amountL10) {
				push();
				/* center on canvas*/
				translate(width / 2, height / 2);
				/* rotate Letters around circle*/
				rotate(radians(i));
				/* rotate on click*/
				rotate(angle9);
				push();

				rotate(89.55);
				/* test rotate letter upward*/
				translate(0, 0);
				/* test rotate letter upward*/

				/*60 push out*/
				text(L10, 0, PosL10);

				pop();

				pop();
			}
			/* Close 1O Group*/
			/* Open 11 Group*/
			for (let i = 0; i < 360; i += amountL11) {
				push();
				/* center on canvas*/
				translate(width / 2, height / 2);
				/* rotate Letters around circle*/
				rotate(radians(i));
				/* rotate on click*/
				rotate(angle10);
				push();

				rotate(89.55);
				/* test rotate letter upward*/
				translate(0, 0);
				/* test rotate letter upward*/

				/*60 push out*/
				text(L11, 0, PosL11);

				pop();

				pop();
			}
			/* Close 11 Group*/
			/* Open 12 Group*/
			for (let i = 0; i < 360; i += amountL12) {
				push();
				/* center on canvas*/
				translate(width / 2, height / 2);
				/* rotate Letters around circle*/
				rotate(radians(i));
				/* rotate on click*/
				rotate(angle11);
				push();
				rotate(89.55);
				/* test rotate letter upward*/
				translate(0, 0);
				/* test rotate letter upward*/
				text(L12, 0, PosL12);

				pop();

				pop();
			} /* Close 12 Group*/
			if (mouseX > 800) {
				angle = angle + 0;
				angle1 = angle1 + 0.15;
				angle2 = angle2 + 0.1;
				angle3 = angle3 + 0.09;
				angle4 = angle4 + 0.08;
				angle5 = angle5 + 0.07;
				angle6 = angle6 + 0.06;
				angle7 = angle7 + 0.05;
				angle8 = angle8 + 0.04;
				angle9 = angle9 + 0.03;
				angle10 = angle10 + 0.02;
				angle11 = angle11 + 0.01;

				/* Close L Group*/
			}
}
function draw() {
	background(0);
	fill(255);	/* Open Dash Group*/
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
		