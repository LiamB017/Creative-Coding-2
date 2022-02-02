
let boxHeight = 20;
let spacing = 5;



function setup(){
createCanvas(500,500)
background(255);
angleMode(DEGREES);


}

function draw(){
    
    drawBoxes(50,color('green'),1);
  drawBoxes(10,color('black'),2);

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