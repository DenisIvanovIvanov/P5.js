async function bubbleSort(elements, start, end, states) {
    if (start >= end)
        return;

    for (let i = 0; i < end - 1; i++) {
        for (let j = 0; j < end - i - 1; j++) {
            if (elements[j] >= elements[j + 1]) {
                states[j] = 1;
                await sleep(50);
                // swap
                let t = elements[j];
                elements[j] = elements[j + 1];
                elements[j + 1] = t;
                states[j + 1] = 0;
            }
            states[j] = 2;
        }
    }
}

async function selectionSort(elements, states) {
    for (let i = 0; i < elements.length - 1; i++) {
        let min = i;
        
        states[i] = 1;
        for (let j = i + 1; j < elements.length; j++) {
            
            states[j] = 1;
            await sleep(30);
            if (elements[j] < elements[min]) {
                min = j;
            }
            states[j] = -1;
        }

        let temp = elements[min];
        elements[min] = elements[i];
        elements[i] = temp;
        states[i] = 0;
    }
}

async function insertionSort(elements, states) {
    for (let i = 1; i < elements.length; ++i) {
        let key = elements[i];
        let j = i - 1;
        while (j >= 0 && elements[j] > key) {
            states[j] = 1;
            await sleep(30);
            elements[j + 1] = elements[j];
            j = j - 1;
            states[j + 1] = -1;
        }
        elements[j + 1] = key;
    }
}

function sleep(ms) { 
    return new Promise(resolve => setTimeout(resolve, ms)); 
} 