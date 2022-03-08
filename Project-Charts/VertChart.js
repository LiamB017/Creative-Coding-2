class VertChart {
    constructor(_data, _legend) {
        this.data = _data;
        this.legend = _legend;

        this.chartWidth ;
        this.chartHeight ;
        this.spacing = 5;
        this.margin = 30;
        this.numTicks = 10;
        this.posX = 300;
        this.posY = 400;
        this.tickIncrements;
        this.maxValue;
        this.numPlaces = 0;
        this.tickSpacing;
        this.barWidth;
        this.availableWidth;
        this.chartTitle;
        this.titleYPos;
        this.xtitleYPos;
        this.titleFontSize;
        this.titleFontSize;
        this.xAxisTitle;
        this.yAxisTitle;
        this.axisTitlesFontSize;
        this.fontColor;


        this.showValues = true;
        this.showLabels = true;
        this.rotateLabels = true;

        this.colors = [color('#AFE1AF'), 
        color('#AFE1AF'), 
        color('#f3646a'),  
        color('#f3646a'), 
        color('#f3646a'), 
        color('#AFE1AF') , 
        color('#AFE1AF') , 
        color('#AFE1AF'), 
        color('#AFE1AF'), 
        color('#f3646a'), 
        color('#f3646a'), 
        color('#AFE1AF'), 
        color('#AFE1AF')    ];

        this.updateValues();
        this.calculateMaxValue();
    }

    updateValues() {
        this.tickSpacing = this.chartHeight / this.numTicks;
        this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1));
        this.barWidth = this.availableWidth / this.data.length;

        this.chartTitle = "Ridley Scott Film Budgets "
        this.titleFontSize = 20;
        this.titleYPos = -380;
        this.xtitleYPos = -280;

        this.xAxisTitle = "Films"
        this.yAxisTitle = "Budget (Million)"
        this.xAxisPos = -50;

        this.fontColor = (255);

    }
// This function calculates the max value of the budget property of my data.
// Tick Increments is used by dividing the max value by the number of ticks 
    calculateMaxValue() {
        let listValues = this.data.map(function(x) { return x.budget })
        this.maxValue = max(listValues);
        this.tickIncrements = this.maxValue / this.numTicks;
    }


    //The render function calls all functions required to draw the chart
    render() {

        push()
        translate(this.posX, this.posY);

        this.drawLegend();
        this.drawTicks();
        this.drawHorizontalLines();
        this.drawRects();
        this.drawAxis();
        this.drawTitles();
        
        pop()
    }

    // This function itirates through the legend array and draws the relevant text and colored shape
    drawLegend() {
       
        push();
        translate(0,-this.chartHeight);
        for (let i = 0; i < this.legend.length; i++) {
            
            noStroke();
            fill(this.fontColor);
            textSize(14);
            textAlign(LEFT, CENTER);
            text(this.legend[i].name, this.chartWidth + this.margin, this.tickSpacing * i);
            fill(this.legend[i].colour)
            rect(this.chartWidth + this.margin -15, this.tickSpacing * i - 5, 10, 10)
        }
        pop();

        
    }

// This function is used to scale data down when drawing the bars
// The map function is used to map the passed in data to a new range
    scaleData(num) {
        return map(num, 0, this.maxValue, 0, this.chartHeight);
    }

  // This function uses lines and the chart variables to draw the axis.

    drawAxis() {
        //chart
        stroke(255, 180);
        strokeWeight(1);
        line(0, 0, 0, -this.chartHeight); //y
        line(0, 0, this.chartWidth, 0); //x
    }

    // In this function, a loop itirates until i is more than or equal to numTicks and draws ticks
    // on the axis according to passed in variables
    drawTicks() {
        for (let i = 0; i <= this.numTicks; i++) {
            //ticks
            stroke(255);
            strokeWeight(1)
            line(0, this.tickSpacing * -i, -10, this.tickSpacing * -i);

            //numbers (text)
            if (this.showValues) {
                fill(255, 200);
                noStroke();
                textSize(14);
                textAlign(RIGHT, CENTER);
                text((i * this.tickIncrements).toFixed(this.numPlaces), -15, this.tickSpacing * -i);
            }
        }
    }

    //This function draws the titles required for the chart

    drawTitles(){
        //Chart Title
        fill(this.fontColor);
        textAlign(CENTER,CENTER);
        textSize(this.titleFontSize)
        text(this.chartTitle, this.chartWidth/2, this.titleYPos)

        //X Axis Title
        fill(this.fontColor)
        textAlign(CENTER,CENTER);
        text(this.xAxisTitle, this.chartWidth/2, this.xtitleYPos + 450)

        //Y Axis Title, rotated by PI divided by -2
        rotate(PI / -2)

        textAlign(CENTER, LEFT);
        text(this.yAxisTitle, this.chartHeight/2, -70)
    }
    

// This function draws horizontal lines with a loop similar to the drawTicks loop
    drawHorizontalLines() {
        for (let i = 0; i <= this.numTicks; i++) {

            //horizontal line
            stroke(255, 50);
            strokeWeight(1)
            line(0, this.tickSpacing * -i, this.chartWidth, this.tickSpacing * -i);


        }
    }

    // This function draws the bars using the passed in data
    drawRects() {
        push();
        translate(this.margin, 0);
        // The loop itirates through the array of objects and draws each object using the passed in values
        for (let i = 0; i < this.data.length; i++) {
           
            let colorNumber = i % 8;

            //bars
            fill(this.colors[colorNumber]);
            noStroke();
            rect((this.barWidth + this.spacing) * i, 0, this.barWidth, this.scaleData(-this.data[i].budget));

            //numbers (text)
            noStroke();
            fill(255);
            textSize(16);
            textAlign(CENTER, BOTTOM);
            text(this.data[i].budget, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, this.scaleData(-this.data[i].budget));

            //text
            if (this.showLabels) {
                if (this.rotateLabels) {
                    push()
                    noStroke();
                    textSize(14);
                    textAlign(LEFT, CENTER);
                    translate(((this.barWidth + this.spacing) * i) + this.barWidth / 2, 10);
                    rotate(PI / 2)
                    text(this.data[i].name, 0, 0);
                    pop()
                } else {

                    noStroke();
                    fill(255);
                    textSize(14);
                    textAlign(CENTER, BOTTOM);
                    text(this.data[i].name, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, 20);
                }
            }


        }
        pop()
    }
}