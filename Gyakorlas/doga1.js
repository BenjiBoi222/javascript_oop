//1.Feladat
function History(place, science, example){
    this.place = place;
    this.science = science;
    this.example = example;
}
//2.Feladat
function MathHistory(place, example, mathTheme){
    History.call(this, place, "Matematika", example)
    this.mathTheme = mathTheme;
}

MathHistory.prototype.display = function(){
    console.log(this.place + " " + this.mathTheme);
}


//3.Feladat
class AlgorithmList{
    #orders = []; //Privat mezo

    constructor(){}

    get orders(){
        return this.#orders;
    }
    addNewOrderAlgorithm(order){
        this.#orders.push(order);
    }
}
//4.Feladat
class QuickAlgorithmList extends AlgorithmList{
    #maxTime;

    constructor(maxTime){
        super();
        this.#maxTime = maxTime;
    }

    processWithCallback(callback){
        callback(this.orders);
    }
}

//5.Feladat
const button = document.createElement('button');
button.innerText = 'gombocska';
document.body.appendChild(button)

class Student {
    constructor(name){
        this.name = name
    }

    askSomething(){
        console.log(this.name + " kerdezett");
    }
}

class Humanoid {
    constructor(type){
        this.type = type;
        this.speed = 3;
    }
    train(){
        this.speed++;
    }
    doFly(){
        console.log(this.type + " repul " + this.speed);
    }
}

const stu1 = new Student('Janos');
const hu1 = new Humanoid('Kacsaember');

function clickOnButton(humanoid){
    humanoid.train();
    humanoid.train();
    humanoid.doFly();
}

button.addEventListener('click',() => clickOnButton(hu1))



//Tests
function Majom(name, type){
    this.name = name;
    this.type = type;
    
    this.tellType = function(){
        console.log(name + " monkey is a " + type);
    }
}

const moneky1 = new Majom("Beni", "chimp");
moneky1.tellType();