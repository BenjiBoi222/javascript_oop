import { createForm, createInputField } from "./functions.js";

class FormController {
    #manager;
    #formFieldList;

    constructor(formFields, manager){
        this.#manager = manager;
        this.#formFieldList = [];

        const createFields = (form) => {
            for(const ff of formFields){
                const formFieldElem = new FormField(ff.id, ff.label, ff.name, ff.required, form);
                this.#formFieldList.push(formFieldElem);
            }
        };

        const onSubmit = (event) => {
            event.preventDefault();
            const elem = this.#createElem();
            if(elem){
                this.#manager.addElement(elem);
                event.target.reset();
            }
        };

        const form = createForm(createFields, onSubmit);
        document.body.appendChild(form);
    }

    #createElem(){
        const result = {};
        let valid = true;
        for (const formInput of this.#formFieldList){
            if (formInput.validate()){
                result[formInput.name] = formInput.value;
            }else{
                valid = false;
            }
        }
        return valid ? result : null;
    }

}


class FormField {
    #input;
    #name;
    #errorDiv;
    #required;

    get value(){
        return this.#input.value ? this.#input.value : undefined;
    }

    get name(){
        return this.#name;
    }

    constructor(id, label, name, required, parent){
        const { errorElement, input} = createInputField({id, name, labelContent: label,  parent})
        this.#input = input;
        this.#name = name;
        this.#errorDiv = errorElement;
        this.#required = required;
    }


    validate(){
        let result = true;
        if(this.#required && !this.value){
            this.#errorDiv.innerText = "Kotelezo";
            result = false;
        }
        else{
            this.#errorDiv.innerText = "";
        }
        return result;
    }

}

export { FormController }