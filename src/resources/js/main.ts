document.addEventListener("DOMContentLoaded", () => {
    // setTimeout(() => { jsDomFunction() }, 2000);
    // setTimeout(() => { tsFunction() }, 2000);
});

const tsFunction = () : void => {
    type objArray = Array<{ value: string }>;

    const fillArray = (array: objArray, arrayLength: number) : objArray => {
        for (let i = 0; i < arrayLength; i++) array.push({ value: generateRandomString() });
        return array;
    }

    const generateRandomString = () => {
        const strLength = Math.ceil(Math.random() * 10);
        
        return (Array.from({
            length: strLength
        }, () => String.fromCharCode((97 + Math.floor((Math.random() * 26)))))).join('')
    }

    let exampleArray : objArray = [];
    let exampleArrayModified : objArray = fillArray(exampleArray, Math.ceil(Math.random() * 10));
    console.log(exampleArrayModified);    
}





const jsApiFunction = () => {
    createStyles();

    let main = document.getElementsByTagName('main')[0];
    
    let section = document.createElement('section');
    section.id = 'dynamic-content';
    section.className = 'dynamic-content';
    section.innerHTML = `
        <table id="dynamic-table" class='dynamic-table'>
            <tr style="{border: 1px solid black}">
                <th>Name</th>
                <th>Gender</th>
                <th>Hair</th>
                <th>Eyes</th>
            </tr>
        </table>
    `;    
    main.prepend(section);

    promiseWait(1).then(async () => {
        const apiUrl = 'https://swapi.dev/api/people/';
        
        try {
            showLoader('dynamic-table');
            let fetchPromise = await fetch(apiUrl);
            if (!fetchPromise.ok) {
                throw Error(fetchPromise.status + ": " + fetchPromise.statusText);
            }

            let json = await fetchPromise.json();
            hideLoader('dynamic-table');

            json.results.map((person: Person) => {
                addPersonToTable(person);
            });
        } catch (e: any) {
            let p = document.createElement('p');
            p.innerText = e;
            section.append(p);
            hideLoader('dynamic-table');
        }
    });

    function createStyles() {
        let style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = `
                        .dynamic-table { margin-left: 30px; }    
                        .dynamic-content > table, tr, th, td { border: 1px solid black; }
                        `;

        document.getElementsByTagName('head')[0].appendChild(style);
    }

    function promiseWait(seconds: number) {
        let promise = new Promise((resolve,reject) => {
            setTimeout(() => { resolve("done") }, seconds * 1000);
        });
        
        return promise;
    }

    function addPersonToTable(person: Person) {
        let table = document.getElementById('dynamic-table');
        let tr = document.createElement('tr');
        tr.innerHTML = `
                        <td>${person.name}</td>
                        <td>${person.gender}</td>
                        <td>${person.hair_color}</td>
                        <td>${person.eye_color}</td>
                        `;
        table!.append(tr);
    }

    function showLoader(nodeIdToAppend: string) {
        let node = document.getElementById(nodeIdToAppend);
        
        let loader = document.createElement('span');
        loader.id = nodeIdToAppend + '-loader';
        loader.className = 'loader';
        node!.append(loader);
    }

    function hideLoader(nodeId: string) {
        let loader = document.getElementById(nodeId + '-loader');
        loader!.remove();
    } 

    type Person = {
        name: string;
        gender: string;
        hair_color: string;
        eye_color: string;
    };

}


const jsDomFunction = () => {
    createStyles();

    let main = document.getElementsByTagName('main')[0];
    
    let section = document.createElement('section');
    section.id = 'dynamic-content';
    section.className = 'dynamic-content';
    section.innerHTML = `
                        <ul id="dynamic-list" class='dynamic-list' style="{display: 'block'}">
                            <li class="dynamic-list-li">Initial LI - No Click</li>
                        </ul>
                    `;
    
    main.prepend(section);

    let dynamicDiv = document.getElementById('dynamic-content');
    appendButton(dynamicDiv!, 'Add List Item', 'button-add', 'button-add dynamic-list-button', () => { modifyList('dynamic-list', 'dynamic-list-li', 'add'); });
    appendButton(dynamicDiv!, 'Remove List Item', 'button-remove', 'button-remove dynamic-list-button', () => { modifyList('dynamic-list', 'dynamic-list-li', 'remove') });
    
    // #region Helper Functions
    
    function createStyles() {
        let style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = `
                            .dynamic-list { margin-left: 30px; }
                            .dynamic-list-button { margin-left: 30px; height: 50px; }
                            `;

        document.getElementsByTagName('head')[0].appendChild(style);
    }

    function appendButton(element: HTMLElement, text: string, id: string, className: string, onClickFunction: EventListener) {
        let button = document.createElement('button');
        button.innerText = text;
        button.id = id;
        button.className = className;
        element.append(button);

        document.getElementById(id)!.addEventListener('click', onClickFunction, true);
    }

    function modifyList(listId: string, liClassName: string, action: "add"|"remove") {
        let list = document.getElementById(listId);
        
        if (action == 'add') {
            let listItem = document.createElement('li');
            listItem.innerText = 'Added LI - Click Me';
            listItem.className = liClassName;
            list!.append(listItem);
            listItem.addEventListener('click', () => { 
                document.getElementById('dynamic-list')!.style.backgroundColor = Math.floor(Math.random()*16777215).toString(16);
            });
        }
        else if (action == 'remove') {
            let listItems = document.getElementsByClassName(liClassName);
            if (listItems.length > 0) {
                listItems[listItems.length-1].remove();
            }
        }
    }

    // #endregion

}


const jsOneFunction = () => {    
    const ARRAY_LENGTH = 5;
    const MAX_INT = 100;


    console.log('START: Generate Random Array');
    const randomNumbers = generateRandomArray(ARRAY_LENGTH, MAX_INT);
    printArray(randomNumbers);
    console.log('END: Generate Random Array');
    
    console.log('START: Adding counter to array values');
    for (let counter = 0; counter < randomNumbers.length; counter++) {
        randomNumbers[counter] += counter;
    }
    console.log('RESULT: Adding counter to array values: ');
    printArray(randomNumbers);
    console.log('END: Adding counter to array values');
    
    console.log('START: Printing Even or Odd - Stored Array');
    logIsEvenOrOdd(randomNumbers);
    console.log('END: Printing Even or Odd - Stored Array');
    
    console.log('START: Printing Even or Odd - New Array');
    logIsEvenOrOdd(generateRandomArray(ARRAY_LENGTH, MAX_INT));
    console.log('END: Printing Even or Odd - New Array');
    
    console.log('START: Manipulate Array');
    randomNumbers.splice(2, 1);
    printArray(randomNumbers);
    
    randomNumbers.unshift(-1);
    printArray(randomNumbers);
    
    randomNumbers.push(99999999);
    printArray(randomNumbers);
    console.log('END: Manipulate Array');

    
    // #region Required Methods

    function logIsEvenOrOdd(numberArray: number[]) {
        let i = 0;
        while (i < numberArray.length) {
            if (numberArray[i] % 2 == 0) console.log(`${numberArray[i]} is even`);
            else console.log(`${numberArray[i]} is odd`);
            i++;
        }   
    }

    // #endregion Required Methods

    // #region Helper Methods

    function generateRandomArray(length: number, max: number) {
        return Array(length).fill(0).map(x => Math.round(Math.random() * max));
    }

    function printArray(numbers: number[]) {
        console.log('\t--Printing Array--');
        for (let i = 0; i < numbers.length; i++) {
            console.log(i + ': ' + numbers[i]);
        }
        console.log('\t--End of Array--');
    }
    // #endregion Helper Methods

}
