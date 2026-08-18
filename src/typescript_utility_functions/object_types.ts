import type { IObj } from "../object";
import createUser from "./function_utility_types";
// Pick<T, K>	
// type INewObj = Pick<IObj, "arr" | "newObj" >
// IObj {
//     name: string;
//     wife: string;
//     dob: string;
//     arr: TObjArr[];
//     newObj: TNewObj;
// }

// Omit
// type INewObj = Omit<IObj, "name" | "wife" | "dob">

// Required
// type TUser = Required<IObj>

// Partial<T>
// type TUser = Partial<IObj>

// Readonly<T>	

type TUser = Readonly<IObj>;

let obj:TUser = {
  name: "siddhant",
  wife: "",
  dob: "",
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

type UserMap = Record<string, {
    name: string;
    dob: string;
}>

// key: {random_id} value: object {name,dob}
const users:UserMap = {
    "101": {
        name:"aniket",
        dob:"16/05/1945"
    },
    "102": {
        name: "deep",
        dob: "15/7/2027"
    }
}


type TCreateUser = ReturnType<typeof createUser>

type TParamCreateUser = Parameters<typeof createUser>