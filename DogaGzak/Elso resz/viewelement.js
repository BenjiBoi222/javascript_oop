class ViewElement {
    /**@type {string}*/
    #id;

    /**@type {HTMLElement}*/
    #div;

    /**@type {ActivateCallback}*/
    #activateCallback;



    constructor(id) {
        this.#id = id;
        this.#div = document.createElement('div');
    }

    navigate() {
        if (this.#activateCallback) {
            this.#activateCallback();
        }
    }

    appendTo(parent) {
        parent.appendChild(this.#div);
    }

    get id() {
        return this.#id;
    }

    get div() {
        return this.#div;
    }

    set activateCallback(value) {
        this.#activateCallback = value;
    }
}

export { ViewElement };