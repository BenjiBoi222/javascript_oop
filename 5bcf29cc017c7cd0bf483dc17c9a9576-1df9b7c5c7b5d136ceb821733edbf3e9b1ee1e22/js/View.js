class View{
    /**
     * @type {QuizManager}
     */
    #manager;

    /**
     * @type {HTMLElement}
     */
    #container;

    constructor(manager){
        this.#manager = manager;
    }

    appendTo(parent){
        this.#container = document.createElement("div");
        parent.appendChild(this.#container);
    }
}