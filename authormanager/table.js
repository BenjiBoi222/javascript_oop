import { createTableHeader, createTableCell } from "./gomszab.min.js";
import { ViewElement } from "./viewelement.js";
import { AuthorManager } from "./manager.js"

class TableView extends ViewElement {
    /**@type {HTMLTableSectionElement} */
    #tbody;
    /**@type {AuthorManager} */
    #manager;
    /**
     * @param {string} id 
     * @param {string[]} headerArray 
     * @param {AuthorManager} manager 
     */
    constructor(id, headerArray, manager) {
        super(id);
        this.#manager = manager;
        const table = document.createElement("table");
        this.div.appendChild(table);
        const thead = createTableHeader(headerArray);
        table.appendChild(thead);
        this.#tbody = document.createElement("tbody");
        table.appendChild(this.#tbody);
        this.#manager.tableCallback = (authorList) => {
            if(authorList.length == 0) {
                const tr = document.createElement('tr');
                this.#tbody.appendChild(tr);
                const td = createTableCell(tr, "Nincs megjelenítendő elem!");
                td.colSpan = 3;
            }
            for(const author of authorList) {
                const tr = document.createElement("tr");
                this.#tbody.appendChild(tr);
                createTableCell(tr, author.name);
                createTableCell(tr, author.work);
                createTableCell(tr, author.concept);
            }
        }
        this.activateCallback = () => {
            this.#tbody.innerHTML = "";
            this.#manager.getAllElement();
        }
    }
}

export {TableView}