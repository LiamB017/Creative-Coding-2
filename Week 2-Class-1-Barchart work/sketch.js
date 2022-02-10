let chartWidth = 400;
let chartHeight = 400;
let data = [230,280,120,250]
let spacing = 5;
let margin = 60;
let numTicks = 10;
let tickSpacing = chartHeight/numTicks;
let lineSize = -10;
let numCounter = tickSpacing;


let availableWidth = chartWidth - (margin * 2) - (spacing * (data.length-1))
let barWidth = availableWidth / data.length;
let xbarCount  = barWidth/2;
let ybarCount = -20;
console.log(barWidth)

function setup() {
    createCanvas(500, 500);
    background(0);
}

function draw() {
    background(0);
   
    translate(50,450);

    stroke(255,200);
    strokeWeight(2);
    line(0, 0, 0, -400)
    line(0, 0, 400, 0)

    stroke(255,200);
    strokeWeight(1);
    line(0,0,-10,0)
  //  line(0, -40, -10, -10)
   // line(0, -80, -10, -80)

   

   for(let i = 0; i <= data.length; i++){
    fill(255,0,0);
    noStroke()
    textAlign(CENTER)
    text (data[i], (barWidth * i) + (margin + xbarCount), -data[i] + ybarCount);
   }

  
    for(let i = 0; i <= numTicks; i++){
        stroke(255,0,0)
        line(0, -tickSpacing * i, lineSize, -tickSpacing * i )

        fill(255,0,0);
   noStroke()
   textSize(12)
   textAlign(RIGHT, CENTER)
   text (i * numCounter, -10, -i * numCounter);
    }

    translate(margin, 0)


    for(let i = 0; i < data.length; i++){
        fill(0,200,0)
        noStroke();
        
        rect((barWidth + spacing) * i ,0, barWidth,-data[i])
    }
}