/**
 * @typedef {Object} QuestionType
 * @property {string} question
 * @property {string[]} answers
 * @property {string} rightAnswer
 */

/**
 * @typedef {Object} QuestionViewType
 * @property {string} question
 * @property {string[]} answers
 */

/**
 * @callback NextQuestionCallback
 * @param {QuestionViewType} question
 * @returns {void}
 */

/**
 * @callback FinishResultCallback
 * @param {string} result
 * @returns {void}
 */


class QuizManager {
    /** @type {number} */
    #currentQuestionNumber;
    /** @type {QuestionType[]} */
    #questions;
    /** @type {string[]} */
    #questionAnswers;
    /** @type {NextQuestionCallback} */
    #nextQuestionCallback;
    /** @type {FinishResultCallback} */
    #finishResultCallback;

    //=====================
    /** @param {QuestionType[]} questions*/
    /*
     * Initializes the 'currentQuestionNumber' as 0
     * Initializes the 'questions' with the parameter questions
     * Initializes the 'questionAnswers' as an empty array
     * Initializes both callback fields to null
     */
    constructor(questions){
        this.#currentQuestionNumber = 0;
        this.#questions = questions;
        this.#questionAnswers = [];
        this.#nextQuestionCallback = null;
        this.#finishResultCallback = null;
    }
    //=====================

    /**
     * Initializes the callback with the parameters value
     * @param {NextQuestionCallback} value
     */
    set nextQuestionCallback(value) {
        this.#nextQuestionCallback = value;
    }

    /**
     * Initializes the final callback with the parameters value
     * @param {FinishResultCallback} value
     */
    set finishResultCallback(value) {
        this.#finishResultCallback = value;
    }

    //=====================
    /** @returns {void}*/
    /*
     * Only works if there is something inside the question array AND the callback is initialized
     * Stores the first question inside a variable
     * Calls the first question
     */
    startQuiz() {
        if (this.#questions.length > 0 && this.#nextQuestionCallback) {
            const firstQstn = this.#questions[this.#currentQuestionNumber];
            this.#nextQuestionCallback({
                question: firstQstn.question,
                answers: firstQstn.answers
            });
        }
    }
    //=====================


    //=====================
    /**
     * @param {string} answer
     * @returns {void}
     */
    /*
     * Pushes the given answer into the answer tracker array
     * Checks if there are more questions left in the pool
     * Moves the index counter forward to the next position
     * Extracts the upcoming question dataset into a variable
     * Triggers the next question callback with the new question data
     * Sets a score counter starting from zero
     * Loops through all questions to count the matches
     * Increases the score counter if the saved answer matches the right one
     * Fires the final callback with a text showing the final score
     */
    nextQuestion(answer) {
        this.#questionAnswers.push(answer);

        if (this.#currentQuestionNumber + 1 < this.#questions.length) {
            this.#currentQuestionNumber++;
            const activeQuizData = this.#questions[this.#currentQuestionNumber];
            this.#nextQuestionCallback({
                question: activeQuizData.question,
                answers: activeQuizData.answers
            });
        } else {
            let totalPoints = 0;
            for (let i = 0; i < this.#questions.length; i++) {
                if (this.#questionAnswers[i] === this.#questions[i].rightAnswer) {
                    totalPoints++;
                }
            }
            if (typeof this.#finishResultCallback === 'function') {
                this.#finishResultCallback(`Ennyit sikerült eltalálni: ${totalPoints}/${this.#questions.length}`);
            }
        }
    }
    //=====================
}


export { QuizManager };