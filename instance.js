var state = false; 


var sketch1 = function (p) {
p.L12 = "12";
p.L11 = "11";
p.L10 = "10";
p.L9 = "9";
p.L8 = "8";
p.L7 = "7";
p.L6 = "6";
p.L5 = "5";
p.L4 = "4";
p.L3 = "3";
p.L2 = "2";
p.L1 = "1";

p.angle = 0;
p.angle1 = 0;
p.angle2 = 0;
p.angle3 = 0;
p.angle4 = 0;
p.angle5 = 0;
p.angle6 = 0;
p.angle7 = 0;
p.angle8 = 0;
p.angle9 = 0;
p.angle10 = 0;
p.angle11 = 0;
p.angle12 = 0;

p.PosL1 = 0;
p.PosL2 = p.PosL1 - 30;
p.PosL3 = p.PosL2 - 30;
p.PosL4 = p.PosL3 - 30;
p.PosL5 = p.PosL4 - 30;
p.PosL6 = p.PosL5 - 30;
p.PosL7 = p.PosL6 - 30;
p.PosL8 = p.PosL7 - 30;
p.PosL9 = p.PosL8 - 30;
p.PosL10 = p.PosL9 - 30;
p.PosL11 = p.PosL10 - 30;
p.PosL12 = p.PosL11 - 30;
p.amountL1 = 90;

    p.amountL2 = p.amountL1 / 1.5;
p.amountL3 = p.amountL1 / 2;
		p.amountL4 = p.amountL1 / 2.5;
		p.amountL5 = p.amountL1 / 3;
		p.amountL6 = p.amountL1 / 3.5;
		p.amountL7 = p.amountL1 / 4;
		p.amountL8 = p.amountL1 / 4.5;
		p.amountL9 = p.amountL1 / 5;
		p.amountL10 = p.amountL1 / 5.5;
		p.amountL11 = p.amountL1 / 6;
		p.amountL12 = p.amountL1 / 6.5;

		p.setup = function () {
		p.createCanvas(windowWidth, windowHeight);
p.colorMode(HSB);
		p.textSize(40);
		p.textFont("sharp");
		p.frameRate(30);
		p.textAlign(CENTER, CENTER);
			};
p.draw = function () {
p.translate(windowWidth / 2, windowHeight / 2);
p.background(0);
p.fill(255);
													

for (let i = 1; i < 360; i += p.amountL1) {
p.push();
/* center on canvas*/
p.translate(width / 2, height / 2);
/* rotate Letters around circle*/
p.rotate(radians(i));
/* rotate on click*/
p.rotate(p.angle);
p.push();

/* test rotate letter upward*/
p.translate(0, 0);
/* test rotate letter upward*/
p.rotate(190);
/*60 push out*/
p.text(p.L1, 0, p.PosL1);
p.pop();
p.pop();
}
for (let i = 0; i < 360; i += p.amountL2) {
p.push();
/* center on canvas*/
p.translate(width / 2, height / 2);
/* p.rotate Letters around circle*/
p.rotate(radians(i));
/* p.rotate on click*/
p.rotate(p.angle1);
p.push();

/* test p.rotate letter upward*/
p.translate(0, -2);
/* test p.rotate letter upward*/
p.rotate(189);
/*60 p.push out*/
p.text(p.L2, 0, p.PosL2);
p.pop();
p.pop();
}
/* Open Number 3 Group*/
for (let i = 0; i < 360; i += p.amountL3) {
p.push();
/* center on canvas*/
p.translate(width / 2, height / 2);
/* p.rotate Letters around circle*/
p.rotate(radians(i));
/* p.rotate on click*/
p.rotate(p.angle2);
p.push();

p.rotate(90);
/* test p.rotate letter upward*/
p.translate(0, 0);
/* test p.rotate letter upward*/
p.rotate(49);
/*60 p.push out*/
p.text(p.L3, 0, p.PosL3);
p.pop();
p.pop();
}
/* Close 3 Group*/

/* Open 4 Group*/
for (let i = 0; i < 360; i += p.amountL4) {
p.push();
/* center on canvas*/
p.translate(width / 2, height / 2);
/* p.rotate Letters around circle*/
p.rotate(radians(i));
/* p.rotate on click*/
p.rotate(p.angle3);
p.push();

p.rotate(90);
/* test p.rotate letter upward*/
p.translate(0, 0);
/* test p.rotate letter upward*/
p.rotate(90);
/*60 p.push out*/
p.text(p.L4, 0, p.PosL4);
p.pop();
p.pop();
}
/* Close 4 Group*/

/* Open 5 Group*/
for (let i = 0; i < 360; i += p.amountL5) {
p.push();
/* center on canvas*/
p.translate(width / 2, height / 2);
/* p.rotate Letters around circle*/
p.rotate(radians(i));
/* p.rotate on click*/
p.rotate(p.angle4);
p.push();

p.rotate(89.55);
/* test p.rotate letter upward*/
p.translate(0, 0);
/* test p.rotate letter upward*/

/*60 p.push out*/
p.text(p.L5, 0, p.PosL5);
p.pop();
p.pop();
}
/* Close 5 Group*/
/* Open 6 Group*/
for (let i = 0; i < 360; i += p.amountL6) {
p.push();
/* center on canvas*/
p.translate(width / 2, height / 2);
/* p.rotate Letters around circle*/
p.rotate(radians(i));
/* p.rotate on click*/
p.rotate(p.angle5);
p.push();

p.rotate(90);
/* test p.rotate letter upward*/
p.translate(0, 0);
/* test p.rotate letter upward*/

/*60 p.push out*/
p.text(p.L6, 0, p.PosL6);
p.pop();
p.pop();
}
/* Close 6 Group*/

/* Open 7 Group*/
for (let i = 0; i < 360; i += p.amountL7) {
p.push();
/* center on canvas*/
p.translate(width / 2, height / 2);
/* p.rotate Letters around circle*/
p.rotate(radians(i));
/* p.rotate on click*/
p.rotate(p.angle6);
p.push();

p.rotate(89.55);
/* test p.rotate letter upward*/
p.translate(0, 0);
/* test p.rotate letter upward*/

/*60 p.push out*/
p.text(p.L7, 0, p.PosL7);
p.pop();
p.pop();
}
/* Close 7 Group*/

/* Open  Group*/
for (let i = 0; i < 360; i += p.amountL8) {
p.push();
/* center on canvas*/
p.translate(width / 2, height / 2);
/* p.rotate Letters around circle*/
p.rotate(radians(i));
/* p.rotate on click*/
p.rotate(p.angle7);
p.push();

p.rotate(89.55);
/* test p.rotate letter upward*/
p.translate(0, 0);
/* test p.rotate letter upward*/

/*60 p.push out*/
p.text(p.L8, 0, p.PosL8);
p.pop();
p.pop();
}
/* Close O Group*/

/* Open 9 Group*/
for (let i = 0; i < 360; i += p.amountL9) {
p.push();
/* center on canvas*/
p.translate(width / 2, height / 2);
/* p.rotate Letters around circle*/
p.rotate(radians(i));
/* p.rotate on click*/
p.rotate(p.angle8);
p.push();

p.rotate(89.55);
/* test p.rotate letter upward*/
p.translate(0, 0);
/* test p.rotate letter upward*/

/*60 p.push out*/
p.text(p.L9, 0, p.PosL9);

p.pop();

p.pop();
}
/* Close 9 Group*/
/* Open 1O Group*/
for (let i = 0; i < 360; i += p.amountL10) {
p.push();
/* center on canvas*/
p.translate(width / 2, height / 2);
/* p.rotate Letters around circle*/
p.rotate(radians(i));
/* p.rotate on click*/
p.rotate(p.angle9);
p.push();

p.rotate(89.55);
/* test p.rotate letter upward*/
p.translate(0, 0);
/* test p.rotate letter upward*/

/*60 p.push out*/
p.text(p.L10, 0, p.PosL10);

p.pop();

p.pop();
}
/* Close 1O Group*/

/* Open 11 Group*/
for (let i = 0; i < 360; i += p.amountL11) {
p.push();
/* center on canvas*/
p.translate(width / 2, height / 2);
/* p.rotate Letters around circle*/
p.rotate(radians(i));
/* p.rotate on click*/
p.rotate(p.angle10);
p.push();

p.rotate(89.55);
/* test p.rotate letter upward*/
p.translate(0, 0);
/* test p.rotate letter upward*/

/*60 p.push out*/
p.text(p.L11, 0, p.PosL11);

p.pop();

p.pop();
}
/* Close 11 Group*/
/* Open 12 Group*/
for (let i = 0; i < 360; i += p.amountL12) {
p.push();
/* center on canvas*/
p.translate(width / 2, height / 2);
/* p.rotate Letters around circle*/
p.rotate(radians(i));
/* p.rotate on click*/
p.rotate(p.angle11);
p.push();
p.rotate(89.55);
/* test p.rotate letter upward*/
p.translate(0, 0);
/* test p.rotate letter upward*/
p.text(p.L12, 0, p.PosL12);

p.pop();

p.pop();
} /* Close 12 Group*/

if (p.mouseX > 800) {
	p.angle = p.angle + 0.2;
	p.angle1 = p.angle1 + 0.15;
	p.angle2 = p.angle2 + 0.1;
	p.angle3 = p.angle3 + 0.09;
	p.angle4 = p.angle4 + 0.08;
	p.angle5 = p.angle5 + 0.07;
	p.angle6 = p.angle6 + 0.06;
	p.angle7 = p.angle7 + 0.05;
	p.angle8 = p.angle8 + 0.04;
	p.angle9 = p.angle9 + 0.03;
	p.angle10 = p.angle10 + 0.02;
	p.angle11 = p.angle11 + 0.01;

	/* Close L Group*/
}	};

p.windowResized = function() {
	p.resizeCanvas(windowWidth, windowHeight);
		}
};
var sketch2 = function (s) {
	s.Lt1 = "L";
	s.O2 = "O";
	s.C3 = "C";
	s.K4 = "K";
	s.D5 = "D";
	s.O6 = "O";
	s.W7 = "W";
	s.N8 = "N";
	s.Dashnine = "-";

	s.myFont;
	s.angle = 0;
	s.angle1 = 0;
	s.angle2 = 0;
	s.angle3 = 0;
	s.angle4 = 0;
	s.angle5 = 0;
	s.angle6 = 0;
	s.angle7 = 0;
	s.angle8 = 0;
	s.angle9 = 0;
	s.angle10 = 0;
	s.angle11 = 0;
	s.angle12 = 0;

	/* Controls s.Postion  of ters*/
	s.Pos9 = 0;
	s.Pos8 = s.Pos9 -45;
	s.Pos7 = s.Pos8 -45;
	s.Pos6 = s.Pos7 -45;
	s.Pos5 = s.Pos6 -45;
	s.Pos4 = s.Pos5 -45;
	s.Pos3 = s.Pos4 -45;
	s.Pos2 = s.Pos3 -45;
	s.Pos1 = s.Pos2 -45;

	/* Controls s.amount of ter forms around circle*/
	s.amountDashnine = 90;
	s.amountN8 = s.amountDashnine / 1.5;
	s.amountW7 = s.amountDashnine / 2;
	s.amountO6 = s.amountDashnine / 2.5;
	s.amountD5 = s.amountDashnine / 3;
	s.amountK4 = s.amountDashnine / 3.5;
	s.amountC3 = s.amountDashnine / 4;
	s.amountO2 = s.amountDashnine / 4.5;
	s.amountLt1 = s.amountDashnine / 5;

	s.setup = function () {
		s.createCanvas(windowWidth, windowHeight);
		s.colorMode(HSB);
		s.textSize(40);
		s.textFont("sharp");
		s.frameRate(30);
		s.textAlign(CENTER, CENTER);
	};

	s.draw = function () {
		s.translate(windowWidth / 2, windowHeight / 2);
		s.background(0);
		s.fill(255);
		for (let i = 1; i < 360; i += s.amountDashnine) {
			s.push();
			/* center on canvas*/
			s.translate(width / 2, height / 2);
			/* rotate Letters around circle*/
			s.rotate(radians(i));
			/* rotate on click*/
			s.rotate(s.angle);
			s.push();

			/* test s.rotate letter upward*/
			s.translate(0, 0);
			/* test s.rotate letter upward*/
			s.rotate(190);
			/*60 s.push out*/
			s.text(s.Dashnine, 0, s.Pos9);
			s.pop();
			s.pop();
		}
		/* Close Dash Group*/
		/* Open N Group*/
		for (let i = 0; i < 360; i += s.amountN8) {
			s.push();
			/* center on canvas*/
			s.translate(width / 2, height / 2);
			/* s.rotate Letters around circle*/
			s.rotate(radians(i));
			/* s.rotate on click*/
			s.rotate(s.angle1);
			s.push();

			/* test s.rotate letter upward*/
			s.translate(0, -2);
			/* test s.rotate letter upward*/
			s.rotate(189);
			/*60 s.push out*/
			s.text(s.N8, 0, s.Pos8);
			s.pop();
			s.pop();
		}
		/* Close N Group*/

		/* Open W Group*/

		for (let i = 0; i < 360; i += s.amountW7) {
			s.push();
			/* center on canvas*/
			s.translate(width / 2, height / 2);
			/* s.rotate Letters around circle*/
			s.rotate(radians(i));
			/* s.rotate on click*/
			s.rotate(s.angle2);
			s.push();

			s.rotate(90);
			/* test s.rotate letter upward*/
			s.translate(0, 0);
			/* test s.rotate letter upward*/
			s.rotate(49);
			/*60 s.push out*/
			s.text(s.W7, 0, s.Pos7);
			s.pop();
			s.pop();
		}
		/* Close W Group*/
		/* Open O Group*/
		for (let i = 0; i < 360; i += s.amountO6) {
			s.push();
			/* center on canvas*/
			s.translate(width / 2, height / 2);
			/* s.rotate Letters around circle*/
			s.rotate(radians(i));
			/* s.rotate on click*/
			s.rotate(s.angle3);
			s.push();

			s.rotate(90);
			/* test s.rotate letter upward*/
			s.translate(0, 0);
			/* test s.rotate letter upward*/
			s.rotate(90);
			/*60 s.push out*/
			s.text(s.O6, 0, s.Pos6);
			s.pop();
			s.pop();
		}
		/* Close O Group*/

		/* Open D Group*/
		for (let i = 0; i < 360; i += s.amountD5) {
			s.push();
			/* center on canvas*/
			s.translate(width / 2, height / 2);
			/* s.rotate Letters around circle*/
			s.rotate(radians(i));
			/* s.rotate on click*/
			s.rotate(s.angle4);
			s.push();

			s.rotate(89.55);
			/* test s.rotate letter upward*/
			s.translate(0, 0);
			/* test s.rotate letter upward*/

			/*60 s.push out*/
			s.text(s.D5, 0, s.Pos5);
			s.pop();
			s.pop();
		}

		/* Close D Group*/

		/* Open K Group*/
		for (let i = 0; i < 360; i += s.amountK4) {
			s.push();
			/* center on canvas*/
			s.translate(width / 2, height / 2);
			/* s.rotate Letters around circle*/
			s.rotate(radians(i));
			/* s.rotate on click*/
			s.rotate(s.angle5);
			s.push();

			s.rotate(90);
			/* test s.rotate letter upward*/
			s.translate(0, 0);
			/* test s.rotate letter upward*/

			/*60 s.push out*/
			s.text(s.K4, 0, s.Pos4);
			s.pop();
			s.pop();
		}
		/* Close K Group*/

		/* Open C Group*/
		for (let i = 0; i < 360; i += s.amountC3) {
			s.push();
			/* center on canvas*/
			s.translate(width / 2, height / 2);
			/* s.rotate Letters around circle*/
			s.rotate(radians(i));
			/* s.rotate on click*/
			s.rotate(s.angle6);
			s.push();

			s.rotate(89.55);
			/* test s.rotate letter upward*/
			s.translate(0, 0);
			/* test s.rotate letter upward*/

			/*60 s.push out*/
			s.text(s.C3, 0, s.Pos3);
			s.pop();
			s.pop();
		}
		/* Close C Group*/

		/* Open O Group*/
		for (let i = 0; i < 360; i += s.amountO2) {
			s.push();
			/* center on canvas*/
			s.translate(width / 2, height / 2);
			/* s.rotate Letters around circle*/
			s.rotate(radians(i));
			/* s.rotate on click*/
			s.rotate(s.angle7);
			s.push();

			s.rotate(89.55);
			/* test s.rotate letter upward*/
			s.translate(0, 0);
			/* test s.rotate letter upward*/

			/*60 s.push out*/
			s.text(s.O2, 0, s.Pos2);
			s.pop();
			s.pop();
		}
		/* Close O Group*/

		/* Open L Group*/
		for (let i = 0; i < 360; i += s.amountLt1) {
			s.push();
			/* center on canvas*/
			s.translate(width / 2, height / 2);
			/* s.rotate Letters around circle*/
			s.rotate(radians(i));
			/* s.rotate on click*/
			s.rotate(s.angle8);
			s.push();

			s.rotate(89.55);
			s.translate(0, 0);

			s.text(s.Lt1, 0, s.Pos1);

			s.pop();

			s.pop();
		}
		if (s.mouseX > 800) {
			s.angle = s.angle + 0.09;
			s.angle1 = s.angle1 + 0.08;
			s.angle2 = s.angle2 + 0.07;
			s.angle3 = s.angle3 + 0.06;
			s.angle4 = s.angle4 + 0.05;
			s.angle5 = s.angle5 + 0.04;
			s.angle6 = s.angle6 + 0.03;
			s.angle7 = s.angle7 + 0.02;
			s.angle8 = s.angle8 + 0.01;
		}
	};
};
var myp5_3 = new p5();
var myp5_1 = new p5('sketch1');

var myp5_2 = new p5('sketch2');
 
var dispose = IS.create(options);

dispose();

dispose = IS.create(options);