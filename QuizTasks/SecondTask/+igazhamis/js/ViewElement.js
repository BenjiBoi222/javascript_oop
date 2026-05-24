class ViewElement {
    /**@type {SelectManager} */
    #manager;
    /**@type {HTMLDivElement} */
    #container;

    /**
     * @param {SelectManager} manager 
     */
    constructor(manager){
        this.#manager = manager;
        this.#container = document.createElement('div'); // Letrehozom a container mezot div-kent
    }

    /**
     * This function will append the container to the parent element
     * @param {HTMLElement} parent 
     */
    appendTo(parent){
        parent.appendChild(this.#container);
    }
}

export { ViewElement };