import { SelectManager } from "./js/SelectManager.js";
import { ViewElement } from "./js/ViewElement.js";
import data from './data.json' with { type: 'json' };

// Creates a manager instance and gives it the questions from the json data
const manager = new SelectManager(data.questions);

// Creates the main view element and gives it the manager
const viewElement = new ViewElement(manager);

// Appends the view container to the page body
viewElement.appendTo(document.body);

// Starts the quiz game
manager.play();