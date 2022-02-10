let chartWidth = 400;
let chartHeight = 400;
let data = [50, 100, 120];
let dataLabel = ["Oranges","Bananas","Apples"]
let spacing = 5;
let margin = 60;
let numTicks = 10;
let tickSpacing = chartHeight / numTicks;
let tickIncrements;
let lineSize = -10;
let numCounter = tickSpacing;



let availableWidth = chartWidth - margin * 2 - spacing * (data.length - 1);
let barWidth = availableWidth / data.length;
let xbarCount = barWidth / 2;
let ybarCount = -20;
console.log(barWidth);

let scaleData = [];
let maxValue;

console.log(Math.max(...data));
console.log(data);
console.log(scaleData);

function setup() {
  createCanvas(500, 500);
  background(0);

  maxValue = max(data);
   tickIncrements = Math.round(maxValue / numTicks);

  for (let i = 0; i < data.length; i++) {
    let tempVal = map(data[i],0,maxValue,0,chartHeight)
    scaleData.push(tempVal);
  }
}

function draw() {
  background(0);

  translate(50, 450);

  stroke(255, 200);
  strokeWeight(2);
  line(0, 0, 0, -chartHeight);
  line(0, 0, chartWidth, 0);

  stroke(255, 200);
  strokeWeight(1);
  line(0, 0, -10, 0);
  //  line(0, -40, -10, -10)
  // line(0, -80, -10, -80)

  for (let i = 0; i <= data.length; i++) {
    fill(255, 0, 0);
    noStroke();
    textAlign(CENTER);
    text(data[i], barWidth * i + (margin + xbarCount), -data[i] + ybarCount);
  }

  for (let i = 0; i <= numTicks; i++) {
    stroke(255, 0, 0);
    line(0, -tickSpacing * i, lineSize, -tickSpacing * i);

    fill(255, 0, 0);
    noStroke();
    textSize(12);
    textAlign(RIGHT, CENTER);
    text(i * tickIncrements, -15, -i * numCounter);
  }

  translate(margin, 0);

  for (let i = 0; i < scaleData.length; i++) {
    fill(0, 200, 0);
    noStroke();

    rect((barWidth + spacing) * i, 0, barWidth, -scaleData[i]);

  
    noStroke();
    fill(255);
    textSize(16);
    textAlign(RIGHT);
    text(dataLabel[i], ((barWidth + spacing) * i + 30) + barWidth / 2, 13);
    text(data[i], ((barWidth + spacing ) * i + margin),-scaleData[i] - 10);
  }
}
