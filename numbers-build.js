/* Letter forms Varible*/
var L1 = "12";
var L2 = "11";
var L3 = "10";
var L4 = "9";
var L5 = "8";
var L6 = "7";
var L7 = "6";
var L8 = "5";
var L9 = "4";
var L10 = "3";
var L11 = "2";
var L12 = "1";

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
let Pos12 = 0;
let Pos11 = Pos12 - 40;
let Pos10 = Pos11 - 40;
let Pos9 = Pos10 - 40;
let Pos8 = Pos9 - 40;
let Pos7 = Pos8 - 40;
let Pos6 = Pos7 - 40;
let Pos5 = Pos6 - 40;
let Pos4 = Pos5 - 40;
let Pos3 = Pos4 - 40;
let Pos2 = Pos3 - 40;
let Pos1 = Pos2 - 40;




/* Controls amount of letter forms around circle*/
let amountL12 = 90;
let amountL11 = amountL12 / 1.5;
let amountL10 = amountL11 / 1.33;
let amountL9 = amountL10 / 1.25;
let amountL8 = amountL9 / 1.2;
let amountL7 = amountL8 / 1.17;
let amountL6 = amountL7 / 1.14;
let amountL5 = amountL6 / 1.12;
let amountL4 = amountL5 / 1.11;
let amountL3 = amountL5 / 1.22;
let amountL2 = amountL5 / 1.33;
let amountL1 = amountL5 / 1.44;

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
								
    /* Open 1 Group*/
    for (let i = 1; i < 360; i += amountL12) {
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
        text(L12, 0, Pos12);
        pop();
        pop();
    }
    /* Close 1 Group*/

    /* Open 2 Group*/
    for (let i = 0; i < 360; i += amountL11) {
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
        text(L11, 0, Pos11);
        pop();
        pop();
    }
    /* Close 2 Group*/

    /* Open 3 Group*/

    for (let i = 0; i < 360; i += amountL10) {
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
        text(L10, 0, Pos10);
        pop();
        pop();
    }
    /* Close 3 Group*/

    /* Open 4 Group*/
    for (let i = 0; i < 360; i += amountL9) {
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
        text(L9, 0, Pos9);
        pop();
        pop();
    }
    /* Close 4 Group*/

    /* Open 5 Group*/
    for (let i = 0; i < 360; i += amountL8) {
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
        text(L8, 0, Pos8);
        pop();
        pop();
    }
    /* Close 5 Group*/

    /* Open 6 Group*/
    for (let i = 0; i < 360; i += amountL7) {
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
        text(L7, 0, Pos7);
        pop();
        pop();
    }
    /* Close 6 Group*/

    /* Open 7 Group*/
    for (let i = 0; i < 360; i += amountL6) {
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
        text(L6, 0, Pos6);
        pop();
        pop();
    }
    /* Close 7 Group*/

    /* Open  Group*/
    for (let i = 0; i < 360; i += amountL5) {
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
        text(L5, 0, Pos5);
        pop();
        pop();
    }
    /* Close O Group*/

    /* Open 9 Group*/
    for (let i = 0; i < 360; i += amountL4) {
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
        text(L4, 0, Pos4);

        pop();

        pop();
    }
    /* Close 9 Group*/
    /* Open 1O Group*/
    for (let i = 0; i < 360; i += amountL3) {
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
        text(L3, 0, Pos3);

        pop();

        pop();
    }
    /* Close 1O Group*/
    /* Open 11 Group*/
    for (let i = 0; i < 360; i += amountL2) {
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
        text(L2, 0, Pos2);

        pop();

        pop();
    }
    /* Close 11 Group*/
    /* Open 12 Group*/
    for (let i = 0; i < 360; i += amountL1) {
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

        text(L1, 0, Pos1);

        pop();

        pop();
    } /* Close 12 Group*/
    if (mouseX > 800) {
        angle = angle + 0.;
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

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

