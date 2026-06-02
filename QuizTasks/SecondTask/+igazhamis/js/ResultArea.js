import { PlayArea } from "./PlayArea.js";

class ResultArea extends PlayArea {
    /**
     * @param {SelectManager} manager 
     * @param {QuestionResultViewType[]} results 
     */
    constructor(manager, results){
        super(manager);

        //====================
        /* 
         * Creates the result showcase header
         * Creates the container div that will have the answers
         * Creates the reset button that will reset the game
         */
        const recap = document.createElement('h1');
        const rowContainer = document.createElement('div');
        const resetButton = document.createElement('button');
        //====================

        //====================
        /*
         * Creats a counter for the right answers
         * A for loop than iterates through the answwers
         * Creates a row with each loop that will contain the answer is right or wrong
         * 
         * IF an answer is right then increases the right answer count, 
         *  the rows text will show the question and the answer along with the text 'Helyes valasz',
         *  than sets the background green to show the player that the given answer was right
         * 
         * IF an answer is wrong then the rows text will show the question and the asnwer along with the text
         *  'Helytelen valasz', and sets the backround color to red to show the player that their given answer was wrong 
         */
        let rightCount = 0;
        for (let i = 0; i < results.length; i++){
            const row = document.createElement('div');

            if (results[i].selected === results[i].rightAnswer) {
                rightCount++;

                row.textContent = `${results[i].question} Helyes valasz ${results[i].selected}`;
                row.className = 'green-bg';
            } 
            else {
                row.textContent = `${results[i].question} Helytelen valasz ${results[i].selected}`;
                row.className = 'red-bg';
            }
        }
        //====================

        //====================
        /*
         * Sets the recap divs text to show the amount of right answer the player did 
         * Appends the recap div to the page
         */
        recap.textContent = `Az eredmeny: ${rightCount}/${results.length}`;
        this.div.appendChild(recap);
        //====================

        //====================
        /*
        *Appends the row contasiner to the page
        */ 
        this.div.appendChild(rowContainer);
        //====================

        //====================
        /*
         * Sets the reset buttons text to 'Ujra'
         * Sets an event listener to the resetButton, so when clicked it calls the managers reset function
         * Then appends the button to the page 
         */
        resetButton.textContent = 'Ujra';
        resetButton.addEventListener('click', () => {
            this.manager.reset();
        });

        this.div.appendChild(resetButton);
        //====================
    }
}

export { ResultArea };