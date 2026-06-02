import { SelectManager } from './SelectManager.js';
import { CardArea } from './CardArea.js';
import { ResultArea } from './ResultArea.js';

class ViewElement {
    /** @type {SelectManager} */
    #manager;
    /** @type {HTMLDivElement} */
    #container;

    /**
     * @param {SelectManager} manager 
     */
    constructor(manager) {
        // Stores the shared manager instance
        this.#manager = manager;

        // Creates the base container element for the view
        this.#container = document.createElement('div');

        // Creates the page headline element
        const header = document.createElement('h1');

        // Sets the title text for the headline
        header.textContent = 'Igaz vagy Hamis?';

        // Adds the headline to the view container
        this.#container.appendChild(header);

        // Creates the wrapper for question/result content
        this.playAreaContainer = document.createElement('div');

        // Adds the play area wrapper to the main container
        this.#container.appendChild(this.playAreaContainer);

        //====================
        /*Sets the callback that renders a new question card
        * Creates a CardArea for the next question
        * Replaces the current play area content with the new card
        */
        manager.nextQuestionCallback = (question) => {
            const cardArea = new CardArea(manager, question);
            cardArea.replaceContent(this.playAreaContainer);
        };
        //====================

        //====================
        /*Sets the callback that renders the result summary
        * Creates a ResultArea for the quiz summary
        * Replaces the current play area content with the result view
        */
        manager.finishCallback = (resultArray) => {
            const resultArea = new ResultArea(manager, resultArray);
            resultArea.replaceContent(this.playAreaContainer);
        };
        //====================
    }

    /**
     * @param {HTMLElement} parent 
     */
    appendTo(parent) {
        // Appends the whole view to the requested parent element
        parent.appendChild(this.#container);
    }
}

export {ViewElement}