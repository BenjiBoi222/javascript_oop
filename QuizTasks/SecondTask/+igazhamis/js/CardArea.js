import { PlayArea } from "./PlayArea.js";

class CardArea extends PlayArea {
    /**
     * @param {SelectManager} manager 
     * @param {QuestionType} question 
     */
    constructor(manager, question){
        super(manager);

        //====================
        /*Creates a 'p' paragraph element for the question
        * Than puts the question inside the 'p' element
        * Than appends the 'p' element to the page
        */
        const questionTxt = document.createElement('p');
        questionTxt.textContent = question.question;
        this.div.appendChild(questionTxt);
        //====================

        //====================
        /*Creates a div element that will contain all the buttons
        * Then appends this element to the page
        */
        const buttonContainer = document.createElement('div');
        this.div.appendChild(buttonContainer);
        //====================

        //====================
        /*Creates a button
        * Sets the button to show "Igaz"
        * Adds a class to the button
        * Gives it an eventlistener that on click sets the question to true and 
        *  gets the new question
        * Appends the button to the button container
        */
        const trueBtn = document.createElement('button');
        trueBtn.textContent = 'Igaz';
        trueBtn.className = 'card-true';
        trueBtn.addEventListener('click', () => {
            this.manager.nextQuestion(true);
        });
        buttonContainer.appendChild(trueBtn);
        //====================

        //====================
        /*Creates a button
        * Sets the button to show "Hamis"
        * Adds a class to the button
        * Gives it an eventlistener that on click sets the question to false and 
        *  gets the new question
        * Appends the button to the button container
        */
        const falseBtn = document.createElement('button');
        falseBtn.textContent = 'Hamis';
        falseBtn.className = 'card-false';
        falseBtn.addEventListener('click', () => {
            this.manager.nextQuestion(false);
        });
        buttonContainer.appendChild(falseBtn);
        //====================
    }
}


export { CardArea }