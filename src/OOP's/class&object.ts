// class -> blueprint (moduler) contains member function 
//          and member variables

class User { 
    // member variable
    public name:string;
    public age:number;
    // parameterized constructor
    constructor(name:string="", age:number=0) {
        this.name = "",
        this.age = 0
    }

    // member function
    getUserById() { 
     // object of current class 
      this.name ="sarang"  
      this.getAllUsers() 
    }

    getAllUsers() {
        this.getUserById()
    }

}
// RAM (stack, heap)

// object -> instance of a class
// xyz
const user1 = new User("sample", 10); // pahila ref
user1.name = "siddhant pagal hai"
user1.age = 10
user1.getAllUsers();
user1.getUserById();
const user2 = new User(); // dusra ref
user2.name = "deep bhai is great"
user2.age = 18
user2.getAllUsers();
user2.getUserById();


// OOPS (Object Orientated programming)
// -> Encapsultion
// -> Abstraction
// -> Inheritance
// -> polymorphism