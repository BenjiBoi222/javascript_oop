/**
 * @import {FormFieldType, HeaderArrayType, ColspanType, RowspanType} from "./functions.js"
 */


class Manager {
    #dataArray;

    #addCallback;

    constructor(){
        this.#dataArray = [];
    }

    addElement(element){
        this.#dataArray.push(element);
        if(this.#addCallback){
            this.#addCallback(element);
        }
    }

    set addCallback(callback){
        this.#addCallback = callback;
    }
}

export { Manager };