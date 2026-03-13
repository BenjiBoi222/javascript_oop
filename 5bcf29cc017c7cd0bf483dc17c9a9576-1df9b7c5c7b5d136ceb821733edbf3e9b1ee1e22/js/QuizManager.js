/**
 * @typedef {Object} QuestionType
 * @property {string} question
 * @property {string[]} answers
 * @property {number} rightAnswer
 */

class QuizManager{
    /**
     * @type {number}
     */
    #currentQuestionNumber;

    /**
     * @type {QuestionType[]}
     */
    #questions;

    /**
     * @type {string[]}
     */
    #questionAnswers;

    /**
     * @type {NextQuestionCallback}
     */
    #nextQuestionCallback;


    /**
     * @type {FinishResultCallback}
     */
    #finishResultCallback;

    constructor(question){
        this.#currentQuestionNumber = 0;
        this.#questionAnswers = [];
        this.#questions = question;
    }

    set NextQuestionCallback(callback){
        this.#nextQuestionCallback = callback;
    }
    set FinishResultCallback(callback){
        this.#finishResultCallback = callback;
    }

    startQuiz(){

    }

    nextQuestion(answer){
        this.#questionAnswers.push(answer);
        const isLastQuestion = this.#currentQuestionNumber === this.#questions.length - 1;
        if(!isLastQuestion){
            this.#currentQuestionNumber++;
        }
    }
}