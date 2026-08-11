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
console.log(...arr); // 1 2 3