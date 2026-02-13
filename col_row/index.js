/**
 * @import {FormFieldType, HeaderArrayType, ColspanType, RowspanType} from "./functions.js"
 */

import data from './data.json' with {type:'json'}
import { FormController } from './form.js';
import { Manager } from './manager.js';
import { Table } from './table.js';

// COLSPAN
/** @type {Manager} */
const manager = new Manager();

const renderColspanBody = (tbody, elem) => {
    const tr = document.createElement('tr');
    tbody.appendChild(tr);

    const td1 = document.createElement('td');
    td1.innerText = elem.neve;
    tr.appendChild(td1);

    const td2 = document.createElement('td');
    td2.innerText = elem.kor;
    tr.appendChild(td2);

    const td3 = document.createElement('td');
    td3.innerText = elem.szerelme1;
    tr.appendChild(td3);

    if(elem.szerelme2) {
        const td4 = document.createElement('td');
        td4.innerText = elem.szerelme2;
        tr.appendChild(td4);
    } else {
        td3.colSpan = 2;    
    }
}

/** @type {Table} */
const table_col = new Table(data.colspanHeaderArray, manager);
table_col.setAppendRow(renderColspanBody);
for(const element of data.colspanDataArr) {
    manager.addElement(element);
}

const colForm = new FormController(data.colspanFormFieldList, manager);

// ROWSPAN
/** @type {Manager} */
const manager2 = new Manager();

const renderRowspanBody = (tbody, elem) => {
    const tr = document.createElement('tr');
    tbody.appendChild(tr);

    const td1 = document.createElement('td');
    td1.innerText = elem.nemzet;
    tr.appendChild(td1);

    const td2 = document.createElement('td');
    td2.innerText = elem.szerzo;
    tr.appendChild(td2);

    const td3 = document.createElement('td');
    td3.innerText = elem.mu;
    tr.appendChild(td3);

    if(elem.szerzo2) {
        td1.rowSpan = 2;
        const tr2 = document.createElement('tr');
        tbody.appendChild(tr2);
        const td4 = document.createElement('td');
        td4.innerText = elem.szerzo2;
        tr.appendChild(td4);
        tr2.appendChild(td4);
        const td5 = document.createElement('td');
        td5.innerText = elem.mu2;
        tr2.appendChild(td5);
    }
}

/** @type {Table} */
const table_row = new Table(data.rowspanHeaderArray, manager2);
table_row.setAppendRow(renderRowspanBody);
for(const element of data.rowspanTableArray) {
    manager2.addElement(element);
}


const rowForm = new FormController(data.rowspanFormFieldList, manager2);