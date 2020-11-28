const rows = 50;
const cols = 50;

let cellW;
let elements;
let states = [];

// ui elements
let radio;
let runBtn;

let sortSelectedId = -1;
let isSortSelected = false;

function setup() {
    createCanvas(1000, 600);
    cellW = width / rows;

    elements = new Array(floor(width / cellW));
    for (let i = 0; i < elements.length; i++) {
        elements[i] = float(random(height));
        states[i] = -1;
    }

    setupUI();
}
  
function draw() {
    background(51); 
              
    for(let i = 0; i < elements.length; i++) { 
        stroke(0); 
        fill(255); 
            
        if (states[i] == 0) { 
            fill(255, 0, 0); 
        } 
        else if (states[i] == 1) { 
            fill("#58FA82"); 
        } 
        else { 
            fill(255); 
        } 
        rect(i * cellW, height - elements[i], cellW, elements[i]); 
    } 

    if (isSortSelected) {
        runSort();
        isSortSelected = false;
    }
}

function setupUI() {
    radio = createRadio();
    radio.option(1, 'Bubble');
    radio.option(2, 'Selection');
    radio.option(3, 'Insertion');
    radio.option(4, 'Counting');
    radio.style('width', width);
    textAlign(CENTER);
    fill(255, 0, 0);

    button = createButton('Run');
    button.mousePressed(() => {
        sortSelectedId = radio.value();
        if (radio.value()) {
            isSortSelected = true;
        }
    });
}

function runSort() {
    switch (+sortSelectedId) {
        case 1: { 
            bubbleSort(elements, 0, elements.length, states);
            break;
        }
        case 2: {
            selectionSort(elements, states);
            break;
        }
        case 3: {
            insertionSort(elements, states);
            break;
        }
        case 4: {
            countingSort(elements, states);
            break;
        }
    }
    }
}