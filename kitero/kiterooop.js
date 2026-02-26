class Student{
    constructor(name){
        this.name = name;
        this.askedQuestionNum = 0;
    }
    askQuestion(){
        this.askedQuestionNum++;
    }
}

const stu1 = new Student("Feri");
stu1.askQuestion();
console.log(stu1);

class StudentWithWork extends Student{
    constructor(name){
        super(name);
        this.workDone = 0;
    }
    doWork(){
        this.workDone++;
    }
}

const stu2 = new StudentWithWork("Jani");
stu2.doWork();
console.log(stu2);