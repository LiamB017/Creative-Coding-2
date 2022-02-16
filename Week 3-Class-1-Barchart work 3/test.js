class dataObject {
    constructor(_title,_num, _price) {
    this.name = _title;
    this.total = _num;
    this.price = _price;
    this.totalPrice = this.calculateTotal();
}

totalPrice (){
    this.totalPrice = this.total * this.price
    return this.total * this.price
}
}

console.log(new dataObject("Bananas",45,0.32))

let myObjects = [];
for (let i=0;i<10;i++) {
    myObjects.push(new dataObject)

}