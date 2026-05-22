import { ViewElement } from "./viewelement.js";
import {
    createTable,
    clearTbodyAndHandleEmptyList,
    createRowForTbody,
    createTextTableCell
} from "../gombszab.js";

class Table extends ViewElement {
    #manager;

    constructor(id, manager, headerString) {
        super(id);
        this.#manager = manager;

        const tbody = createTable(headerString, this.div);

        this.#manager.renderCallback = (list) => {
            clearTbodyAndHandleEmptyList(tbody, list);

            for (const element of list) {
                const tr = createRowForTbody(tbody);

                createTextTableCell(element.question, tr);
                createTextTableCell(element.answers[0], tr);
                createTextTableCell(element.answers[1], tr);
                createTextTableCell(element.answers[2], tr);
                createTextTableCell(element.answers[3], tr);
                createTextTableCell(element.rightAnswer, tr);
            }
        }

        this.activateCallback = () => {
            this.#manager.getAllElement();
        }
    }
}

export { Table };