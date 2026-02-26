// Function
console.log("---- Function ----");

function Plate(color, size) {
    this.color = color;
    this.size = size;
}

function SmallPlate(color) {
    Plate.call(this, color, "kicsi");
}

function LargePlate(color) {
    Plate.call(this, color, "nagy");
}

Object.setPrototypeOf(SmallPlate.prototype, Plate.prototype);
Object.setPrototypeOf(LargePlate.prototype, Plate.prototype);

const plate1 = new SmallPlate("zöld");
const plate2 = new SmallPlate("piros");
const plate3 = new LargePlate("kék");
console.log(plate1);
console.log(plate2);
console.log(plate3);

function Glass() {}

const glass1 = new Glass();
console.log(glass1);

// Class
console.log("---- Class ----");

class PlateClass {
    constructor(color, size) {
        this.color = color;
        this.size = size;
    }
}

class SmallPlateClass extends PlateClass {
    constructor(color) {
        super(color, "kicsi");
    }
}

class LargePlateClass extends PlateClass {
    constructor(color) {
        super(color, "nagy");
    }
}

const plate4 = new SmallPlateClass("zöld");
const plate5 = new SmallPlateClass("piros");
const plate6 = new LargePlateClass("kék");
console.log(plate4);
console.log(plate5);
console.log(plate6);

class GlassClass {}

const glass2 = new GlassClass();
console.log(glass2);