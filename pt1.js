const widWindow = 800;
const heiWindow = 800;
let div=1;
let state = true;
function setup(){
    createCanvas(widWindow,heiWindow);
}

function draw(){
    background(random(0,120),random(0,255),random(0,255));
    let x=widWindow/2+30*sin(TWO_PI*div);
    let y=widWindow/2+30*cos(TWO_PI*div);
    let theta;
    for(let i=0;i<=div && state;i++){
        theta= TWO_PI*i/div;
        strokeWeight(5)
        line(x,y, widWindow*sqrt(2)*cos(theta) , widWindow*sqrt(2)*sin(theta));
        stroke(int(div));
    }
    noStroke();
    ellipse(x, y, 90);
    fill(color('yellow'));
    div+=0.039;
    if(div>=80)
        div=1;
}