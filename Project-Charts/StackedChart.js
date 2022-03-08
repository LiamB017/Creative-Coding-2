
class StackedChart {
    constructor(_data, _legend ) {
        this.data = _data;
        this.legend = _legend;
        

        this.title;
        this.titleFontSize;
this.titleYPos;
this.XtitleYPos;
        this.xAxisTitle;
        this.yAxisTitle;
        this.axisTitleFontSize;

        this.chartWidth;
        this.chartHeight;

        this.spacing;
        this.margin;
        this.numTicks;
        this.posX;
        this.posY;
        this.tickIncrements;
        this.maxValue;
        this.numPlaces;
        this.tickSpacing;
        this.barWidth;
        this.availableWidth;

        this.showValues;
        this.showLabels;
        this.rotateLabels;


        this.colors = [color('#005faa'), color('#6ea9cd'), color('#C70039'), color('#9cc177')];

        this.horLineColour;
        this.fontColor;
        this.lineColour;



        this.updateValues();
        this.calculateMaxValue();
    }

    updateValues() {
        this.tickSpacing = this.chartHeight / this.numTicks;
        this.availableWidth = this.chartWidth - (this.margin * 1) - (this.spacing * (this.data.length - 1));
        this.barWidth = this.availableWidth / this.data.length;

        this.chartWidth = 300;
        this.chartHeight = 300;


        this.title = "Ridley Scott at the Box Office";
        this.titleFontSize = 20;
        this.titleYPos = -360
        this.XtitleYPos = 150;

        this.xAxisTitle = "Films";
        this.yAxisTitle = "Income (Million)"
        this.axisTitleFontSize = 12;



        this.spacing = 5;
        this.margin = 15;
        this.numTicks = 10;
        this.numPlaces = 0;

        this.horLineColour = 215, 219, 222;
        this.lineColour = (33, 37, 41)
        this.fontColor = 255;
        this.tickColor = (33, 37, 41);
        this.strokeThickness = 1;
        this.fontSize = 14;

        this.showValues = true;
        this.showLabels = true;
        this.showText = true;
        this.rotateLabels = true;






    }
    scaleData(num) {
        return map(num, 0, this.maxValue, 0, this.chartHeight);
    }


    calculateMaxValue() {
        let listValues = this.data.map(function (x) {
            return x.worldwide
        })
        this.maxValue = max(listValues);
        this.tickIncrements = this.maxValue / this.numTicks;
    }

   

    render() {

        push()
        translate(this.posX, this.posY);

        this.scaleData();
        this.drawTitle();
        this.drawTicks();
     
        this.drawHorizontalLines();
        this.drawRects();
        this.drawAxis();
        this.drawLegend();
        
        pop()
    }


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
}


    drawTitle() {
        //Main Title
        fill(this.fontColor);
        textAlign(CENTER, CENTER)
        textSize(this.titleFontSize);
        text(this.title, this.chartWidth / 2, this.titleYPos)

        //X Axis Title
        push();
        translate(10,35)
        fill(this.fontColor);
        textAlign(CENTER, TOP , TOP)
        textSize(this.titleFontSize);
        text(this.xAxisTitle, this.chartWidth / 2, this.XtitleYPos)
pop();
        //Y Axis Title
        push()
        rotate(PI / -2)
        fill(this.fontColor);
        textAlign(CENTER, CENTER)
        textSize(this.titleFontSize);
        text(this.yAxisTitle, this.chartWidth / 2, -50)
        pop()

    }

    

    drawAxis() {
        //chart
        stroke(this.lineColour);
        strokeWeight(1);
        line(0, 0, 0, -this.chartHeight); //y
        line(0, 0, this.chartWidth, 0); //x
    }

    drawTicks() {
        for (let i = 0; i <= this.numTicks; i++) {
            //ticks
            stroke(this.tickColor);
            strokeWeight(1)
            line(0, this.tickSpacing * -i, -10, this.tickSpacing * -i);

            //numbers (text)
            if (this.showValues) {
                fill(this.fontColor);
                noStroke();
                textSize(14);
                textAlign(RIGHT, CENTER);
                text((i * this.tickIncrements).toFixed(this.numPlaces), -15, this.tickSpacing * -i);
            }
        }
    }

    drawHorizontalLines() {
        for (let i = 0; i <= this.numTicks; i++) {

            //horizontal line
            stroke(this.horLineColour);
            strokeWeight(1)
            line(0, this.tickSpacing * -i, this.chartWidth, this.tickSpacing * -i);


        }
    }


    // For the stacked chart, a loop within a loop is written. For each object in the array
    // 2 bars are drawn, the loop then itirates through the next 2 bars and so on.
    // The 2nd loop checks the length of the values and draws the amount of rectangles based on this
    // At the end of the loop a translate allows the next bar to be drawn at the end of the first bar
    drawRects() {
        push();
        translate(this.margin, 0);
        for (let i = 0; i < this.data.length; i++) {

            //Stacked loop
            push();
            for (let j = 0; j < this.data[i].values.length; j++) {
                let colorNumber = j % 2;


                fill(this.colors[colorNumber]);
                noStroke();
                rect((this.barWidth + this.spacing) * i, 0, this.barWidth, this.scaleData(-this.data[i].values[j]));
                translate(0, this.scaleData(-this.data[i].values[j]))
            }
            pop();



            //bars



            //numbers (text)
            if (this.showText) {
            noStroke();
            fill(this.fontColor);
            textSize(16);
            textAlign(CENTER, BOTTOM);
            text(this.data[i].worldwide, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, this.scaleData(-this.data[i].total));
            }

            //text
            if (this.showLabels) {
                if (this.rotateLabels) {
                    push()
                    noStroke();
                    fill(this.fontColor)
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