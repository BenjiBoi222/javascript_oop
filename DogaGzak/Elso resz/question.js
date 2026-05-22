class Question {
    #id;
    #question;
    #answers;
    #rightanswer;


    get id(){ return this.#id }
    set id(value) { this.#id = value }

    get question(){ return this.#question }
    set question(value){ this.#question = value }

    get answer(){ return this.#answers }
    set answer(value){ this.#answers = value }

    get rightAnswer(){ return this.#rightanswer }
    set rightAnswer(value){ this.#rightanswer = value }
}


export { Question };