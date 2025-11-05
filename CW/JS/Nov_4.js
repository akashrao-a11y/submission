const values = [5, 3, 'sriram', 2];

let sum = 0;

for (let i = 0; i < values.length; i++) {
    if (typeof values[i] === 'number') {
        sum += values[i];
    }
}

console.log('Sum of numbers:', sum);
// --------------------------------------------------------------------
var b1=[5,3,"sriram",2];
let sum=0;
for(var i=0; i<b1.length;i++){
    if(!isNaN(b1[i])) sum+=b1[i];
}
console.log('sum is '+sum);
 // --------------------------------------------------------------------
const[first,...rest]=[5,3,2];
console.log(first);
console.log(rest);
// --------------------------------------------------------------------
function extendedHello(message, number) {
    console.log("Message:", message);
    if (number !== undefined) {
        console.log("Number:", number);
    }
    // if (extra !== undefined) {
    //     console.log("Extra:", extra);
    // }
}

extendedHello("akash");
extendedHello("hello", 45);
extendedHello("world", 23);
// --------------------------------------------------------------------     
const arr = [5, 3, "sriram", 2];
const sumWithReduce = arr.reduce((acc, val) => typeof val === 'number' ? acc + val : acc, 0);
console.log('Sum using reduce:', sumWithReduce);
// --------------------------------------------------------------------

function block(message) {
    function foo () {
        console.log(message);
    }
    foo();
    let x = 10;
}
// --------------------------------------------------------------------

let vals = [];
for (var x = 0; x < 4; x += 1) {
    vals.push(((y) => () => y)(x));
}
console.log(vals.map(x => x()));
