import { AuthorManager } from "./manager.js";
import { createInputAndErrorDiv } from "./gomszab.min.js";
import { ViewElement } from "./viewelement.js";

class FormController extends ViewElement {
    /**
     * @type {AuthorManager}
     */
    #manager;
    /**
     * @type {FormInput[]}
     */
    #formInputList;

    /**
     * 
     * @param {string} id 
     * @param {import("./index.js").FormFieldType[]} formFieldList 
     * @param {AuthorManager} manager 
     */
    constructor(id, formFieldList, manager) {
        super(id);
        this.#manager = manager;
        this.#formInputList = [];
        const form = document.createElement("form");
        for(const field of formFieldList) {
            const formInput = new FormInput(field.id, field.label, field.name, form);
            this.#formInputList.push(formInput);
        }
        const button = document.createElement("button");
        button.innerText = "Küldés"
        form.appendChild(button);
        const resultDiv = document.createElement("div");
        resultDiv.innerText = "Eredmény"
        this.div.appendChild(resultDiv);
        this.div.appendChild(form);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const element = this.#createElement();
            this.#manager.addElement(element);
        })
    }
    /**
     * @returns {import("./index.js").AuthorType}
     */
    #createElement() {
        /**
         * @type {import("./index.js").AuthorType}
         */
        let result = {};
        for(const formFieldInput of this.#formInputList) {
            if(formFieldInput.validate()) {
                result[formFieldInput.name] = formFieldInput.value;
            }
        }
        return result;
    }
}

class FormInput {
    /**
     * @type {HTMLInputElement}
     */
    #inputElement;
    /**
     * @type {HTMLDivElement}
     */
    #errorDiv;
    /**
     * @type {string}
     */
    #name;
    /**
     * 
     * @param {string} id 
     * @param {string} label 
     * @param {string} name 
     * @param {HTMLFormElement} parent 
     */
    constructor(id, label, name, parent) {
        const {input, errorDiv} = createInputAndErrorDiv({id, label, name, parent});
        this.#name = name;
        this.#inputElement = input;
        this.#errorDiv = errorDiv;
    }
    validate() {
        let result = true;
        if(!this.value) {
            this.#errorDiv.innerText = "Ez a mező kötelező!";
            result = false;
        } else {
            this.#errorDiv.innerText = "";
        }
        return result;
    }
    get value() {
        return this.#inputElement.value ? this.#inputElement.value : undefined;
    }
    get name() {
        return this.#name;
    }
}
export {FormController}