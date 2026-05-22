import { NavigationBar } from "./NavigationBar.js";
import { Table } from './Table.js';
import { QuestionManager } from "./QuestionManger.js";
import data from '../data.json' with {type: 'json'};


const manager = new QuestionManager(data.questions);
const navBar = new NavigationBar('main-nav');
navBar.appendTo(document.body);

const tableView = new Table('table-view', manager, data.tableHeader);
navBar.addViewElement('Table', tableView);
navBar.navigate('Table');