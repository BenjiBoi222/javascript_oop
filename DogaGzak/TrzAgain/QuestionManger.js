import { Question } from "./Question.js";

class QuestionManager {
    #questionList;
    #renderCallback;

    constructor(questions = []) {
        this.#questionList = [];
        if (questions) {
            for (const qst of questions) {
                this.#questionList.push(this.#createQuestion(qst));
            }
        }
    }

    getAllElement() {
        if (this.#renderCallback) this.#renderCallback(this.#questionList)
    }

    set renderCallback(value) {
        this.#renderCallback = value;
    }

    #createQuestion(questionRaw) {
        const question = new Question();
        question.id = questionRaw.id;
        question.question = questionRaw.question;

        question.answers = [
            questionRaw.answer1,
            questionRaw.answer2,
            questionRaw.answer3,
            questionRaw.answer4
        ];

        question.rightAnswer = questionRaw.rightAnswer;
        return question;
    }
}

export { QuestionManager };