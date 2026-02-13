/**
 * @import {FormFieldType, HeaderArrayType, ColspanType, RowspanType} from "./functions.js"
 */

import data from './data.json' with {type:'json'}
import { Manager } from './manager.js';
import { Table } from './table.js';

/** @type {Manager} */
const manager = new Manager();

// COLSPAN
/** @type {Table} */
new Table(data.colspanHeaderArray, manager);

for(const element of data.colspanDataArr) {
    manager.addElement(element);
}

// ROWSPAN
/** @type {Table} */
new Table(data.rowspanHeaderArray, manager);

for(const element of data.rowspanTableArray) {
    manager.addElement(element);
}