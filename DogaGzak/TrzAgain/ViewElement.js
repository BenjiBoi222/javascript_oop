class ViewElement {
    #id;
    #div;
    #activateCallback;

    constructor(id) {
        this.#id = id;
        this.#div = document.createElement('div');
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

    navigate() {
        if (this.#activateCallback) {
            this.#activateCallback();
        }
    }
}

export { ViewElement };