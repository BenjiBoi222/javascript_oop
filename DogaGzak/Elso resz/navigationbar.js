import { ViewElement } from "./viewelement.js";
import { createDiv, createButton } from "./gombszab.js";

class NavigationBar extends ViewElement {
    #viewElementList;
    #buttonBar;
    #viewContainer;

    constructor(id){
        super(id);
        this.#viewElementList = [];

        this.#buttonBar = createDiv({ parent: this.div , classList: ['buttonbar']})
        
        this.#viewContainer = createDiv({ parent: this.div });
    }

    addViewElement(label, view){
        this.#viewElementList.push(view);

        const button = createButton({
            id: `btn-${view.id}`,
            parent: this.#buttonBar,
            label: label
        });

        button.addEventListener('click', () => {
            this.navigate(view.id);
        });
    }

    navigate(id){
        this.#viewContainer.innerHTML = '';

        const buttons = this.#buttonBar.querySelectorAll('button');
        buttons.forEach(btn => btn.classList.remove('active'));

        const selectedView = this.#viewElementList.find(v => v.id === id);
        const selectedButton = this.#buttonBar.querySelector(`#btn-${id}`);

        if (selectedView && selectedButton){
            selectedButton.classList.add('active');
            selectedView.appendTo(this.#viewContainer);
            selectedView.navigate();
        }
    }
}

export { NavigationBar }