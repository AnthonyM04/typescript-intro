let firstName: string = "Anthony"
let age: number = 1800
let teaching: boolean = false


let classes: string[] = ["typescript", "c#", "presenting"]

// console.log(firstName, age, teaching);
// console.table(classes);

enum TaxesForms {
    standardtaxes=1040,
    childCredit=647,
    crypto_credit=2055,

}

//console.log(TaxesForms.standardtaxes);

let code: string | number = "11";

code = 1

console.log(code);

let cars: string[] = ["mustang", "tesla", "honda", "volvo"];

//returns the value of the element in the array at position index
function findIndex(index: number, array: string[]) : void {
    console.log(array[index])
    //return array[index]
}

// doesnt return anything (hence "void")
function findIndex2(index: number, array: string[]) : void {
    console.log(array[index])
    //return array[index]
}

//console.log(findIndex2(1, cars));

//findIndex2(1, cars)

let classroom: any = {
    name: "Classroom",
    duration: "8 hours",
    boring: false

}

console.log(classroom)