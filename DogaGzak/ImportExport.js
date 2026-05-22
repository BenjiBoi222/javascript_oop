import { ViewElement } from "./viewelement.js";
import { createFileInput, createButton, createSpan } from "./gombszab.js";

class ImportExport extends ViewElement {
    #manager;
    #resultDiv;

    constructor(id, manager) {
        super(id);
        this.#manager = manager;

        this.#resultDiv = document.createElement('div');
        this.div.appendChild(this.#resultDiv);

        this.#createImport();
        this.#createExport();

        this.#manager.importResultCallback = (message) => {
            this.#resultDiv.innerText = message;
        }
    }


    #createExport() {
        const exportBtn = createButton({ parent: this.div, label: 'Export' });

        exportBtn.addEventListener('click', () => {
            const content = this.#manager.getExportContent();
            alert(`Exportaltuk:\n${content}`)
        });
    }

    #createImport() {
        const fileInput = createFileInput(this.div);

        fileInput.addEventListener('change', (event) => {
            const file = event.target.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const text = e.target.result;
                    const lines = text.split('\n').filter(l => l.trim() !== '');
                    const questionTypeList = [];
                    // Kiszűrjük a fejlécet, és végigmegyünk a sorokon
                    for (let i = 1; i < lines.length; i++) {
                        const parts = lines[i].split(';');
                        if (parts.length >= 6) {
                            questionTypeList.push({
                                question: parts[0],
                                answer1: parts[1],
                                answer2: parts[2],
                                answer3: parts[3],
                                answer4: parts[4],
                                rightAnswer: parts[5]
                            });
                        }
                    }
                    this.#manager.addElementList(questionTypeList);
                }
            }
        });
    }
}

export { ImportExport };