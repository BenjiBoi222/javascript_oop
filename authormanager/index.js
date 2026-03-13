/**
 * @typedef {{id: number, author?: string, work?: string, concept?: string}} AuthorType
 * @typedef {{id: string, label: string, name: string}} FormFieldType
 */

import { FormController } from "./form.js";
import { AuthorManager } from "./manager.js";
import { Navbar } from "./navigationbar.js"
import { TableView } from "./table.js";

const formFields = [{
    id: 'author',
    label: 'Név',
    name: 'author'
},
{
    id: 'work',
    label: 'Mű',
    name: 'work'
},
{
    id: 'concept',
    label: 'Fogalom',
    name: 'concept'
}]

const headerArray = ['Szerző', 'Mű', 'Fogalom']

const manager = new AuthorManager();
const navbar = new Navbar();
navbar.appendTo(document.body);
const table = new TableView('table', headerArray, manager);
table.appendTo(document.body);
navbar.addViewElement("Táblázat", table);
const form = new FormController("tableForm", formFields, manager);
form.appendTo(document.body);
navbar.addViewElement("Form", form)
navbar.activate("table");
manager.getAllElement();