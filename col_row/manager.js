/**
 * @import {FormFieldType, HeaderArrayType, ColspanType, RowspanType} from "./functions.js"
 */
/**
 * @callback CallbackType
 * @param {ColspanType | RowspanType} element
 * @returns {void}
*/

class Manager {
    /**@type {ColspanType[] | RowspanType[]}*/
    #dataArray;
    /**@type {CallbackType} */
    #addCallback;
    constructor() {
        this.#dataArray = [];
    }
    /**@param {ColspanType | RowspanType} */
    addElement(element) {
        this.#dataArray.push(element);
        if(this.#addCallback) {
            this.#addCallback(element);
        }
    }
    /**@param {CallbackType} */
    set addCallback(callback) {
        this.#addCallback = callback;
    }
}

export {Manager};