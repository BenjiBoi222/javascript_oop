/** 
 * @typedef {{author: string, title1: string, concepts1: string, title2?: string,  concepts2?: string}} RowspanRowType  
 * @typedef {{author: string, title: string, concepts: string, concepts2?: string}} ColspanRowType
 * @typedef {{name: string, colSpan?: number}} HeaderType
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

/** 
 * Tábla alaposztály
 */
class Table{
    #tbody
    /**
     * @param {HeaderType[]} headerArr
     */
    constructor(headerArr){
        this.#tbody = makeTableBodyWithHeader(headerArr);
    }
    /**
     * @type {HTMLTableSectionElement}
     */
    get tbody() {return this.#tbody}
    /**
     * @param {Function} callback
     */
    appendRow(callback){callback(this.#tbody)}
}

/**
 * Colspan táblázat osztály
 */
class ColSpanTable extends Table{
    /**
     * @param {HeaderType[]} headerArr
     */
    constructor(headerArr){
        super(headerArr)
    }
    /**
     * @param {ColspanRowType[]} bodyArr
     */
    render(bodyArr){
        renderColspanBody(this.tbody, bodyArr)
    }
}

/**
 * Rowspan táblázat osztály
 */
class RowSpanTable extends Table{
    /**
     * @param {HeaderType[]} headerArr
     */
    constructor(headerArr){
        super(headerArr)
    }
    /**
     * @param {RowspanRowType[]} bodyArr
     */
    render(bodyArr){
        renderRowspanBody(this.tbody, bodyArr)
    }
}

const colSpanTable = new ColSpanTable(colspanHeaderArr);
colSpanTable.render(colspanBodyArr);

const rowSpanTable = new RowSpanTable(rowspanHeaderArr);
rowSpanTable.render(rowspanBodyArr);

const button = document.createElement("button");
button.innerText = "Gomb row";
document.body.appendChild(button);


button.addEventListener('click',handleButtonEvent.bind(rowSpanTable))

/**
 * Rowspan sor hozzáadása
 * @param {Event} e
 */
function handleButtonEvent(e){
    /**
     * @type {RowspanRowType}
     */
    const obj = {
        author: "Thomas Mann",
        title1: "Mario és a varázsló",
        concepts1: "kisregény" 
    }
    this.appendRow(function(body){
        const tr = document.createElement('tr');
        body.appendChild(tr);

        const td1 = document.createElement('td');
        td1.innerText = obj.author;
        tr.appendChild(td1);

        const td2 = document.createElement('td');
        td2.innerText = obj.author;
        tr.appendChild(td2);

        const td3 = document.createElement('td');
        td3.innerText = obj.author;
        tr.appendChild(td3);
    })
}

/**
 * Colspan gomb létrehozása
 */
const colspanButton = document.createElement('button');
colspanButton.innerText = "Gomb col";
document.body.appendChild(colspanButton);

/**
 * Colspan sor hozzáadása
 * @param {Event} e
 */
colspanButton.addEventListener('click', function(e) {
    e.preventDefault();

    /**
     * @type {ColspanRowType}
     */
    const obj = {
        author: "Oscar Wilde",
        title: "Az Importance of Being Earnest",
        concepts: "Dráma",
        concepts2: "Satíra"
    };

    colSpanTable.appendRow(function(body) {
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

        if(obj.concepts2) {
            const td4 = document.createElement('td');
            td4.innerText = obj.concepts2;
            tr.appendChild(td4);
        }else {
            td3.colSpan = 2;
        }
    })
})