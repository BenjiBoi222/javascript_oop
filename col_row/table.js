/**
 * @import {FormFieldType, HeaderArrayType, ColspanType, RowspanType} from "./functions.js"
 */
import { Manager } from "./manager.js";

class Table {
    /** @type {HTMLTableSectionElement} */
    #tbody;
    /** @type {Manager} */
    #manager;
    /**
     * @param {HeaderArrayType} headerArray 
     * @param {Manager} manager 
     */
    constructor(headerArray, manager) {
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
        this.#manager = manager;

        /** @param {ColspanType | RowspanType} element */
        this.#manager.addCallback = (element) => {
            const tr2 = document.createElement('tr');
            const tr = document.createElement('tr');
            for (const key in element) {
                const td2 = document.createElement('td');
                const td = document.createElement('td');
                td.innerText = element[key];
                if (key === 'szerelme1' && !element.szerelme2) {
                    td.colSpan = 2;
                }
                if(key === 'szerzo2' || key === 'mu2') {
                    td2.innerText = element[key];
                    tr2.appendChild(td2);
                    continue;
                }
                if(element.mu2 && element.szerzo2 && key === 'nemzet') {
                    td.rowSpan = 2;
                }
                tr.appendChild(td);
            }
            this.#tbody.appendChild(tr);
            this.#tbody.appendChild(tr2);
        };
    }
}

export { Table };