import { Manager } from "./manager.js";
import { createTable, createTableCell } from "./functions.js";

class Table {
    #tbody;
    /**@type {Manager} */
    #manager;
    /**
     * @param {HeaderArrayType} headerArray 
     * @param {Manager} manager 
     */
    constructor(headerArray, manager) {
        this.#manager = manager;
        
        
        const headerCallback = (tr) => {
            for(const header of headerArray) {
                createTableCell("th", header.name, tr);
            }
        }
        
        this.#tbody = createTable(document.body, headerCallback);
    }
    /**
     * @param {TableCallback} tableCallback
     */
    setAppendRow(tableCallback) {
        this.#manager.addCallback = (element) => {
            tableCallback(this.#tbody, element);
        }
    }
}

export {Table}