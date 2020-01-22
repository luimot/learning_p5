const alturaWin=645;
const larguraWin=645;
const raio=15;
const conVel=2;

let flagOver = false;

let pos={
    x:200,
    y:200,
}

let vel={
    x:0,
    y:0,
}

let fruit={
    x:500,
    y:500,
}

let seguidor = new Array();
let points = 0;

function setup(){
    createCanvas(larguraWin,alturaWin);
}

function draw(){
    background(255, 51, 153);
    fill('yellow');
    noStroke();
    ellipse(pos.x, pos.y, raio,raio);
    fill('red');
    ellipse(fruit.x,fruit.y,raio,raio);
    fill('black');
    pos.x+=vel.x;
    pos.y+=vel.y;
    textSize(10);
    text(pos.x + ' , ' + pos.y,30,20);
    if(pos.x>=larguraWin - 15 || pos.x <= 15){
        vel.x=0;
        gameOver();
    }
    if(pos.y>=alturaWin -14 || pos.y <= 15){
        vel.y=0;
        gameOver();
    }
    if((pos.x >= fruit.x - raio && pos.x <= fruit.x + raio) && (pos.y >= fruit.y - raio && pos.y <= fruit.y +15)){
        fruit.x=random(30,int(larguraWin)-30);
        fruit.y=random(30,int(alturaWin)-30);
        points++;
    }
    textSize(30)
    text(points,larguraWin-30,alturaWin-20);

}

function keyPressed(){
    if(flagOver != true){
        if(keyCode == LEFT_ARROW){
            vel.x= -conVel;
            vel.y=0;
        }
        else if(keyCode == RIGHT_ARROW){
            vel.x= conVel;
            vel.y=0;
        }
        else if(keyCode == UP_ARROW){
            vel.x= 0;
            vel.y=-conVel;
        }
        else if(keyCode == DOWN_ARROW){
            vel.x= 0;
            vel.y=conVel;
        }
    }
    else{
        if(keyCode == ENTER){
            reset();
        }
    }
}

function menu(){
    let st=true;
    while(st){
        rect(200,200,150,100);
    }

}

function gameOver(){
    flagOver = true;
    fill('yellow');
    textSize(40);
    textAlign(CENTER);
    text('Game Over!',alturaWin/2,larguraWin/2);
    fill('blue');
    rect(300,340,50,50);
    textSize(12);
    fill('white');
    text('Reset',325,365);
}

function mousePressed(){
    if(flagOver && mouseX >= 300 && mouseX <= 350 && mouseY >=340 && mouseY <= 390){
        reset();
    }
}

function reset(){
    pos.x = int(larguraWin/2);
    pos.y = int(alturaWin/2);
    flagOver = false;
    points = 0;
}