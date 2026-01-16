/**
 * @param {} name 
 * The name of the student
 */
function Student(name){
    this.name = name;
    this.askedQuestionNum = 0;
}

Student.prototype.askedQuestion = function(){
    console.log("???");
    this.askedQuestionNum++;
}

const stu1 = new Student("Benji")
const stu2 = new Student("Levi")
console.log(stu1);
console.log(stu2);

stu1.askedQuestion()
console.log(stu1);


function StudentWithWork(nev) {
    Student.call(this,nev)
    this.workDone = 0;
}
StudentWithWork.prototype.doWork = function(){
    this.workDone++;
}
Object.setPrototypeOf(StudentWithWork.prototype,Student.prototype)

const stu3 = new StudentWithWork("Diglet");
stu3.askedQuestion();
console.log(stu3);

stu3.doWork();
console.log(stu3);