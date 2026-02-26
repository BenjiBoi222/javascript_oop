import { Manager } from "./manager.js"
import { createTable, createTableCell } from "./functions.js";

class Table{
    #tbody 

    /**@type {Manager} */
    #manager

    /**
     * 
     * @param {HeaderArrayType} headerArr 
     * @param {Manager} manager 
     */
    constructor(headerArr, manager){
        this.#manager = manager;

        const headerCallback = (tr) => {
            for(const header of headerArr){
                createTableCell('th', header.name , tr)
            }
        }

        this.#tbody = createTable(document.body, headerCallback);
    }

    /**
     * 
     * @param {TableCallBack} tableCallBack 
     */
    setAppendRow(tableCallBack){
        this.#manager.addCallback = (element) => {
            tableCallBack(this.#tbody, element);
        }
    }
}

export { Table }