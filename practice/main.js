const x = [["Billy", 20], ["Bob", 21], ["Joe", 22]];

const y = x.map((item) => {
    return item[0];
    });

console.log(y);


const removeLastOfX = x.pop();
console.log(x);

//adding an incrementor
let i = 5;

function inc() {
    return i + 1;
}

console.log(inc());