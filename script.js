/* Syntax for Object 
const object_name = {
     key1: value1,
     key2: value2,
}
*/

let car = {
    Brand : "Toyota",
    Variant : "Wigo",
    Transmission : "Automatic",
    Lights : {
        Front : "LED",
        Rear : "LED/Bulb",
        Signal : "Bulb"
    },
    displayBrand(){
        alert(this.Brand);
    }
}

//Classes are just template for objects that's why it doesn't have data 
class myCar{
    constructor (brand, variant, transmission){
        this.brand = brand;
        this.variant = variant;
        this.transmission = transmission;
    }
}