// Access Modifier
//    -> public
//    -> private
//    -> protected

// encapsulation: making your member variable private 
// and write there respective getter and setters

export class Car {
    // member variables (actual parameters)
    private color: string;
    public mileage: string;
    public speed: string;
    public model: string;
    protected type: string;

    // default + parameter (formal parameters)
    constructor(color:string = "", mileage:string = "", model:string= "", speed:string="", type:string="") {
        this.color = color
        this.mileage = mileage
        this.model = model
        this.speed = speed
        this.type = type
    }

    getCarMileage() {
        return this.mileage;
    }

    getCarColor () {
        return this.color;
    }

    getCarType () {
        return this.type;
    }
}

const car = new Car();