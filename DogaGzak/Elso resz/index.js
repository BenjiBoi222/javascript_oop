import { NavigationBar } from './navigationbar.js';
import { QuestionManager } from './questionmanager.js';
import { Table } from './table.js';
import data from './data.json' with {type: 'json'};


const manager = new QuestionManager(data.questions);
const navBar = new NavigationBar('main-nav');
navBar.appendTo(document.body);

const tableView = new Table('table-view', manager, data.tableHeader);
navBar.addViewElement('Táblázat', tableView);
navBar.navigate('table-view');