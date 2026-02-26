/** 
 * @typedef {{author: string, title1: string, concepts1: string, title2?: string,  concepts2?: string}} RowspanRowType  
 * @typedef {{author: string, title: string, concepts: string, concepts2?: string}} ColspanRowType
 * @typedef {{name: string, colSpan?: number}} HeaderType
 * @callback RenderRowCallBack
 * @param {HTMLTableSectionElement} RenderRowCallBack
 * 
*/

/** @type {HeaderType[]}  */
const rowspanHeaderArr = [{name: "Szerző"}, {name: "Mű"}, {name: "Fogalmak"}] 
/** @type {HeaderType[]}   */
const colspanHeaderArr = [{name: "Szerző"},{name: "Mű"} , {name: "Fogalmak" ,colSpan: 2}] 

/** @type {RowspanRowType[]}  */
const rowspanBodyArr = [
    {
        author: "Appolliniare",
        title1: "A megsebzett galamb és a szökőkút", 
        concepts1: "képvers", 
        title2: "Búcsú",
        concepts2: "avantgárd" 
    },
    {
        author: "Thomas Mann",
        title1: "Mario és a varázsló",
        concepts1: "kisregény" 
    },
    {
        author: "Franz Kafka",
        title1: "A per", 
        concepts1: "képvers", 
        title2: "Az átvlátozás", 
        concepts2: "kisregény" 
    }
]



/** @type {ColspanRowType[]} */
const colspanBodyArr = [ 
    {
        author: "Appolliniare", 
        title: "A megsebzett galamb és a szökőkút",
        concepts: "Képvers",  
        concepts2: "Emlékezés", 
    },
    {
        author: "Appolliniare", 
        title: "Búcsú", 
        concepts: "Avantgárd" 
    },
    {
        author: "Thomas Mann", 
        title: "Mario és a varázsló", 
        concepts: "Kisregény" 
    },
    {
        author: "Franz Kafka",
        title: "A per", 
        concepts: "regény" 
    },
    {
        author: "Franz Kafka", 
        title: "Az átváltozás",
        concepts: "kisregény", 
        concepts2: "groteszk" 
    }
]

// renderColspanBody(makeTableBodyWithHeader(colspanHeaderArr), colspanBodyArr)
// renderRowspanBody(makeTableBodyWithHeader(rowspanHeaderArr), rowspanBodyArr)

class Table {
    #tbody;
    /**
     * @param {HeaderType[]} headerArr 
     */
    constructor(headerArr) {
        this.#tbody = makeTableBodyWithHeader(headerArr);
    }
    get tbody() {
        return this.#tbody;
    }
    /**
     * @param {RenderRowCallBack} callback 
     */
    appendRow(callback) {
        callback(this.#tbody);
    }
}

class ColSpanTable extends Table {
    constructor(headerArr) {
        super(headerArr);
    }
    /**
     * @param {ColspanRowType[]} bodyArr
     */
    render(bodyArr) {
        renderColspanBody(this.tbody, bodyArr);
    }
}

class RowSpanTable extends Table {
    constructor(headerArr) {
        super(headerArr);
    }
    /**
     * @param {RowspanRowType[]} bodyArr
     */
    render(bodyArr) {
        renderRowspanBody(this.tbody, bodyArr);
    }
}

const colSpanTable = new ColSpanTable(colspanHeaderArr);
colSpanTable.render(colspanBodyArr);

const rowSpanTable = new RowSpanTable(rowspanHeaderArr);
rowSpanTable.render(rowspanBodyArr);

const button = document.createElement('button');
button.innerText = "RowSpan Hozzáadás"
document.body.appendChild(button);

button.addEventListener('click', onClickButton.bind(rowSpanTable));

/**
 * 
 * @this {Table} a táblázatpéldány 
 */
function onClickButton(e) {
    /** @type {RowspanRowType[]}  */
    const obj = {
        author: "Thomas Mann",
        title: "Mario és a varázsló",
        concepts: "kisregény" 
    }
    this.appendRow(function(body) {
        const tr = document.createElement('tr');
        body.appendChild(tr);

        const td1 = document.createElement('td');
        td1.innerText = obj.author;
        tr.appendChild(td1);

        const td2 = document.createElement('td');
        td2.innerText = obj.title;
        tr.appendChild(td2);

        const td3 = document.createElement('td');
        td3.innerText = obj.concepts;
        tr.appendChild(td3);
    })
}