import { Question } from "./question.js";

class QuestionManager {
    #questionList;
    #renderCallback;
    #addStatusCallback;
    #importResultCallback;

    constructor(questions) {
        this.#questionList = questions ? questions.map(q => this.#createQuestion(q)) : [];
    }

    getAllElement() {
        if (this.#renderCallback) {
            this.#renderCallback(this.#questionList);
        }
    }

    addElement(question) {
        this.#questionList.push(this.#createQuestion(question));

        if (this.#addStatusCallback) {
            this.#addStatusCallback("Uj kerdes sikeresen hozzaadva");
        }
    }

    addElementList(question) {
        let count = 0;
        let success = true;

        for (const qst of question) {
            if (!qst) {
                if (this.#importResultCallback) {
                    this.#importResultCallback(`Hiba! A feldolgozas megallt. Elemszam: ${count + 1}`);
                }

                success = false;
                break;
            }
            this.#questionList.push(this.#createQuestion(qst));
            count++;
        }

        if (success && this.#importResultCallback) {
            this.#importResultCallback("Sikeres importalas!");
        }
    }

    getExportContent() {
        const header = "Kérdés;Válasz1;Válasz2;Válasz3;Válasz4;Helyes Válasz";
        
        const rows = this.#questionList.map(q => {
            return `${q.question};${q.answers[0]};${q.answers[1]};${q.answers[2]};${q.answers[3]};${q.rightAnswer}`;
        });

        return [header, ...rows].join('\n') + '\n';
    }

    set addStatusCallback(value) {
        this.#addStatusCallback = value;
    }

    set importResultCallback(value) {
        this.#importResultCallback = value;
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

export { QuestionManager }