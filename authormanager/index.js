/**
 * @typedef {{id: number, author?: string, work?: string, concept?: string}} AuthorType
 * @typedef {{id: string, label: string, name: string}} FormFieldType
 */

import { Navbar } from "./navigationbar.js"
import { TableView } from "./table.js";
import { FormController } from "./from.js";
import { AuthorManager } from "./manager.js";

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
manager.addElement({
    author: 'aaa',
    concept: 'bbb',
    work: 'ccc'
})
const navbar = new Navbar();
navbar.appendTo(document.body);
const table = new TableView('table', headerArray);
table.appendTo(document.body);
const form = new FormController('tableForm');
form.appendTo(document.body);
navbar.addViewElement('Table', table);
navbar.addViewElement('Form', form);
navbar.activate('table');