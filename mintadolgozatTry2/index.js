import { Manager  } from "./manager.js";
import { Table } from "./table.js";
import { tbodyRenderColspan, tbodyRenderRowspan } from "./functions.js";
import data from "./data.json" with {type: "json"};
import { FormController } from "./form.js";

//Colspan
const colSpanManager = new Manager();
const colSpanTable = new Table(data.colspanHeaderArray, colSpanManager);
colSpanTable.setAppendRow(tbodyRenderColspan);
for (const element of data.colspanDataArr){
    colSpanManager.addElement(element);
}
new FormController(data.colspanFormFieldList, colSpanManager);


//Rowspan
const rowSpanManager = new Manager();
const rowSpanTable = new Table(data.rowspanHeaderArray, rowSpanManager);
rowSpanTable.setAppendRow(tbodyRenderRowspan);
for (const element of data.rowspanTableArray){
    rowSpanManager.addElement(element);
}

new FormController(data.rowspanFormFieldList, rowSpanManager);