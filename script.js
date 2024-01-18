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

let firstName = 'Cj'

function sayHello (myName, dayOfWeek, colorOfShirt) {
    console.log(`Hello ${myName}, have a great ${dayOfWeek}, you are 
    wearing a ${colorOfShirt} shirt`)
  }
//parameters  and arguments have to match up,, console log does not have too
  sayHello("Cj Donaldson", "Friday", "Green")
  //functions are reusable
  //we declare them once, and you can call as many times as you want
  //sayHello("Dasheem")//added a second name