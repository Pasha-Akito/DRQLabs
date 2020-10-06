class BMI { //class keyword to make class

    constructor(height, weight){ //constructor for the class, two arguments
        this.height = height; //variable for height
        this.weight = weight; //variable for we ight
    }

    calculateBMI(){ //Method to calculate BMI
        let bmi = this.weight/(this.height**2); //formula to calculate bmi for the variable bmi
        return bmi; //returns bmi variable 
    }

}

let MyBmi = new BMI(1.85, 60); //making class object
let calculatedBMI = MyBmi.calculateBMI(); //getting the value from the calculateBMI method
console.log(calculatedBMI); //printing to console the bmi 