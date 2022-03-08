class ScatterPlot {
    constructor(_data,_legend){
    this.data = _data
    this.legend = _legend;
   
        
        this.chartWidth ;
        this.chartHeight ;
        this.spacing;
        this.margin;
        this.numTicks;
        this.posX ;
        this.posY;
        this.tickIncrements;
        this.maxValue;
        this.numPlaces;
        this.tickSpacing;
        this.barWidth;
        this.availableWidth;
        this.chartTitle;
        this.titleYPos;
        this.XtitleYPos;
        this.titleFontSize;
        this.titleFontSize;
        this.xAxisTitle;
        this.yAxisTitle;
        this.axisTitlesFontSize;
        this.fontColor;
   
        this.tickColor ;
        this.strokeThick ;
        this.lineColour;
        this.ellipsexp;


        this.showValues = true;
        this.showLabels = true;
        this.rotateLabels = true;

        this.colors = [color('#7e1340'), 
        color('#AFE1AF'), 
        color('#66a9cb'),  
        color('#edb60d'), 
        color('#d48ce5'), 
        color('#f7931e') , 
        color('#a24140') , 
        color('#b439bf'), 
        color('#d7856a'), 
        color('#d4262f'), 
        color('#739458'), 
        color('#03ecfc')
         ];
        
        this.updateValues();
    
    }
updateValues(){

    this.chartWidth = 300;
    this.chartHeight = 300;
    this.numTicks = 8;

    this.tickSpacing = this.chartHeight / this.numTicks;

    this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1));
    this.barWidth = this.availableWidth / this.data.length;

    
    this.spacing = 5;
    this.margin = 30;

    this.posX = 640;
    this.posY = 0;
    this.tickIncrements;

    this.numPlaces = 0;
  
  
  
    this.chartTitle = "Ridley Scott Films, user vs critic scores vs income"
    this.titleYPos = -410;
    this.XtitleYPos = +85;
    this.titleFontSize = 18;
    this.ellipsexp = "Ellipse radius = Income"

    this.xAxisTitle = "Critic Score"
    this.yAxisTitle = "User Score"
    this.axisTitlesFontSize;
    this.fontColor = 255;
    this.tickColor = 255;
    this.strokeThick = 2;
    this.lineColour = 255;


    // The max values for critic score and user score are calculated here.
  
    let listValuesX = this.data.map(function (x) {
        return x.criticScore
    })
    this.maxValueX = max(listValuesX);
    this.tickIncrementsX = this.maxValueX / this.numTicks;

    let listValuesY = this.data.map(function (x) {
        return x.userScore
    })
    this.maxValueY = max(listValuesY);
    this.tickIncrementsY = this.maxValueY / this.numTicks;

    
        

}
// These functions scale the x and y data by mapping them to a new range

scaleXdata(num) {
    return map(num, this.maxValueX, 0, this.chartWidth,0);
}

scaleYdata(num) {
    return map(num, this.maxValueY, 0, this.chartHeight,0);
}


render() {

    push()
    translate(this.posX, this.posY);

    
   
   
   
 
    this.drawAxis();
    this.drawTicks();
    this.drawEllipse();
    this.drawLegend();
    this.drawTitles();
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
        text(this.legend[i].name, this.chartWidth + this.margin + 15, this.tickSpacing * i);
        fill(this.legend[i].colour)
        ellipse(this.chartWidth + this.margin , this.tickSpacing * i  , 10, 10)
    }
    pop();
}

drawTitles(){
    //Chart Title
    fill(255);
    textAlign(CENTER,CENTER);
    textSize(this.titleFontSize)
    text(this.chartTitle, this.chartWidth/2, this.titleYPos)

    //X Axis Title
    fill(255)
    textAlign(CENTER,CENTER);
    text(this.xAxisTitle, this.chartWidth/2, this.XtitleYPos)


    //Ellipse Exp
    fill(255);
    text(this.ellipsexp, this.chartWidth + 110 , -this.chartHeight - 50)

    
    //Y Axis Title 
    rotate(PI / -2)

    textAlign(CENTER, LEFT);
    text(this.yAxisTitle, this.chartWidth /2 - 50, -100)

    
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
        //Y AXIS TICKS
        stroke(this.tickColor);
        strokeWeight(1)
        line(0, this.tickSpacing * -i, -10, this.tickSpacing * -i);


        //Y AXIS TICKS
        stroke(this.tickColor);
        strokeWeight(this.strokeThick)
        line(this.tickSpacing * i, 0, this.tickSpacing * i, 20);

        //numbers (text)
        if (this.showValues) {
            fill(this.fontColor);
            noStroke();
            textSize(14);
            textAlign(RIGHT, CENTER);
            text((i * this.tickIncrementsY).toFixed(this.numPlaces), -15, this.tickSpacing * -i);


            //X AXIS TICKS
            fill(this.fontColor);
            noStroke();
            textSize(this.fontSize);
            textAlign(CENTER, CENTER);
            text((i * this.tickIncrementsX).toFixed(this.numPlaces),this.tickSpacing * i, 30);

        }
    }
}

// In this function the loop itirates through the array of data and draws an ellipse.
// I initialised and assigned the scaled data values to variables
// for the x and y positions of each ellipse, which are using user scores and critic scores
// Aswell as the radius of each ellipse, which is based on gross income
drawEllipse(){
push();
translate(this.margin,0);
for (let i = 0; i < this.data.length; i++) {

    let colorNumber = i % 12;

    fill(this.colors[colorNumber]);
    let ellipseX = this.scaleXdata(this.data[i].userScore);
    let ellipseY = this.scaleYdata(this.data[i].criticScore);
    let ellipseR = this.scaleYdata(this.data[i].gross)

    ellipse(ellipseX, -ellipseY, ellipseR/15);
}
}
}