
class StackedBarChart {
    constructor(_data, _legend) {
        this.data = _data;
        this.legend = _legend;

        this.title;
        this.titleFontSize;

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


        this.colors = [color('#50C878'), color('#FF5733'), color('#C70039'), color('#9cc177')];

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


        this.title = "Amount of Fruit sold by Countries";
        this.titleFontSize = 20;


        this.xAxisTitle = "Countries";
        this.yAxisTitle = "Fruit Totals"
        this.axisTitleFontSize = 12;



        this.spacing = 5;
        this.margin = 15;
        this.numTicks = 10;
        this.numPlaces = 0;

        this.horLineColour = 215, 219, 222;
        this.lineColour = (33, 37, 41)
        this.fontColor = (33, 37, 100);
        this.tickColor = (33, 37, 41);
        this.strokeThickness = 1;
        this.fontSize = 14;

        this.showValues = true;
        this.showLabels = true;
        this.showText = false;
        this.rotateLabels = true;






    }

    calculateMaxValue() {
        let listValues = this.data.map(function (x) {
            return x.total
        })
        this.maxValue = max(listValues);
        this.tickIncrements = this.maxValue / this.numTicks;
    }

    render() {

        push()
        translate(this.posX, this.posY);

        this.drawLegend();
        this.drawTitle();
        this.drawTicks();
        this.drawHorizontalLines();
        this.drawRects();
        this.drawAxis();
        pop()
    }


    drawLegend() {
       
        push();
        translate(0, -this.chartHeight);
        for (let i = 0; i < this.legend.length; i++) {
            noStroke();
            fill(this.fontColor);
            textSize(14);
            textAlign(LEFT, CENTER);
            text(this.legend[i].name, this.chartWidth + this.margin, this.tickSpacing * i);
            fill(this.legend[i].colour)
            ellipse(this.chartWidth + this.margin -10, this.tickSpacing * i, 10, 10)
        }
        pop();

        
    }


    drawTitle() {
        //Main Title
        fill(this.fontColor);
        textAlign(CENTER, CENTER)
        textSize(this.titleFontSize);
        text(this.title, this.chartWidth / 2, -this.chartHeight - 50)

        //X Axis Title
        push();
        translate(10,35)
        fill(this.fontColor);
        textAlign(CENTER, TOP , TOP)
        textSize(this.titleFontSize);
        text(this.xAxisTitle, this.chartWidth / 2, this.chartHeight / 2 - 50)
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

    scaleData(num) {
        return map(num, 0, this.maxValue, 0, this.chartHeight);
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

    drawRects() {
        push();
        translate(this.margin, 0);
        for (let i = 0; i < this.data.length; i++) {

            //Stack loop
            push();
            for (let j = 0; j < this.data[i].values.length; j++) {
                let colorNumber = j % 4;


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
            text(this.data[i].total, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, this.scaleData(-this.data[i].total));
            }

            //text
            if (this.showLabels) {
                if (this.rotateLabels) {
                    push()
                    noStroke();
                    textSize(14);
                    textAlign(LEFT, CENTER);
                    translate(((this.barWidth + this.spacing) * i) + this.barWidth / 2, 10);
                    rotate(PI / 4)
                    text(this.data[i].country, 0, 0);
                    pop()
                } else {

                    noStroke();
                    fill(255);
                    textSize(14);
                    textAlign(CENTER, BOTTOM);
                    text(this.data[i].country, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, 20);
                }
            }


        }
        pop()
    }
}