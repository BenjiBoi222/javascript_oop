class Table {
    #manager;

    constructor(id, manager, headerString){
        this.#manager = manager;
        this.#manager.renderCallback = (list) => {
            
        }
    }


}

class QuestionManager{
    #questionList;

    #renderCallback;

    constructor(questions){

    }

    getAllElement(){

    }

    set renderCallback(callback){
        this.#renderCallback = callback;
    }
}