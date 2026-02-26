/**
 * @import {FormFieldType, HeaderArrayType, ColspanType, RowspanType} from "./functions.js"
 */
/**
 * @callback TableCallback
 * @param {HTMLTableSectionElement} tbody
 * @param {ColspanType | RowspanType} elem
 * @returns {void}
 */
import { Manager } from "./manager.js";

class Table {
    /** @type {HTMLTableSectionElement} */
    #tbody;
    /** @type {Manager} */
    #manager;
    /**
     * @param {HeaderType[]} headerArray 
     * @param {Manager} manager 
     */
    constructor(headerArray, manager) {
        this.#manager = manager;

        const table = document.createElement('table');
        document.body.appendChild(table);

        const thead = document.createElement('thead');
        table.appendChild(thead);

        const trHeader = document.createElement('tr');
        thead.appendChild(trHeader);

        for(const header of headerArray) {
            const th = document.createElement('th');
            th.innerText = header.name;
            if(header.colspan) th.colSpan = header.colspan;
            if(header.rowspan) th.rowSpan = header.rowspan;
            trHeader.appendChild(th);
        }

        const tbody = document.createElement('tbody');
        table.appendChild(tbody);
        this.#tbody = tbody;
        
        };
        /**
         * @param {TableCallback} tableCallback
         */
        setAppendRow(tableCallback) {
            this.#manager.addCallback = (element) => {
                tableCallback(this.#tbody, element);
            }
        }
}


export { Table };