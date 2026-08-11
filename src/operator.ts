// falsy - 0, false, blank string, null, undefined, document.all()

let str:unknown; //false

if(str){ // true
    console.log("truthy value")
} else {
    console.log("falsy value")
}

console.log(str);