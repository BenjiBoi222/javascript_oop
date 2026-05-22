import { ViewElement } from "./viewelement.js";
import {
    createTable,
    clearTbodyAndHandleEmptyList,
    createRowForTbody,
    createTextTableCell
} from "./gombszab.js";

class Table extends ViewElement {
    #manager;

    constructor(id, manager, headerString) {
        super(id);
        this.#manager = manager;

        const tbody = createTable(headerString, this.div);
        this.#manager.renderCallback = (list) => {
            clearTbodyAndHandleEmptyList(tbody, list);

            for (const item of list) {
                const tr = createRowForTbody(tbody);

                createTextTableCell(item.question, tr);
                createTextTableCell(item.answers[0], tr);
                createTextTableCell(item.answers[1], tr);
                createTextTableCell(item.answers[2], tr);
                createTextTableCell(item.answers[3], tr);
                createTextTableCell(item.rightAnswer, tr);
            }
        }

        this.activateCallback = () => {
            this.#manager.getAllElement();
        }
    };
}

export { Table };