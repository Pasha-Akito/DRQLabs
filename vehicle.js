class Vehicle { //class keyword to make class

    constructor(make, model, year){ //constructor for the class, three arguments
        this.make = make; //variable for make
        this.model = model; //variable for model 
        this.year = year; //variable for year
    }

    information(){ //method to print out variables from the constructor
        console.log(`Make : ${this.make}.`); // prints out make to console
        console.log(`Model : ${this.model}.`); // prints out model to console
        console.log(`Year : ${this.year}.`); // prints out year to console
    }

}

class Cars extends Vehicle{ //extends keyword lets Cars class inherit from Vehicle
    
    constructor(make, model, year, doors){ //constructor, four arguments
        super(make, model, year); // using super keyword to get variables from parent class
        this.doors = doors; //variable for doors
    }

    information(){ //method to print out variables from the constructor
        super.information(); //using super to get functionality from parents information class
        console.log(`Doors : ${this.doors}.`); // prints out doors to console
    }

}

let myCar = new Cars('VW', 'Golf', 2000, 4); //making a cars object
myCar.information(); //using information method to print to console 
