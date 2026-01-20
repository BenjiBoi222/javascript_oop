/*
//=====Hazi feladat 1======//
function Auto(marka) {
    this.marka = marka;
    this.speed = 0;
}
Auto.prototype.gyorsit = function() {
    this.speed += 10;
};

function ElektromosAuto(marka, battery) {
    Auto.call(this, marka);
    this.batteryLevel = battery;
}
Object.setPrototypeOf(ElektromosAuto.prototype, Auto.prototype);
const bmw = new Auto("Bmw");
bmw.gyorsit();
console.log(bmw);
*/

//=====Hazi feladat 2======//
class Auto {
    constructor(marka) {
        this.marka = marka;
        this.speed = 0;
    }
    gyorsit() {
        this.speed += 10;
    }
}

class ElektromosAuto extends Auto {
    constructor(marka, battery) {
        super(marka);
        this.batteryLevel = battery;
    }
}
const skoda = new Auto("Skoda");
skoda.gyorsit();
console.log(skoda);
