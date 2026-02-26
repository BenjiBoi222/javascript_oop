/**
 * @import {FormFieldType, HeaderType, ColspanType, RowspanType} from "./functions.js"
 */

class FormController {
    /**@type {Manager} */
    #manager;
    /**@type {FormField[]} */
    #formFieldElemList;
    /**@type {HTMLFormElement} */
    #form;
    /**
     * 
     * @param {FormFieldType[]} formFields 
     * @param {Manager} manager 
     */
    constructor(formFields, manager) {
        this.#manager = manager;
        const form = document.createElement('form');
        this.#form = form;
        document.body.appendChild(form);
        this.#formFieldElemList = [];
        for(const formField of formFields) {
            const formFieldElem = new FormField(formField.id, formField.label, formField.name, formField.required, form);
            this.#formFieldElemList.push(formFieldElem);
        }

        const submitButton = document.createElement('button');
        submitButton.innerText = "Hozzáadás";
        form.appendChild(submitButton);
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // létrehozunk egy változót, elkérjük a beviteli mezők alapján, utána hozzadjuk a managerhez
            const elem = this.#createElem();
            if(elem) {
                this.#manager.addElement(elem)
                e.target.reset();
            }            
        });
    }
    /**
     * @returns {ColspanType | RowspanType | null}
     */
    #createElem() {
        let result = {};
        let valid = true
        for(const formInput of this.#formFieldElemList) {
            if(formInput.validate()){
                result[formInput.name] = formInput.value;
            } else {
                valid = false;
            }
            /**
             * result: {neve:input tartalma, kor:input tartalma, ...}
             */
        }
        if(valid) {
            return result;
        } else {
            return null;
        }
        
    }
}

class FormField {
    /**@type {HTMLInputElement} */
    #input;
    /**@type {string} */
    #name;
    /**@type {HTMLDivElement} */
    #errorDiv
    /**@type {boolean} */
    #required
    get value() {
        return this.#input.value ? this.#input.value : undefined;
    }
    get name() {
        return this.#name;
    }
    /**
     * 
     * @param {string} id 
     * @param {string} label 
     * @param {string} name 
     * @param {boolean} required 
     * @param {HTMLFormElement} parent 
     */
    constructor(id, label, name, required, parent) {
        const div = document.createElement('div');
        parent.appendChild(div);

        const inputLabel = document.createElement('label');
        inputLabel.innerText = label;
        div.appendChild(inputLabel);
        const br = document.createElement('br');
        div.appendChild(br);

        const input = document.createElement('input');
        input.id = id;
        input.name = name;
        div.appendChild(input);
        this.#input = input;
        this.#name = name;

        const errorDiv = document.createElement('div');
        errorDiv.classList.add('error');
        div.appendChild(errorDiv);
        this.#errorDiv = errorDiv;
        this.#required = required;

    }

    /**
     * @returns {boolean}
     */
    validate() {
        let result = true;
        if(this.#required && !this.value) {
            this.#errorDiv.innerText = "Kötelező";
            result = false;
        } else {
            this.#errorDiv.innerText = "";
        }
        return result;
    }
}

export {FormController}