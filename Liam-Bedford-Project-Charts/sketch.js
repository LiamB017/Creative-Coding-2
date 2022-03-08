//Before setup, I initalise my arrays and
// populate them with data using objects that have properties and values

let vertData = [
    { name: "Alien", budget: 11, genre: "SciFi" },
    { name: "Blade Runner", budget: 28, genre: "SciFi" },
    { name: "Gladiator", budget: 103 ,genre:"Thriller" },
    { name: "Hannibal", budget: 87, genre:"Thriller" },
    { name: "Kingdom of Heaven", budget: 50, genre:"Thriller" },
    { name: "Prometheus", budget: 180, genre:"SciFi"},
    { name: "The Martian", budget:108 ,genre:"SciFi"},
    {name: "Alien Covenant", budget:97, genre:"SciFi"},
    { name: "Blade Runner 2049", budget: 150, genre:"SciFi" },
    { name: "The Last Duel", budget: 100, genre:"Thriller" },
{ name: "House of Gucci", budget: 75, genre:"Thriller"},
{ name: "Death on the Nile", budget: 90, genre:"Thriller"}
]
 
    let horzData= [
        { name: "Ridley Scott", nomins: 4 },
        { name: "Martin Scorcese", nomins: 14 },
        { name: "Stephen Spielberg", nomins: 17},
        { name: "Francis Ford Coppola", nomins: 10 },
        { name: "Quentin Tarantino", nomins: 1 },
        { name: "David Fincher", nomins: 3 }
    ]

    let stackedData = [
        {name: "Alien", domestic:62 , international:122 ,values:[62,122],worldwide:184  },
        {name: "Blade Runner", domestic:32 , international:6 , values:[32,6,],worldwide:39  },
        {name: "Gladiator", domestic:187 , international:268 , values:[187,268],worldwide:456  },
        {name: "Hannibal", domestic:165 , international:185 , values:[165,185] ,worldwide:350  },
        {name: "Kingdom of Heaven", domestic:47 , international:171 , values:[47,171],worldwide:218  },
        {name: " Prometheus", domestic:126 , international:275  , values:[126,275],worldwide:322  },
        {name: "The Martian", domestic:228 , international:425 , values:[228,425],worldwide:653  },
        {name: "Alien Covenant", domestic:74 , international:164 , values:[74,164],worldwide:238  },
        { name: "Blade Runner 2049", domestic:92 , international:166 , values:[92,166],worldwide:258 },
        { name: "The Last Duel", domestic:10 , international:19 , values:[10,19],worldwide:30 },
    { name: "House of Gucci", domestic:53 , international:97 , values:[53,97],worldwide:151},
    { name: "Death on the Nile", domestic:33 , international:68 , values:[53,68], worldwide:101}

    ]

    let stackedLegend = [
        {name: "Domestic", colour:'#005faa'},
        {name: "International", colour:'#6ea9cd'}
    ]

    let scatterData =[
        {name: "Alien", gross: 62, userScore:94 , criticScore:98   },
        {name: "Blade Runner", gross: 32, userScore:88 , criticScore:99   },
        {name: "Gladiator", gross: 187, userScore:77 , criticScore:87   },
        {name: "Hannibal", gross: 165, userScore:40 , criticScore:62   },
        {name: "Kingdom of Heaven", gross: 47, userScore:39 , criticScore:72   },
        {name: " Prometheus", gross: 126, userScore:68 , criticScore:73   },
        { name: "The Martian", gross: 228, userScore:91, criticScore:91 },
    {name: "Alien Covenant", gross: 74, userScore:55, criticScore:65},
    { name: "Blade Runner 2049", gross: 92, userScore:81, criticScore:88 },
    { name: "The Last Duel", gross: 30, userScore:83, criticScore:62 },
{ name: "House of Gucci", gross: 53, userScore:82, criticScore:64},
{ name: "Death on the Nile", gross: 33, userScore:64, criticScore:70}

        
    ]

    let scatterLegend = [
        {name: "Alien", colour:'#7e1340'  },
        {name: "Blade Runner", colour:'#AFE1AF'   },
        {name: "Gladiator", colour:'#66a9cb'   },
        {name: "Hannibal", colour:'#edb60d'   },
        {name: "Kingdom of Heaven", colour:'#d48ce5'   },
        {name: " Prometheus", colour:'#f7931e'  },
        { name: "The Martian", colour:'#a24140' },
    {name: "Alien Covenant", colour:'#b439bf'},
    { name: "Blade Runner 2049", colour:'#d7856a' },
    { name: "The Last Duel", colour:'#d4262f' },
{ name: "House of Gucci", colour:'#739458'},
{ name: "Death on the Nile", colour:'#03ecfc'}
    ]

let lineData = [
    {noMovies: "3",  year:0 , text:2001  },
    {noMovies: "2",  year:1 , text:2002 },
    {noMovies: "5",   year:2 , text:2003 },
    {noMovies: "1",   year:3  ,text:2001 },
    {noMovies: " 0 ",   year:4 , text:2001 },
    {noMovies: "2",  year:5 ,text:2001  },
    { noMovies: "3",  year:6 ,text:2001},
{noMovies: "4",  year:7,text:2001},
{ noMovies: "2", year:8 ,text:2001 },
{ noMovies: "3",  year:9 ,text:2001 },
{ noMovies: "8",  year:10 ,text:2001 }


]

    let legend = [
        {name: "SciFi", colour:'#AFE1AF'},
        {name: "Thriller/Other", colour:'#f3646a'}
       
       
        
    ]
    
    
    
    




;



let newFont;
let Vertchart;
let Horzchart;
let Stackedchart;
let Linegraph;
let Scatterplot;


function setup() {
    createCanvas(2000, 1800);

//In the setup I use each chart class to create a new chart, while passing in the relevant data
// from the corresponding array

    Vertchart = new VertChart(vertData, legend)
    Vertchart.chartWidth = 300;
    Vertchart.chartHeight = 300;
    Vertchart.posX = 200;
    Vertchart.posY = 600;
    Vertchart.updateValues();

    Horzchart = new HorzChart(horzData)
    Horzchart.chartWidth = 300;
    Horzchart.chartHeight = 200;
    Horzchart.posX = 850;
    Horzchart.posY = 600;
    Horzchart.updateValues();

    Linegraph = new LineGraph(lineData)
    Linegraph.chartWidth = 300;
    Linegraph.chartHeight = 300;
   Linegraph.posX = 600;
    Linegraph.posY = 0;
    Linegraph.updateValues();

    Stackedchart = new StackedChart(stackedData,stackedLegend)
    Stackedchart.chartWidth = 300;
    Stackedchart.chartHeight = 200;
    Stackedchart.posX = 200;
    Stackedchart.posY = 1300;
    Stackedchart.updateValues();

   

    Scatterplot = new ScatterPlot(scatterData,scatterLegend)
     Scatterplot.chartWidth = 300;
     Scatterplot.chartHeight = 300;
     Scatterplot.posX = 880;
     Scatterplot.posY = 1000;
    
   

     
}

//The preload function allows me to load in a custom font to be used in the draw function
function preload() {
    newFont = loadFont('assets/DoHyeon-Regular.ttf')
  
}
function draw() {

    background("#34495e");
  
    //For each chart, the updateValues function is called before render, so that the chart 
    // is generated using the values desired
  
    textFont(newFont);
   textSize(32)
    text("Ridley Scott's Career in Film: Charts and Graphs", width/2,50)
  
    Vertchart.updateValues();
    Vertchart.render();

      Horzchart.updateValues();
      Horzchart.render();

      Stackedchart.updateValues();
      
      Stackedchart.render();


      

      Scatterplot.updateValues();
      Scatterplot.render();

      Linegraph.updateValues();
      Linegraph.render();
    

   
}