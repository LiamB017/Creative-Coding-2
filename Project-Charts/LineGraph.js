class LineGraph {
    constructor(_data){
        this.data = _data;
       
        this.chartWidth ;
        this.chartHeight ;
        this.spacing = 5;
        this.margin;
        this.numTicks = 10;
        this.posX;
        this.posY; 
        this.tickIncrements;
        this.maxValue;
        this.numPlaces = 0;
        this.tickSpacing;
        this.barWidth;
        this.availableWidth;
        this.chartTitle;
        this.titleYPos;
        this.titleFontSize;
        this.titleFontSize;
        this.xAxisTitle;
        this.yAxisTitle;
        this.axisTitlesFontSize;
        this.fontColor;
        this.tickColor;
        this.strokeThick


        this.showValues = true;
        this.showLabels = true;
        this.rotateLabels = true;
        
        this.updateValues();
        this.calculateMaxValue();
    }
    updateValues() {
        this.margin = 1;
        this.chartHeight = 300;
        this.chartWidth = 300;
        this.tickSpacing = this.chartHeight / this.numTicks;
        this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1));
        this.barWidth = this.availableWidth / this.data.length;
        this.tickIncrements = 11
        this.chartTitle = "Number of Ridley Scott Projects 2000-2010"
        this.titleFontSize = 20;
        this.titleYPos = -280

        this.xAxisTitle = "Year (2000-2010)"
        this.yAxisTitle = "No. of Projects"
        this.xAxisPos = -50;


        this.posX = 630;
        this.posY = -700
        this.tickColor = 255;
        this.fontColor = 255;
        this.strokeThick = 2;

        let listValuesY = this.data.map(function (x) {
            return x.noMovies
        })
        this.maxValueY = max(listValuesY);
        this.tickIncrementsY = this.maxValueY / this.numTicks;
    
        let listValuesX = this.data.map(function (x) {
            return x.year
        })
        this.maxValueX = max(listValuesX);
        this.tickIncrementsX = this.maxValueX / this.numTicks;

    }
    scaleXdata(num) {
        return map(num, this.maxValueX, 0, this.chartWidth,0);
    }
    
    scaleYdata(num) {
        return map(num, this.maxValueY, 0, this.chartHeight,0);
    }
    calculateMaxValue() {
        let listValues = this.data.map(function(x) { return x.budget })
        this.maxValue = max(listValues);
        this.tickIncrements = this.maxValue / this.numTicks;
    }
    scaleData(num) {
        return map(num, 0, this.maxValue, 0, this.chartHeight);
    }

    render() {

        push()
        translate(this.posX, this.posY);

        
        
        this.drawAxis();
        this.drawEllipse();
        this.drawLines();
       this.drawTicks();
        this.drawTitles();
       
        
        pop()
}

drawTicks() {
    for (let i = 0; i <= this.numTicks; i++) {
        //Y AXIS TICKS
        stroke(this.tickColor);
        strokeWeight(1)
        line(0, this.tickSpacing * -i, -10, this.tickSpacing * -i);


        //Y AXIS TICKS
        stroke(this.fontColor);
        strokeWeight(this.strokeThick)
        line(this.tickSpacing * i, 0, this.tickSpacing * i, 20);

        //numbers (text)
        if (this.showValues) {
            fill(this.fontColor);
            noStroke();
            textSize(14);
            textAlign(RIGHT, CENTER);
            text((i * this.tickIncrementsY).toFixed(this.numPlaces), -15, this.tickSpacing * -i);


            //X AXIS TEXT
            fill(this.fontColor);
            noStroke();
            textSize(this.fontSize);
            textAlign(CENTER, CENTER);
            text((i * this.tickIncrementsX).toFixed(this.numPlaces),this.tickSpacing * i, 30);

        }
    }
}
// In this function I initalised variables as the start points for an ellipse with an x and y pos
// In the loop newellipse variables are assigned the scaled relevant data
// The line then draws using the coordinates of the previous ellipse variables
// and the new ellipse variables
// Once the loop runs again, the start ellipse coordinates are now the previous ellipes coordinates
//This loop repeats until all lines are drawn
drawLines() {
    push();
    translate(this.margin, 0);
    let prevellipseX = 0;
    let prevellipseY = 3;
   
    for (let i = 0; i < this.data.length ; i++) {
        fill(255);
     let newellipseX = this.scaleXdata(this.data[i].year);
     let newellipseY = this.scaleYdata(-this.data[i].noMovies);
   line(prevellipseX,prevellipseY,newellipseX,newellipseY)
   prevellipseX = newellipseX;
   prevellipseY = newellipseY;
   
}
pop();
}

drawAxis() {
    //chart
    stroke(255, 180);
    strokeWeight(1);
    line(0, 0, 0, -this.chartHeight); //y
    line(0, 0, this.chartWidth, 0); //x
}
drawTitles(){
    //Chart Title
    fill(255);
    textAlign(CENTER,CENTER);
    textSize(this.titleFontSize)
    text(this.chartTitle, this.chartWidth/2, this.titleYPos - 100)

    //X Axis Title
    fill(255)
    textAlign(CENTER,CENTER);
    text(this.xAxisTitle, this.chartWidth/2, this.titleYPos + 350)

    //Y Axis Title 
    rotate(PI / -2)

    textAlign(CENTER, LEFT);
    text(this.yAxisTitle, this.chartHeight/2, -70)
}

// In this function the loop itirates through the array of data and draws an ellipse.
// I initialised and assigned the scaled data values to variables
// for the x and y positions of each ellipse, which are using the year value and noMovies value

drawEllipse() {
    push();
    translate(this.margin, 0);
    for (let i = 0; i < this.data.length; i++) {
       
      

        //ellipse
        fill(255);
       
        let ellipseX = this.scaleXdata(this.data[i].year);
        let ellipseY = this.scaleYdata(this.data[i].noMovies);
        ellipse(ellipseX,-ellipseY,5,5)

       

        // //text
        // if (this.showLabels) {
        //     if (this.rotateLabels) {
        //         push()
        //         noStroke();
        //         textSize(14);
        //         textAlign( CENTER);
        //         translate(((this.barWidth + this.spacing) * i) + this.barWidth / 2, 10);
        //         rotate(PI / 2)
        //         text(this.data[i].text, 0, 0);
        //         pop()
        //     } else {

        //         noStroke();
        //         fill(255);
        //         textSize(14);
        //         textAlign(CENTER, BOTTOM);
        //         text(this.data[i].noMovies, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, 20);
        //     }
        // }


    }
    pop()
}
}
