
let boxHeight = 20;
let boxWidth = 20;
let spacing = 5;
let xOffset =0;
let yOffset =0;
let numBoxes = 5;

function setup(){
createCanvas(500,500)
background(0);

}

function draw(){
  drawBoxes();
}


function drawBoxes(){
    
    fill(255,0,0)
   noStroke();
        for(let i=0; i<numBoxes; i++){
            let totalSpace = boxWidth + spacing;
            rect(i*totalSpace + xOffset,yOffset,boxWidth, boxHeight);
        }
    } 


function clap(startNum, endNum){
    let loopCount = endNum - startNum
    for(let i=0;i<=loopCount;i++){
    console.log("Hi " + (startNum+i))
}
}

function addMeUp(num01,num02){
    let total = num01 + num02
    return total;
}