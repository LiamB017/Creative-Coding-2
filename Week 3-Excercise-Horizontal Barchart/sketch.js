let data01 = [
    { name: "Oranges", total: 34 },
    { name: "Berries", total: 18 },
    { name: "Grapes", total: 10 },
    { name: "Pineapples", total: 8 }
];

let stackedData = [
    
    {country: "USA", Apples:    100, Oranges: 100, Strawberries: 15, values:[100,100,15], total: 215},

    {country: "Ireland", Apples: 100, Oranges: 50, Strawberries: 50, values:[100,50,50], total: 200},

    {country: "New Zealand", Apples: 23, Oranges: 120, Strawberries: 56, values:[23,129,56], total: 255 },

    {country: "Portugal", Apples: 111, Oranges: 30, Strawberries: 69, values:[162,30,69], total: 261}

    ,{country: "Spain", Apples: 140, Oranges: 56, Strawberries: 23, values:[136,56,23], total: 215},

    {country: "France", Apples: 116, Oranges:70, Strawberries: 55, values:[116,70,55], total: 241 },

    {country: "Germany", Apples: 103, Oranges: 61, Strawberries: 60, values:[103,61,60], total: 224},

    {country: "Mexico", Apples: 100, Oranges: 78, Strawberries: 46, values:[100,78,46], total: 224},

    {country: "UK", Apples: 92, Oranges: 69, Strawberries: 43, values:[92,69,43], total: 204},

    {country: "Brazil", Apples: 52, Oranges: 88, Strawberries: 36, values:[52,88,36], total: 176} 


]

let legend = [
    {name: "Apples", colour:'#50C878'},
    {name: "Oranges", colour:'#FF5733'},
    {name: "Strawberries", colour:'#C70039'}
]





let chart01;
let chart02;


function setup() {
    createCanvas(800, 800);

    chart01 = new HorzBarChart(data01)
    chart01.chartWidth = 200;
    chart01.chartHeight = 200;
    chart01.posX = 200;
    chart01.posY = 400;
    chart01.updateValues();

    chart02 = new StackedBarChart(stackedData,legend)
    chart02.chartWidth = 200;
    chart02.chartHeight = 200;
    chart02.posX = 500;
    chart02.posY = 400;
    chart02.updateValues();

   

}


function draw() {
    background(50);
    chart01.updateValues();
    chart01.render();

    chart02.updateValues();
    chart02.render();

   
}