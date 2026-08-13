// hoisting
function abcd2(n:number) {
    for(let i:number=0; i<n; i++) {
        let str:string = ""
        for(let j:number=0; j<=i; j++) {
            str += "* "; // str = str + "* "
        }
        // console.log(str);
    }
}

abcd2(5);

// Not hoisted.
const greet= function(name:string) {
  return "Hi, " + name;
};

// console.log(greet("hello"));


const greet1 = () => "Hello, paju";

// default
const add = (a:number=10) => {
	for(let i=0;i<a;i++){
		// console.log("hello");
	} 
}

add(2);


function sum(...nums:number[]):number  {
  let accumulator:number = 0;
  for(let i:number=0; i< nums.length; i+=2) {
        accumulator += nums[i]!;
  }
  return accumulator;
}

sum(2,3)


// speard operator
const arr = [1, 2, 3];
// console.log(...arr); // 1 2 3

// Higher-Order Functions and Callbacks (arg:string)=>return_type
function bomb(a:(str:string)=>string = (str:string) => { return str + " jii" }):void { 
  if(a) console.log(a("hamza"))
}

// callback
function a(str:string) { return str + " jii" }

// higher order function
// bomb(a);


// a function which having same amount of parameter 
// and different type of parameter with same function signature 
// known as function overloading
export function combine(a: number, b: number): number;
export function combine(a: string, b: string): string; 
export function combine(a: number, b: string): string; 
export function combine(a: any, b: any): any {
  return a + b;
}

combine("paju","riya"); //second combine called
combine(10,20) // first combined called
combine(40,"paju"); // third combined called

const a1 = 10;
export default a1; 


// closers and lexical scoping

function outer(): ()=>number {
  let count = 0;
  return function inner() {
    count += 1;
    return count;
  }
}

const counter = outer(); // inner1
console.log(counter()); // 1
console.log(counter()); // 2
console.log("---------------------------")
console.log(outer()()); // inner2
console.log(outer()()); // inner3