// interface & types
type TInfo = { age: number; address: string[] }

type TObjArr = (string | number | boolean | TInfo)

type TNewObj = {
    name: string;
    surname: string;
    hobbie: string;
}

// import type { IObj } from "./object"
export interface IObj {
    name: string;
    wife: string;
    dob: string;
    arr: TObjArr[];
    newObj: TNewObj;
}

let obj:IObj = {
  name: "paju",
  wife: "riya",
  dob: "23/5/2004",
  arr: ["riya", "ruchika", "etc", 10, 30, false, { 
    age: 21, 
    address: ["ramtek", "kamptee", "nagpur", "mansar"] 
  }],
  newObj: {
    name: "prajwal",
    surname: "khandekar",
    hobbie: "ladkiya patana"
  }
};


Object.freeze(obj);

console.log(obj)