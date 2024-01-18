//FUNCTIONS LESSON
// DRY means don't repeat yourself
// if () {}
// switch () {}
// for () {}
// while () {}

// function declaration
//and then we need to call it
// to declare a function we give it a name
// function () {}
//EX BELOW
// function sayHello () {
//     console.log('Hello')
//   }

//   sayHello()
// function showMovie (movie, year) {
//     console.log(`${movie} was released in ${year}`)
//   }
  
//   showMovie('Saving Private Ryan', 1998)
//   showMovie('Interstellar', 2014)
//   showMovie('Jason Bourne', 2016)

//ADDING IN PARAMETERS AND ARGUMENTS TO OUR FUNCTION
//ADD IN MULTIPLE PARAMATERS AND ARGUMENTS
// SEEING HOW ORDER MATTERS
// CONVERTING TO ARROW FUNCTIONS 
//ex below of updated hello world with first name

// let firstName = 'Cj'

function sayHello (myName, dayOfWeek, colorOfShirt) {
    console.log(`Hello ${myName}, have a great ${dayOfWeek}, you are 
    wearing a ${colorOfShirt} shirt`)
  }
// //parameters  and arguments have to match up,, console log does not have too
//   sayHello("Cj Donaldson", "Friday", "Green")
//   //functions are reusable
//   //we declare them once, and you can call as many times as you want
//   //sayHello("Dasheem")//added a second name

//is a math function
function doMath (num1, num2) {
    console.log(num1 + num2)
  }

//   doMath(5, 10)
//   doMath(10, 10)
//   doMath(100, 10)

//Arrow Functions
//we are creating a variable that stores a function
//ex below

const addNums = (num1, num2) => { 
    console.log(num1 +num2)}
// addNums(100, 35)
// above is difference between function declaration and arrow function

// SCOPE LESSON 

// const complexFunction = (num1, num2) => {
//     console.log (num1 + num2)

//     const childFunction = (num1, num2) => {
//         console.log(num1 - num2)
//     }
//     childFunction(5, 2)
// }
// complexFunction(10, 5)

//SCOPE IS HOW WE ENCAPSULATE DATA INSIDE OF BLOCKS TO USE
// AND HOW THAT CAN GO WRONG AND RUIN EVERYTHING
// TWO KINDS OF SCOPES-> GLOBAL AND LOCAL
// GLOBAL SCOPE IS PASSED INTO ANYTHING
// GLOBAL SCOPE CAN BE PASSED INTO LOCAL SCOPE
// LOCAL SCOPE CONTAINED INSIDE OF SET OF BLOCKS
// LOCAL SCOPE CAN NOT BE PASSED INTO GLOBAL SCOPE
// LOCAL SCOPES CANT NOT BE PASSED INTO OTHER LOCAL SCOPES
//EX BELOW

//This is Global scope
const name = "Cj"
const location= "Florida"
// this is local scope
{
    const name = "Dasheem"
    const favoriteMovie = "Interstellar"
    console.log(name)
    console.log(location)
}

{
    console.log("line 96", name)
    console.log("line 97", location)
}
console.log(name)