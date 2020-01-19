const altura = 645;
const largura = 645;

function setup(){
	createCanvas(largura,altura);
	angleMode(DEGREES);
}

function draw(){
	background('white');
	let hrAtual = hour();
	hrAtual--;
	let minAtual = minute();
	let secAtual = second();
	noStroke();
	fill('black');
	text(hrAtual + ':' + minAtual + ':' + secAtual,altura/2,largura/2);
	textAlign(CENTER);
	textSize(20);

	let pHr = map(hrAtual%12,0,12,-90,270);
	let pMin = map(minAtual,0,60,-90,270);
	let pSec = map(secAtual,0,60,-90,270);
	
	noFill();
	strokeWeight(12);
	stroke('red');
	arc(altura/2,largura/2,200,200,-90,pHr);
	stroke('green');
	arc(altura/2,largura/2,160,160,-90,pMin);
	stroke('blue');
	arc(altura/2,largura/2,120,120,-90,pSec);
}