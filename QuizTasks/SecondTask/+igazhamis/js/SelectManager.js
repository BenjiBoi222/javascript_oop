/**
 * @typedef {Object} QuestionResultViewType
 * @property {string} question
 * @property {boolean} selected
 * @property {boolean} rightAnswer
 */

/**
 * @typedef {Object} QuestionType
 * @property {string} question
 * @property {boolean} valid
 */

/**
 * @callback NextQuestionCallback
 * @param {QuestionType} question
 * @returns {void}
 */

/**
 * @callback FinishCallback
 * @param {QuestionResultViewType[]} resultArray
 * @returns {void}
 */

class SelectManager {
    /** @type {number} */
    #currentQuestionIndex;
    /** @type {QuestionType[]} */
    #questionPool;
    /** @type {boolean[]} */
    #answerHistory;
    /** @type {NextQuestionCallback} */
    #onQuestionReady;
    /** @type {FinishCallback} */
    #onFinished;

    /**
     * @param {QuestionType[]} questions 
     */
    constructor(questions) {
        // Sets the current question index to the first question
        this.#currentQuestionIndex = 0;

        // Stores the list of quiz questions
        this.#questionPool = questions;

        // Prepares an empty answer history array
        this.#answerHistory = [];

        // Clears the question-ready callback before use
        this.#onQuestionReady = null;

        // Clears the finish callback before use
        this.#onFinished = null;
    }
    
    /**
     * @returns {void}
     */
    play() {
        // If the quiz is ready, send the current question to the view
        if (this.#onQuestionReady && this.#questionPool.length > 0) {
            this.#onQuestionReady(this.#questionPool[this.#currentQuestionIndex]);
        }
    }
    
    /**
     * @returns {void}
     */
    reset() {
        //====================
        /*Resets progress and answer history
        * Starts the quiz again from the first question
        */
        this.#currentQuestionIndex = 0;
        this.#answerHistory = [];
        this.play();
        //====================
    }
    
    /**
     * @param {boolean} answer
     * @returns {void}
     */
    nextQuestion(answer) {
        // Saves the selected answer for review later
        this.#answerHistory.push(answer);

        // Advances to the next question index
        this.#currentQuestionIndex++;

        // If there are more questions, request the next one
        if (this.#currentQuestionIndex < this.#questionPool.length) {
            if (this.#onQuestionReady) {
                this.#onQuestionReady(this.#questionPool[this.#currentQuestionIndex]);
            }
        } else {
            //====================
            /*Creates an empty array for the results
            * Loops through all questions to pair them with answers
            * Pushes the question, the user answer, and the correct answer to the array
            * Checks if the finish callback exists and sends the results array to it
            */
            const resultArray = [];
            for (let i = 0; i < this.#questionPool.length; i++) {
                resultArray.push({
                    question: this.#questionPool[i].question,
                    selected: this.#answerHistory[i],
                    rightAnswer: this.#questionPool[i].valid
                });
            }
            if (this.#onFinished) {
                this.#onFinished(resultArray);
            }
            //====================
        }
    }
    
    /**
     * @param {NextQuestionCallback} value 
     */
    set nextQuestionCallback(value) {
        // Stores the callback used to deliver the next question
        this.#onQuestionReady = value;
    }
    
    /**
     * @param {FinishCallback} value 
     */
    set finishCallback(value) {
        // Stores the callback used to deliver final quiz results
        this.#onFinished = value;
    }
}

export {SelectManager}