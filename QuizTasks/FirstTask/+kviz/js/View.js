import { QuizManager } from './manager.js';

class View {
    /** @type {QuizManager} */
    #manager;
    /** @type {HTMLDivElement} */
    #container;

    /**
     * @param {QuizManager} manager
     */
    constructor(manager) {
        // Stores the shared quiz manager instance
        this.#manager = manager;

        // Creates the main container element for the view
        this.#container = document.createElement("div");

        this.#manager.nextQuestionCallback = (questionView) => {
            // Clears out any old content inside the main container
            this.#container.innerHTML = "";

            //====================
            /* Creates a wrapper div element for the question layout
             * Assigns a specific class name to the question wrapper
             */
            const containerBlock = document.createElement("div");
            containerBlock.className = "question";
            //====================

            //====================
            /* Creates a span element to display the question text
             * Assigns the text string value to the span element
             * Appends the text span to the main question layout wrapper
             */
            const span = document.createElement("span");
            span.textContent = questionView.question;
            containerBlock.appendChild(span);
            //====================

            //====================
            /* Creates a separate div wrapper to hold the answers
             * Assigns a layout class name to the answers container
             */
            const answersDiv = document.createElement("div");
            answersDiv.className = "answers";
            //====================
            
            //====================
            /* Iterates through every available answer option inside the array
             * Creates a brand new button element for each option loop
             * Assigns the answer text to the current button face
             * Attaches a click handler to send the picked answer to the manager
             * Appends the button to the answers wrapper block
             */
            for(const answer of questionView.answers) {
                const currentBtn = document.createElement("button");
                currentBtn.textContent = answer;
                
                currentBtn.addEventListener("click", () => {
                    this.#manager.nextQuestion(answer);
                });
                answersDiv.appendChild(currentBtn);
            }
            //====================

            // Appends the answers div to the container block
            containerBlock.appendChild(answersDiv);

            // Appends the container block to the main container
            this.#container.appendChild(containerBlock);
        };

        this.#manager.finishResultCallback = (resultText) => {
            // Clears out any old content inside the main container
            this.#container.innerHTML = "";

            //====================
            /* Creates a div container block for the summary text
             * Assigns a class name to the result container
             * Puts the result text inside the div element
             */
            const resultDiv = document.createElement("div");
            resultDiv.className = "result";
            resultDiv.textContent = resultText;
            //====================

            // Appends the result div to the main container
            this.#container.appendChild(resultDiv);
        };
    }

    /**
     * @param {HTMLElement} parent
     * @returns {void}
     */
    appendTo(parent) {
        // Appends the whole view container layout into the parent element
        parent.appendChild(this.#container);
    }
}

export {View}