/**
 * @import {FormFieldType, HeaderArrayType, ColspanType, RowspanType} from "./functions.js"
 */

/**
 * @callback AddCallbackType
 * @param {ColspanType | RowspanType}
 * @returns {void}
 */

class Manager {
    /**@type {ColspanType[] | RowspanType[]} */
    #dataArray;
    /**@type {AddCallbackType} */
    #addCallback;
    constructor() {
        this.#dataArray = [];
    }
    /**@param {ColspanType | RowspanType} element  */
    addElement(element) {
        this.#dataArray.push(element);
        if(this.#addCallback) {
            this.#addCallback(element);
        }
    }
    /**@type {AddCallbackType} */
    set addCallback(callback) {
        this.#addCallback = callback;
    }
}

export {Manager}