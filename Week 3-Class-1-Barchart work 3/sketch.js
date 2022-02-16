let chartWidth = 300;
let chartHeight = 300;


let data = [
    {name:"Oranges", total:63},
{name:"Bananas", total:33},
{name:"Pears", total:21},
{name:"Apples", total:43}
];

let listValues = data.map(function(x) {return x.total})
console.log(listValues)

let scaledData = [];
let spacing = 5;
let margin = 10;
let numTicks = 4;
let posX = 100;
let posY = 350;
let tickIncrements;
let maxValue;
let colors;
let numPlaces = 1;
let showValues = true;
let showLabels = true;
let rotateLabels = true;

let tickSpacing = chartHeight / numTicks; //space between ticks on  the left 
let availableWidth = chartWidth - (margin * 2) - (spacing * (data.length - 1)); //available space for bars
let barWidth = availableWidth / data.length; //bar width

function setup() {
    createCanvas(500,500);
    background(0);
    colors = [color('#ffe066'), 
    color('#fab666'), 
    color('#f68f6a'),
     color('#f3646a'),]

    maxValue = max(listValues);
    tickIncrements = (maxValue / numTicks);

    for(let i=0; i<data.length; i++){
        let tempVal = map(data[i].total, 0, maxValue, 0, chartHeight);
        scaledData.push(tempVal);
    }
}

function draw() {
    background(0);
    

    translate(posX, posY);
    
    stroke(255,180);
    strokeWeight(1);
    //y axis
    line(0, 0, 0, -chartHeight);
    // x axis
    line(0, 0, chartWidth, 0);

    for(let i=0; i<=numTicks; i++){
        //ticks
        stroke(255, 100);
        strokeWeight(1);
        line(0, tickSpacing * -i, -10, tickSpacing * -i);

         //horizontal lines
         stroke(255, 50);
         strokeWeight(1);
         line(0, tickSpacing * -i, chartWidth, tickSpacing * -i);

        //numbers (text)
        fill(255, 200);
        noStroke();
        textSize(11);
        textAlign(RIGHT, CENTER);
        text((i * tickIncrements).toFixed(numPlaces), -15, tickSpacing * -i);
    }

    translate(margin, 0);
    for(let i=0; i<scaledData.length; i++){
        let colorNumber = i % 4;

        //bars
        fill(colors[colorNumber]);
        noStroke();
        rect((barWidth + spacing) * i, 0, barWidth, -scaledData[i]);

        //numbers (text)
        if(showValues){

        noStroke();
        fill(255);
        textSize(16);
        textAlign(CENTER, BOTTOM);
        text(data[i].total, ((barWidth + spacing) * i) + barWidth / 2, -scaledData[i]);
        }


        //text
        if(showLabels){
            if(rotateLabels){
                push();
                noStroke();
                fill(255);
                textSize(14);
                textAlign(LEFT, CENTER);
                translate(((barWidth + spacing) * i) + barWidth / 2, 10);
                rotate(PI/2);
            
                text(data[i].name,0,0 );
                pop();
            } else {
                noStroke();
                fill(255);
                textSize(14);
                textAlign(CENTER, BOTTOM);
                text(data[i].name, ((barWidth + spacing) * i) + barWidth / 2, 20);
            }
      
        }
    }
}