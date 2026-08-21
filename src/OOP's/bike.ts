import { Car } from "./encapsulation";
// encapsulation: making your member variable private 
// and write there respective getter and setters
class Bike   {
   private _color:string;
   private _milage:string;
   private _engineCapacity:string;

   constructor() {
    this._color = "";
    this._milage = ""
    this._engineCapacity = ""
   }

   set color(color:string) {
      this._color = color;
   }
   get color(): string {
      return this._color ;
   }

   get milage():string {
      return this._milage
   }
   set milage(mileage:string) {
      this.milage = mileage;
   }

   get engineCapacity(): string {
      return this._engineCapacity;
   }
   set engineCapacity(engineCapacity:string) {
      this.engineCapacity = engineCapacity;
   }
}

const bike = new Bike();