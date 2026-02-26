function Student(name){
    this.name = name;
    this.askedQuestionNum = 0;
}

Student.prototype.askQuestion = function(){
    console.log("???");
    this.askedQuestionNum++;
}

const stu1 = new Student("Benjamin")
const stu2 = new Student("Levente")
console.log(stu1);
console.log(stu2);

stu1.askQuestion()
console.log(stu1);


function StudentWithWork(nev) {
    Student.call(this,nev)
    this.workDone = 0;
}
StudentWithWork.prototype.doWork = function(){
    this.workDone++;
}
Object.setPrototypeOf(StudentWithWork.prototype,Student.prototype)

const stu3 = new StudentWithWork("Pikachu");
stu3.askQuestion();
console.log(stu3);

stu3.doWork();
console.log(stu3);