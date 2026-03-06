import { createRadioButton } from "./gomszab.min.js";
import { ViewElement } from "./viewelement.js";

class Navbar extends ViewElement {
    /**@type {ViewElement[]} */
    #viewElementList;
    constructor() {
        super('navbar');
        this.div.addEventListener('change', (e) => {
            const selectedRadioButton = e.target.value;
            this.activate(selectedRadioButton);
        })
        this.#viewElementList = [];
    }
    /**
     * 
     * @param {string} label 
     * @param {ViewElement} viewElement 
     */
    addViewElement(label, viewElement) {
        this.#viewElementList.push(viewElement);
        const div = createRadioButton({id: viewElement.id, label, name: this.id});
        this.div.appendChild(div);
    }
    /**
     * @override
     * @param {string} value 
     */
    activate(value) {
        console.log(value);
        this.div.querySelector(`#${value}`).checked = true;
        for(const viewElement of this.#viewElementList) {
            viewElement.activate(value);
        }
    }
}

export {Navbar}