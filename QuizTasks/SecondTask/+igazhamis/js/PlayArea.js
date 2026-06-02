import { SelectManager } from "./SelectManager.js";

class PlayArea {
    /** @type {HTMLDivElement} */
    #div;
    /** @type {SelectManager} */
    #manager;

    /**
     * @param {SelectManager} manager 
     */
    constructor(manager){
        // Creates the root div element for this view
        this.#div = document.createElement('div');

        // Stores the shared SelectManager instance
        this.#manager = manager;
    }

    /**
     * Replaces the parent element with the div element
     * @param {HTMLElement} parent 
     */
    replaceContent(parent){
        // Removes old view content from the parent
        parent.innerHTML = '';

        // Appends this view element into the parent container
        parent.appendChild(this.#div);
    }

    /**
     * Returns the private manager
     * @returns {SelectManager}
     */
    get manager() { return this.#manager };

    /**
     * Returns the private div element
     * @returns {HTMLDivElement}
     */
    get div() { return this.#div };
}

export { PlayArea };