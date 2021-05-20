// let x = 10
// console.log(x)

// if (true){
//     let x = 2
//     console.log(x)
// }

// console.log(x)

let x = 10
x = 20

// const y = 20
// y = 30

const student = {}
student.name ="Diego"
console.log(student)

// y = 20 
// student = #12931241941249127

// student = { name: "diego"}

const myObject = {
    name: "Diego",
    grades: ["A", "C", "F", "A"],
    myMethod: function() {
        console.log(this)
    },
    positiveGrades: function() {
        //using the function, we are replacing the THIS with the parent
        this.grades.forEach((grade) => { // using the arrow function, we are using the same THIS as the parent function
           console.log(this.name + " -> " + grade)
        })
    },
    notWorking: function() {
        //using the function, we are replacing the THIS with the parent
        this.grades.forEach(function(grade) {
            console.log(this)
            //using the function keyword we are replacing the THIS, therefore we won't have access to this.name (empty)
           console.log(this.name + " -> " + grade)
        })
    },
    withThisAfterTheCallback: function() {
        //using the function, we are replacing the THIS with the parent
        this.grades.forEach(function(grade) {
            console.log(this)
            //using the function keyword we are replacing the THIS, therefore we won't have access to this.name (empty)
           console.log(this.name + " -> " + grade)
        }, { name: "Whatever!!!"})
    }
}

//OLD WAY
const name = myObject.name
const grades = myObject.grades
const age = myObject.age ? myObject.age : 25 

//NEW WAY
const { name, grades, age = 25 } = myObject 

const test = [1,23,5,6,7,2]
const [ first, second, third ] = test

// SPREAD OP
const obj1 = { name: "Diego"}
const obj2 = { email: "diego@strive.school"}
const obj3 = { role: "COO"}

const mixed = {...obj1, ...obj2, ...obj3}