class HorzChart {
    constructor(_data) {
      this.data = _data;


        

        this.title;
        this.titleFontSize;
        this.titleYPos;
        this.xAxisTitle;
        this.yAxisTitle;
        this.axisTitleFontSize;
        this.xtitleYPos;
        this.chartWidth;
        this.chartHeight;
        this.spacing;
        this.margin;
        this.numTicks;
        this.posX;
        this.posY;
        this.tickIncrements;
        this.maxValue;
        this.numPlaces
        this.tickSpacing;
        this.barWidth;
        this.availableWidth;

        this.showValues;
        this.showLabels;
        this.rotateLabels;

        this.colors = [color('#03ecfc'), color('#ffff66'), color('#a24140'), color('#50447a'),color('#ff4dff'),color('#739458')];
       
        this.fontColor;
        this.lineColour;
        this.vertLine;


        this.tickColor;
        this.strokeThickness;
        this.fontSize;

        this.updateValues();
        this.calculateMaxValue();
    }

    updateValues() {

     

        this.title = "Title";
        this.titleFontSize = 20;
        this.titleYPos = -380;
        this.xtitleYPos = +65;
        this.title = "Ridley Scott vs Peers in Oscar Nominations";
        this.titleFontSize = 20;

        
        this.xAxisTitle = "Number of Oscar Nominations";
        this.yAxisTitle = "Directors"
        this.axisTitleFontSize = 16;

        this.chartWidth = 300;
        this.chartHeight = 300;
        this.spacing = 5;
        this.margin = 30;
        this.numTicks = 10;
        this.tickIncrements;
        this.maxValue;
        this.numPlaces = 0;

        this.vertLineColour = 215, 219, 222;

        this.lineColour = (255);
        this.fontColor = (255);
        this.tickColor = (255);
        this.strokeThickness = 1;
        this.fontSize = 14;

        //Controls
        this.showValues = true;
        this.showLabels = true;
        this.rotateLabels = true;


        this.tickSpacing = this.chartHeight / this.numTicks;
        this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1));
        this.barWidth = this.availableWidth / this.data.length;
    }

    calculateMaxValue() {
        let listValues = this.data.map(function (x) {
            return x.nomins
        })
        this.maxValue = max(listValues);
        this.tickIncrements = this.maxValue / this.numTicks;
    }

    render() {

        push()
        translate(this.posX, this.posY);

        this.drawTitle();
        this.drawTicks();
        this.drawVerticalLines();
        this.drawRects();
        this.drawAxis();
        pop()
    }

    drawTitle() {
        //Main Title
        fill(this.fontColor);
        textAlign(CENTER, CENTER)
        textSize(this.titleFontSize);
        text(this.title, this.chartWidth / 2, this.titleYPos)
    
        //X Axis Title
        fill(this.fontColor);
        textAlign(CENTER, CENTER)
        textSize(this.titleFontSize);
        text(this.xAxisTitle, this.chartWidth / 2, this.xtitleYPos)

        //Y Axis Title
        push()
        rotate(PI/-2)
        fill(this.fontColor);
        textAlign(CENTER, CENTER)
        textSize(this.titleFontSize);
        text(this.yAxisTitle, this.chartHeight / 2,-180)
        pop()
    
    }

    scaleData(num) {
        return map(num, 0, this.maxValue, 0, this.chartHeight);
    }

    drawAxis() {
        //chart
        stroke(this.lineColour);
        strokeWeight(this.strokeThickness);
        line(0, 0, 0, -this.chartHeight); //y
        line(0, 0, this.chartWidth, 0); //x
    }

    drawTicks() {
        for (let i = 0; i <= this.numTicks; i++) {
            //ticks
            stroke(this.tickColor);
            strokeWeight(this.strokeThickness)
            line(this.tickSpacing * i, 0, this.tickSpacing * i, 20);

            //numbers (text)
            if (this.showValues) {
                fill(this.fontColor);
                noStroke();
                textSize(this.fontSize);
                textAlign(CENTER, CENTER);
                text((i * this.tickIncrements).toFixed(this.numPlaces), this.tickSpacing * i, 30);
            }
        }
    }

    // This function draws vertical lines with a loop similar to the drawTicks loop
    drawVerticalLines() {
        for (let i = 0; i <= this.numTicks; i++) {

            //Vertical line
            stroke(this.vertLineColour);
            strokeWeight(1)
            line(this.tickSpacing * i, 0, this.tickSpacing * i, -this.chartWidth);


        }
    }
          // In this chart, the width value in rect is passing in values for nomins from the array
          // Which draws the bars across the chart
    drawRects() {
        push();
        translate(0, -this.margin);
        for (let i = 0; i < this.data.length; i++) {
            let colorNumber = i % 6;

            //bars
            fill(this.colors[colorNumber]);
            noStroke();


            rect(0, (this.barWidth + this.spacing) * -i, this.scaleData(this.data[i].nomins), -this.barWidth);

            //numbers (text)
            noStroke();
            fill(this.fontColor)
            textSize(this.fontSize);
            textAlign(RIGHT, CENTER);
            text(this.data[i].nomins, this.scaleData(this.data[i].nomins) + 20, ((this.barWidth + this.spacing) * -i) - this.barWidth / 2);

            //text
            if (this.showLabels) {
                if (this.rotateLabels) {
                    push()
                    noStroke();
                    textSize(this.fontSize);
                    textAlign(RIGHT, CENTER);
                    translate(-10, ((this.barWidth + this.spacing) * -i) - this.barWidth / 2);
                   
                    fill(this.fontColor)
                    text(this.data[i].name, 0, 0);
                    pop()
                } else {

                    noStroke();
                    fill(this.fontColor)
                    textSize(this.fontSize);
                    textAlign(CENTER, BOTTOM);
                    text(this.data[i].name, -30, (-(this.barWidth + this.spacing) * i) + this.barWidth / 2);
                }
            }


        }
        pop()
    }
}