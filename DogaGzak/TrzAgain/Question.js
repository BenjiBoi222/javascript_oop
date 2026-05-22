class Question {
    #id;
    #question;
    #answers;
    #rightAnswer;

    get id(){
        return this.#id;
    }
    set id(value){
        this.#id = value;
    }

    get question(){
        return this.#question;
    }
    set question(value){
        this.#question = value;
    }

    get answers(){
        return this.#answers;
    }
    set answers(value){
        this.#answers = value;
    }

    get rightAnswer(){
        return this.#rightAnswer;
    }
    set rightAnswer(value){
        this.#rightAnswer = value;
    }
}

export { Question };