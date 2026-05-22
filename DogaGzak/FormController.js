import { ViewElement } from './viewelement.js';
import { FormInput } from './FormInput.js';
import { createForm, createSpan } from './gombszab.js';

class FormController extends ViewElement {
    #formInputList;
    #manager;
    #form;

    constructor(id, formFieldList, manager) {
        super(id);
        this.#manager = manager;
        this.#formInputList = [];

        const statusSpan = document.createElement('span');
        this.div.appendChild(statusSpan);

        const formObj = createForm((formelement) => {
            for (const field of formFieldList) {
                const formInput = new FormInput(field.id, field.name, field.label, formelement);

                this.#formInputList.push(formInput);
            }
        },
            (event) => {
                event.preventDefault();

                let isFormValid = true;
                for (const input of this.#formInputList) {
                    if (!input.validate()) {
                        isFormValid = false;
                    }
                }

                if (isFormValid) {
                    const newQuestion = this.#createElement();
                    this.#manager.addElement(newQuestion);
                }
            });

        this.#form = formObj.form;
        this.div.appendChild(this.#form);

        this.#manager.addStatusCallback = (message) => {
            statusSpan.innerText = message;
        };
    }

    #createElement() {
        const questionObj = {};

        for (const input of this.#formInputList) {
            questionObj[input.name] = input.value;
        }
        return questionObj;
    }
}

export { FormController };