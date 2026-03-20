import { ViewElement } from "./viewelement.js";
import { AuthorManager } from "./manager.js";

class ImportExport extends ViewElement {
    /**
     * @type {AuthorManager}
     */
    #manager;
    /**
     * 
     * @param {string} id 
     * @param {AuthorManager} manager 
     */
    constructor(id, manager) {
        super(id);
        this.#manager = manager;
    }
}