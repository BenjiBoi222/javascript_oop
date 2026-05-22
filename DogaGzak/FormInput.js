import { createInputField } from './gombszab.js';

class FormInput{
    #errorDiv;
    #input;
    #name;

    constructor(id, name, labelContent, parent){
        this.#name = name;

        const elements = createInputField({ id, name, labelContent, parent});

        this.#input = elements.input;
        this.#errorDiv = elements.errorElement;
    }

    validate(){
        if (this.#input.value.trim() === ''){
            this.#errorDiv.innerText = "Kotelezo mezo";
            return false;
        }
        else {
            this.#errorDiv.innerText = '';
            return true;
        }
    }

    get name(){ return this.#name }
    get value(){ return this.#input.value }
}

export { FormInput };