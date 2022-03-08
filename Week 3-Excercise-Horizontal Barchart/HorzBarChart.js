class HorzBarChart {
    constructor(_data) {
        this.title = "Horizontal Chart";
        this.data = _data;
        this.chartWidth = 300;
        this.chartHeight = 300;
        this.spacing = 10;
        this.margin = 0;
        this.numTicks = 10;
        this.posX = 50;
        this.posY = 400;
        this.tickIncrements;
        this.maxValue;
        this.numPlaces = 0;
        this.tickSpacing;
        this.barWidth;
        this.barHeight = -20
        this.availableWidth;
        this.showValues = true;
        this.showLabels = true;
        this.rotateLabels = true;
        this.nameSpacing = -80;

        this.colors = [color('#ffe066'), color('#fab666'), color('#f68f6a'), color('#f3646a')];

        this.updateValues();
        this.calculateMaxValue();
    }

    updateValues() {
        this.tickSpacing = this.chartHeight / this.numTicks;
        this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1));
        this.barWidth = this.availableWidth / this.data.length;
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


        this.scaleData();
        this.drawRects();
        this.drawAxis();
        this.drawTicks();

        pop()
    }

    scaleData(num) {
        return map(num, 0, this.maxValue, 0, this.chartHeight);
    }

    drawAxis() {
        //chart
        stroke(255, 180);
        strokeWeight(1);
        line(0, 0, 0, -this.chartHeight); //y
        line(0, 0, this.chartWidth, 0); //x
    }

    drawTicks() {
        for (let i = 0; i <= this.numTicks; i++) {
            //ticks
            stroke(255);
            strokeWeight(1)
            line(-this.tickSpacing * -i, 0, -this.tickSpacing * -i, -10);

            //numbers (text)
            if (this.showValues) {
                fill(255, 200);
                noStroke();
                textSize(14);
                textAlign(RIGHT, CENTER);
                text((i * this.tickIncrements).toFixed(this.numPlaces), (-this.tickSpacing * -i) + 5, 15);
            }
        }
    }




    drawRects() {
        push();
        translate(this.margin, -165);
        for (let i = 0; i < this.data.length; i++) {
            let colorNumber = i % 4;

            //bars
            fill(this.colors[colorNumber]);
            noStroke();
            rect(0, (this.barWidth + this.spacing) * i, -this.scaleData(-this.data[i].total), this.barHeight);

            //text
            push()
            noStroke();
            textSize(10);
            textAlign(CENTER);
            translate(-10, (this.barWidth + this.spacing) * i);
            rotate(PI / 2)
            text(this.data[i].name, -10, 20);
            pop()


            //numbers (text)
            push();

            fill(255)
            noStroke();
            textSize(14);
            textAlign(LEFT, TOP);
            text(this.data[i].total, this.scaleData(this.data[i].total), ((this.barWidth + this.spacing) * i) - this.barWidth / 2.5);

            pop();



        }
        pop()
    }
}