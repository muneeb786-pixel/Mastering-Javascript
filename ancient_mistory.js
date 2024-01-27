const fs = require('fs');
const readline = require('readline');

// Check if argument has a file name
if (process.argv.length <= 2) {
    console.log('Input file is not specified');
    return;
}

// Get file name
const fileName = process.argv[2];

function parseInputFile(filePath) {
    const actions = [];

    const data = fs.readFileSync(filePath, 'utf-8');
    const lines = data.split('\n');

    lines.forEach(line => {
        const [action, value] = line.trim().split(' ');

        if (action && value) {
            actions.push({ action, value: parseInt(value, 10) });
        }
    });

    return actions;
}

function checkStack(actions) {
    let stack = []
    let isStack = false;
    actions.map((item) => {
        if (item.action == 'push') {
            stack.push(item.value)
        } else {
            let value = stack.pop(item.value);
            { value == undefined || value != item.value ? isStack = false : isStack = true }
        }
    })
    if (stack.length <= 0 && isStack == true) {
        return true
    } else {
        return false
    }
}
function checkQueue(actions) {
    let stack = []
    let isQueue = false;
    actions.map((item) => {
        if (item.action == 'push') {
            stack.push(item.value)
        } else {
            let value = stack.shift(item.value);
            { value == undefined || value != item.value ? isQueue = false : isQueue = true }
        }
    })
    if (stack.length <= 0 && isQueue == true) {
        return true
    } else {
        return false
    }
}
function checkPQ(actions) {
    let stack = []
    let isPQ = false;
    actions.map((item) => {
        if (item.action == 'push') {
            stack.push(item.value)
            stack.sort();
        } else {
            let value = stack.pop(item.value);
            { value == undefined || value != item.value ? isPQ = false : isPQ = true }
        }
    })
   return isPQ
}

const result = parseInputFile(fileName);

let isQueue = checkQueue(result);
let isStack = checkStack(result);
let isPQ = checkPQ(result);

if((isStack && isQueue) || (isStack && isPQ) || (isQueue&& isPQ)) return console.log('NOT SURE')
else if(isStack)  return console.log('LIFO')
else if (isQueue) return console.log('FIFO')
else if(isPQ) console.log('PQ')
else console.log('IMPOSSIBLE')
