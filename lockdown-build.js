var L1 = "L";
var O2 = "O";
var C3 = "C";
var K4 = "K";
var D5 = "D";
var O6 = "O";
var W7 = "W";
var N8 = "N";
var Dashnine = "-";

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



/* Controls amount of letter forms around circle*/
let amountDashnine = 90;
let amountN8 = amountDashnine / 1.5;
let amountW7 = amountN8 / 1.33;
let amountO6 = amountW7 / 1.25;
let amountD5 = amountO6 / 1.2;
let amountK4 = amountD5 / 1.17;
let amountC3 = amountK4 / 1.14;
let amountO2 = amountC3 / 1.12;
let amountL1 = amountO2 / 1.11;

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB);
	textFont("sharp");
  textSize(40);
  frameRate(30);
	textAlign(CENTER, CENTER);
}

function draw() {
									background(0);
									fill(255);

									/* Open Dash Group*/
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

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
