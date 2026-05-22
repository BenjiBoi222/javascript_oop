/**
 * @param {{id?: string, parent?: HTMLElement, classList?: string[]}} options 
 * @returns {HTMLDivElement}
 */
const createDiv = (options = undefined) => {
    const div = document.createElement('div'); // 1.
    if (options !== undefined) { // 2.
        const { id, parent, classList } = options; // 2.1
        if (id !== undefined) { // 2.2
            div.id = id; // 2.2.1
        }
        if (parent !== undefined) { // 2.3
            parent.appendChild(div); // 2.3.1
        }
        if (classList !== undefined) { // 2.4
            for (const className of classList) { // 2.4.1
                div.classList.add(className); // 2.4.1.1
            }
        }
    }
    return div; // 3.
}

/**
 * @param {{id?: string, parent: HTMLElement, classList?: string[], label: string}} options 
 * @returns {HTMLButtonElement}
 */
const createButton = (options) => {
    const { id, parent, classList, label } = options; // 1.
    const button = document.createElement('button'); // 2.
    button.innerText = label; // 3.
    if (id !== undefined) { // 4.
        button.id = id; // 4.1.
    }
    if (classList !== undefined) { // 5.
        for (const className of classList) { // 5.1.
            button.classList.add(className); // 5.1.1.
        }
    }
    if (parent !== undefined) { // (Bár a leírás nem írta külön, a parent paraméter miatt érdemes hozzácsatolni)
        parent.appendChild(button);
    }
    return button; // 6.
}

/**
 * @param {string[]} headerContentList 
 * @param {HTMLElement} parent 
 * @returns {HTMLTableSectionElement}
 */
const createTable = (headerContentList, parent) => {
    const table = document.createElement('table'); // 1.
    parent.appendChild(table); // 2.
    const thead = document.createElement('thead'); // 3.
    table.appendChild(thead); // 4.
    const tr = document.createElement('tr'); // 5.
    thead.appendChild(tr); // 6.

    for (const text of headerContentList) { // 7.
        const th = document.createElement('th'); // 7.1.
        th.innerText = text; // 7.2.
        tr.appendChild(th); // 7.3.
    }

    const tbody = document.createElement('tbody'); // 8.
    table.appendChild(tbody); // 9.
    return tbody; // 10.
}

/**
 * @param {HTMLTableSectionElement} tbody 
 * @param {Array} list
 */
const clearTbodyAndHandleEmptyList = (tbody, list) => {
    tbody.innerHTML = ''; // 1.
    if (list.length === 0) { // 2.
        const row = createRowForTbody(tbody); // 3. (Létrehozunk egy sort)
        createTextTableCell("Üres Lista", row); // 3. (Beleteszünk egy cellát)
    }
}

/**
 * @param {HTMLTableSectionElement} tableSection 
 * @returns {HTMLTableRowElement}
 */
const createRowForTbody = (tableSection) => {
    const tr = document.createElement('tr'); // 1.
    tableSection.appendChild(tr); // 2.
    return tr; // 3.
}

/**
 * @param {string} content 
 * @param {HTMLTableRowElement} parent 
 */
const createTextTableCell = (content, parent) => {
    const td = document.createElement('td'); // 1.
    td.innerText = content; // 2.
    parent.appendChild(td); // 3.
}

/**
 * @param {HTMLTableRowElement} parent 
 * @returns {HTMLButtonElement}
 */
const createEditTableCell = (parent) => {
    const td = document.createElement('td'); // 1.
    const button = createButton({ label: "Szerkesztés", parent: td }); // 2.
    parent.appendChild(td); // 3.
    return button; // 4.
}

/**
 * @param {CreateFieldsCallback} createCallback 
 * @param {SubmitEventListener} eventlistener 
 */
const createForm = (createCallback, eventlistener) => {
    const form = document.createElement('form'); // 1.
    createCallback(form); // 2.

    const button = document.createElement('button'); // 3.
    button.innerText = "Küldés"; // 4.
    form.appendChild(button); // 5.

    form.addEventListener('submit', eventlistener); // 6.

    return { form, button }; // 7.
}

/**
 * @param {{id: string, name: string, labelContent: string, parent: HTMLElement}} param
 * @returns {{errorElement: HTMLElement, input: HTMLInputElement}}
 */
const createInputField = ({ id, name, labelContent, parent }) => {
    const div = createDiv({ parent: parent }); // 1.

    const label = document.createElement('label'); // 2.
    label.innerText = labelContent; // 3.
    label.htmlFor = id; // 4.
    div.appendChild(label); // 5.

    const input = document.createElement('input'); // 6.
    div.appendChild(input); // 7.
    input.type = 'text'; // 8.
    input.id = id; // 9.
    input.name = name; // 10.

    const errorElementDiv = createDiv({ parent: div, classList: ['error'] }); // 11.

    return { errorElement: errorElementDiv, input: input }; // 12.
}

/**
 * @param {HTMLElement} parent 
 * @returns {HTMLInputElement}
 */
const createFileInput = (parent) => {
    const input = document.createElement('input'); // 1.
    input.type = 'file'; // 2.
    parent.appendChild(input); // 3.
    return input; // 4.
}

/**
 * @param {HTMLElement} parent 
 * @param {string} content 
 */
const createSpan = (parent, content) => {
    const span = document.createElement('span'); // 1.
    span.innerText = content; // 2.
    parent.appendChild(span); // 3.
}

/**
 * @param {HTMLElement} element
 * @returns {void} 
 */
const show = (element) => {
    element.classList.remove('hidden'); // 1.
}

/**
 * @param {HTMLElement} element 
 * @returns {void}
 */
const hide = (element) => {
    element.classList.add('hidden'); // 1.
}

/**
 * @param {{id: string, label: string, name: string}} param0 
 * @returns {HTMLElement}
 */
const createRadioButton = ({ id, label, name }) => {
    const div = document.createElement('div'); // 1.
    const input = document.createElement('input'); // 2.
    input.name = name; // 3.
    input.value = id; // 4.
    input.id = id; // 5.
    input.type = 'radio'; // 6.
    div.appendChild(input); // 7.

    const labelElement = document.createElement('label'); // 8.
    labelElement.innerText = label; // 9.
    labelElement.htmlFor = id; // 10.
    div.appendChild(labelElement); // 11.

    return div; // 12.
}

export {
    createDiv, createButton, createTable, clearTbodyAndHandleEmptyList,
    createTextTableCell, createRowForTbody, createForm, createInputField,
    createFileInput, createEditTableCell, createSpan, hide, show, createRadioButton
};
