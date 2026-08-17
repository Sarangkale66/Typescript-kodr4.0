

// nnssbbu --> primitive
// referneces [] {}

// arr1 mera array hai
function deep(arr1: unknown[]): (unknown[] | null) {
    if(typeof arr1 === "object" && Array.isArray(arr1)) {
        const newArr:unknown[] = [];
        arr1.forEach((elem)=>{
            if(elem && Array.isArray(elem)) {
                newArr.push(deep(elem))
            } else {
                newArr.push(elem);
            }
        })
        return newArr;
    } else {
        return null;
    }
}

const arr1:(number|(number|(number|number[])[])[]|null)[] = [11, 2, 33, 4, [1, 22, 3, [10, 2, [101, 102]]], null];
const arr2 = deep(arr1); // deepCopy

if(arr2) {
    arr2[1] = 100;
    if(typeof arr2[4] === "object")
        if(Array.isArray(arr2[4])) 
            arr2[4][0] = 10;
} 

console.log(arr1);
console.log(arr2);

// tuples
let tup: [number, string, any] = [10, "sarang", null];

