![](https://i.imgur.com/yxikhiY.jpg
)
# JavaScript Functions

| Learning Objectives - Students Will Be Able To |
| :--- |
| Understand the Use Case of Functions |
| Code Functions as Definitions and Expressions |
| Call Functions |
| Explain the Difference Between Parameters and Arguments |

## Road Map
1. What is a Function?
2. Why Functions Anyway?
3. Defining and Calling Functions
4. Practice Exercise - Write a Function Expression
5. More About Parameters & Arguments
6. Further Study

## 1. What is a function?

**A function is a reusable block of code written to perform a single purpose.**

For example, let's say we're coding a game like Minesweeper and we want the player to be able to choose the size of the board:

```js
// Get player's choice of board size (S for small, M for medium, L for large)
function getBoardSize() {
  const validChoices = ['S', 'M', 'L'];
  let size;
  while (!validChoices.includes(size)) {
    size = prompt('Enter the board size (S)mall, (M)edium or (L)arge: ').toUpperCase();
  }
  return size;
}
```

As you can see above, the `return` statement can be used to return a JS expression.

<details>
<summary>
❓ What is a <em>JS expression</em>
</summary>
<hr>

**A piece of code that JS evaluates into a single value or object**

<hr>
</details>

Functions may be written to accept data as input.  The data passed to a function when called is known as **arguments**.

When writing the function, we define "placeholders" to accept the arguments and these placeholders are known as **parameters**.

For example, let's say we're coding the game of Concentration and want to award a certain number of points based upon how much time it took to match all of the tiles:

```js
function getPointsScored(elapsedTime) {
  if (elapsedTime < 30) {
    return 100;
  } else if (elapsedTime < 60) {
    return 75;
  } else {
    return 25;
  }
}

const points = getPointsScored(time);
```

<details>	
<summary>❓ Assuming the variable <code>time</code> is equal to <code>50</code>, what will <code>points</code> equal?</summary>
<hr>

**`75`**

<hr>
</details>

**Functions are the primary building blocks of programs.**

For example, here is how a line-of-business (LOB) type of application might be structured using several functions...

```js
function main() {
  let date = new Date();  // today's date
  let sales = getSalesData(date);
  let labor = getLaborCosts(date);
  let budget = getBudget(date);
  let report = generateReport(date, sales, labor, budget);
  sendReport(report);
}

// Run the main function
main();

/*--- helper functions ---*/

function getSalesData(forDate) {
  let netSales = getNetSales(forDate);
  let salesTax = computeSalesTax(netSales);
  return {netSales, salesTax};
}

function getLaborCosts(forDate) {
  // etc.
}

function getBudget(forDate) {
  // etc.
}

function generateReport(forDate, dailySales, dailyLabor, budget) {
  // etc.
}

function sendReport(report) {
  // etc.
}

// etc.

```

**The code in a function does not execute until that function is called**.  In the above example, if not for `main();`, no code would execute!

**When the JS engine loads the code, before executing it, it is checked for syntax errors.** A single syntax error prevents all of the code from running!

**Functions commonly call other functions** like we saw above.  Here's another example:

```js
let size, board;

function initialize() {
  size = getBoardSize();
  board = generateBoard(size);
  renderBoard();
}
```

**Programming languages themselves include functions** built into the language, e.g., `parseInt()`.

## 2. Why Functions Anyway?

### Tackle Complexity

As humans, we typically tackle a complex task by breaking it into smaller tasks or steps - as developers, we do the same!

Functions allow us to break up programs into more manageable blocks of code.

### Code Reuse

Functions provide code reuse because they can be called over and over, for example, a `renderBoard` function might be called every time the data in the `board` variable is changed.

Without functions, we might have to write the same code in multiple places of the app which violates a key programming principle known as **DRY** - Don't Repeat Yourself!

<details>	
<summary>❓ Can you identify any downsides of repeating the same code in multiple places of a program?</summary>
<hr>

**It would make maintenance and future development of the app over time more difficult and expensive because changes to repeated block of code would require searching and updating all instances of that code.**

<hr>
</details>

### Documentation

Simply naming functions appropriately, e.g., `renderBoard`, documents what the program is doing.

By using numerous, smaller and well-named functions, the code virtually becomes self-documenting thus eliminating the need to clutter the code with comments.

> Note:  Comments should only be used to explain parts of the code that require explanation due to its complexity.  Never comment the obvious!

### Summary

In summary, it would be impractical if not impossible to create a comprehensive application without breaking up the application into functions!

## 3. Defining and Calling Functions

### Setup

Let's create another **Node.js-based** Repl at [replit.com](https://replit.com/) and name it something like "JS Functions".

Now we're ready to review some of what you might already know about functions and learn some cool new stuff too...

### Defining Functions

There are three primary ways to define functions in JS:

1. Function Declaration/Definitions
2. Function Expressions
3. Arrow Functions

#### 1) Function Declaration (AKA Function Definitions)

```js
function sayHello(name) {
  console.log('Hello ' + name + '!');
}
```

#### 2) Function Expression

```js
const sayHello = function(name) {
  console.log('Hello ' + name + '!');
};
```

<details>	
<summary>❓ What similarities and/or differences do you see between the two approaches above?</summary>
<hr>

**They are very similar, but note how the function expression obtains its name from the variable it's assigned to (plus, it's followed by a semicolon).  However, there is one key usage difference that we'll discuss next...**

<hr>
</details>

#### The Key Difference Between Function Declarations & Expressions

For all practical purposes, the difference between them is that _function expressions_ cannot be invoked before they are defined; whereas _function declarations_ are internally "hoisted" to the top of their scope and can therefore be invoked even if they are defined later in the source code. 

For example:

```js
fnDeclaration();  // thank you function declarations :)
fnExpression();  // TypeError: fnExpression is not a function

function fnDeclaration() {
  console.log("I'm coming from a function declaration");
}

const fnExpression = function() {
  console.log("I'm coming from a function expression");
};
```

> Note: Attempting to execute a function expression before it's been assigned to its variable is the source of many an error for JS developers!

#### 3) Arrow Functions

ES2015 (ES6) delivered a third approach to defining functions - **Arrow Functions**.

The following function declaration:

```js
// Function Declaration
function add(a, b) {
  return a + b;
}
```

and the following arrow function are equivalent:

```js
// Arrow Function
const add = (a, b) => a + b;
```

As you can see, Arrow Functions are more concise and can implicitly (automatically) return an expression. However, they can't always be used in place of non-Arrow functions due to the way they set the value of the `this` keyword (more on `this` in a future lesson). 

We will have a dedicated lesson on arrow functions. For now, let's focus on function declarations & expressions since they have been around since the beginning of JS.

### Calling Functions

Regardless of which of the three approaches are used to define functions, we call them the same way:

```js
add(25, 100);  // returns 125
```

> **Developer Vocabulary:** Developers might say **call**, **execute**, **invoke** or **run**...a function.  In the context of functions, they are synonyms!

### Let's Write a Function

Here's a useful and common function used to generate a random integer between two numbers, inclusive:

```js
function addNums(num1, num2) {
  console.log(num1 + num2);
}
```



### ❓ Review Questions - Functions (1 min)

<details>	
<summary>
How many different ways are there to define a function?
</summary>
<hr>

**Three ways:**
- Function Definition/Declaration
- Function Expression
- Arrow Function

<hr>
</details>

<details>	
<summary>
What's the only practical difference between a Function Definition and a Function Expression?
</summary>
<hr>

**Function Definitions can be called even if they are defined later in the source code. Trying to do so with a Function Expression will cause an error.**

<hr>
</details>


## 4. More About Parameters & Arguments

So, let's answer a common question:
>  _"What's the difference between a parameter and an argument?"_

<img src="https://i.imgur.com/u5p9n7m.jpg">
	
Arguments are the data being passed to the function.

Arguments are assigned to the parameters positionally. In the example above, the `bottle` parameter would be assigned the string "green bottle" because they are the first parameter and argument.

Parameters become local variables inside the statement body of the function. Therefore, in the example above, `bottle` and `cap` are variables that can be accessed (and even updated) from anywhere within the function.
  
Just as when naming variables and functions, it's important to name parameters using identifiers that are representative of the data being passed to them.

### Functions as Arguments

In JavaScript, functions are passed around and treated like data because they are - they're objects!  Programming languages that treat functions this way are said to have 'first-class functions', meaning that it treats functions as 'first-class citizens'.  These terms are a convenient shorthand for explaining that functions have all the same rights and abilities as any other object.  

A function is a JS expression, so they can be used anywhere an expression is expected, i.e., as arguments, returned from another function, etc.
  
### Passing an Anonymous Function

Certain functions and methods (functions attached to an object) require that a function be provided as an argument.

For example, the `forEach` method on arrays:
	
```js
const colors = ['red', 'green', 'blue'];
	
colors.forEach(function(color) {
  console.log(color);
});
```
	
Since the function provided to the `forEach` will never be called from anywhere else in the code, we don't need to bother to create a separate named function and pass it in.

Anonymous functions like shown above are very convenient!

### ❓ Review Questions - Parameters & Arguments

<details>	
<summary>
What's the difference between a Parameter and an Argument?
</summary>
<hr>

**Parameters are the placeholders when the function is defined that accept data. The arguments are the data being passed to the function when the function is called.**

<hr>
</details>

<details>	
<summary>
Explain how arguments are assigned to which parameters.
</summary>
<hr>

**By position. The first argument is assigned to the first parameter, etc.**

<hr>
</details>

## 6. Further Study

### Fewer Arguments Than Parameters Defined

JavaScript is very flexible and won't complain when the number of arguments is not the same as the number of parameters defined.

If fewer arguments are passed than parameters defined, then the parameter variables without a matching argument would be set to `undefined`.

> Note: Unlike some other programming languages, JavaScript won't complain if fewer (or extra) arguments are passed to a function.  However, a function that depends on certain arguments to do its job might throw an error or return an unexpected result if it doesn't receive the arguments expected.

### Extra Arguments Than Parameters Defined

Let's pretend you need to write a function that accepts an unknown number of arguments.

For example, let's say we would like to be able to provide any number of "time" arguments to the `getPointsScored ` function we saw earlier and return a total number of points scored.

First, let's ignore the fact that typically we could code the function to accept an array of times, e.g.,

```js
function getPointsScored(elapsedTimes) {
  // code to iterate over the elapsedTimes array...
}
```

Here's how we could write `getPointsScored` to accept any number of individual "time" arguments using ES2015's [Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters):

```js
function getPointsScored(...times) {
  // times will be an array holding the args (see Rest Parameters in the docs)
  // Perfect use case for the Array.reduce method, but that's another day...
  let totalPoints = 0;
  times.forEach(function(time) {
    if (time < 30) {
      totalPoints += 100;
    } else if (time < 60) {
      totalPoints += 75;
      return 75;
    } else {
      totalPoints += 25;
    }
  });
  return totalPoints;
}
	
const points = getPointsScored(16, 99, 32, 60);
```

> Note:  Prior to ES2015, we would use the special [arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) keyword available within non-arrow functions. `arguments` is a JS object that has a `length` property and allows its values to be accessed via _square bracket_ notation.

### ES2015 Default Parameters

What if your function requires certain arguments and you want to provide a default value for the parameter if an argument is not supplied when the function is invoked?

Prior to ES2015, here is a trivial example of what we had to do:

```js
function setColor(bicycle, color) {
  // set color to 'purple' if not provided
  bicycle.color = color || 'purple';
}

const bike = new Bicycle();
setColor(bike, 'blue');  // sets color to blue
setColor(bike);  // sets color to purple by default
```
Now, using **default parameters**, we can do this:

```js
function setColor(bicycle, color = 'purple') {
  bicycle.color = color;
}
```

Any expression can be provided as a default, including objects, etc.

### Immediately Invoked Function Expressions (IIFE)

One way we can prevent our code from leaking into the global scope is by wrapping it with a construct known as an **Immediately Invoked Function Expression**, or "IIFE" (pronounced "iffy").  It looks like this:

```js
(function() {
  'use strict';

  // your code here...
	
})();
```

<details>	
<summary>
Why do IIFEs virtually prevent variables and functions from being created in the global scope?
</summary>
<hr>

**Variables and functions defined within a function, including an Immediately Invoked Function Expression (IIFE), are scoped to that function, not global scope.**

<hr>
</details>

You are unlikely to see or use an IIFE until much later in this course, but it is a good pattern to recognize.

### Nesting Functions

As the examples above have shown, we can define functions within functions!

Why would we want to do this? Well, Perhaps an outer function needs a "helper" function that would only be relevant to a given function. It would be good programming practice to "hide" that function from the rest of the program by nesting it within the function that actually needs it.

For example (no need to execute this):

```js
function openNewAccount(name, openingBalance) {
  let acctNum = generateAcctNum();
  
  // createAccount is a function available outside this function
  let acct = createAccount(acctNum, openingBalance);
  return acct;
  
  // helper function that provides a unique account number
  function generateAcctNum() {
    return Date.now();  // super amazing algorithm :)
  }
}
```

As you can see, there's a nifty `generateAcctNum` function in there and it's only relevant when a new account is opened, so it's nested within the `openNewAcount` function.


## References

[MDN Functions Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)



# Pt II - Scope

<img src="https://i.imgur.com/fe5VQ4M.jpg">

# JavaScript Scope

| Learning Objectives - SWBAT |
| :--- |
| Describe What Scope Is |
| Describe How JS Looks for Variables in the Scope Chain |

## Road Map
1. What is Scope?
2. Types of Scope in JavaScript
3. The Scope Chain
4. Further Study

## 1. What is Scope?

In general, the **concept of scope** in computer programming pertains to the **accessibility** of variables and functions from a given point of the code. In other words, as you write a line of code, what variables and functions do you have access to?

If a line of code doesn't have access to a variable/function, we could say that variable/function is "out of scope".

More commonly, however, we think of **a scope** as a set of variables and functions that are defined within that scope.

## 2. Types of Scope in JavaScript

JavaScript has three types of scope:

- **Global Scope**:  There's always a single global scope which lives at the top of the scope chain.
- **Function Scope**, also known as **Local Scope**:  Every time a function runs, it creates its own function/local scope. 
- **Block Scope**: This scope is courtesy of ES2015's `let` & `const` keywords and in general, define a scope within a code block using curly braces.

### Why the Different Types of Scope?

There's a concept in programming known as [The Principle of Least Privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege).

One of the keys of this principle is based on the idea that limiting the accessibility of variables (and functions) helps reduce bugs in the code - think of it as a form of "code safety".

### Global Scope

There's only a single global scope.

If a variable is declared outside of a function, it will "live" in global scope.

```js
// main.js

let size, board;

function initialize() {
  size = getBoardSize();
  board = generateBoard(size);
  renderBoard();
}
```

<details>	
<summary>
❓ What variables/functions above exist in the global scope?
</summary>
<hr>

**`size` and `board`**

<hr>
</details>

### Function (local) Scope

A new function scope is created for each executing function.

Each variable and function defined within the function would be included within that function's scope.

> Note:  The Further Study section discusses how `let` and `const` variables may have a more limited "block" scope if not defined in the top-level of the function.

The variables within a function's scope only exist during its execution (unless something known as a "closure" exists - yup, another day).

```js
function initialize() {
  const playerName = getPlayerName();
  size = getBoardSize();
  board = generateBoard(size, playerName);
  renderBoard();
}
```

<details>	
<summary>
❓ What variables/functions live within the scope of the <code>initialize</code> function?
</summary>
<hr>

**`playerName`**

<hr>
</details>

A major benefit of having different scopes is being able to use the same names for variables in different functions!  If there were only one scope, this wouldn't be possible.

### Block Scope

To give you practice reading and researching independently, the topic of block scope is covered in the Further Study section of this lesson. 

## 3. The Scope Chain

When a variable or function is referenced in code, JavaScript must find that identifier in memory and retrieve its value or reference.

First, JS will look for the variable or function in the current scope that the code is executing in.

However, if JS doesn't find the identifier, up the **scope chain** it goes looking for it!

Let's review the following diagram which identifies 3 different scopes:

<img src="https://i.imgur.com/UtIoe7F.png">

Notice how the scopes are given a name followed by a list of the identifiers defined within that scope:

| Scope of... | Identifiers defined within... |
|---|---|
| global | `a`, `foo` |
| foo | `x`, `b`, `bar` |
| bar | `y`, `c` |

### Human Computer Demo 

Allow me to "execute" the function and explain what the computer is doing as it accesses variables and calls functions.

### You can go up the scope chain, but not down it!

As demonstrated by the "human computer", JavaScript searches the current scope then up the scope chain, but not down it.

If JS gets to the _global scope_ (which is the top of the food chain in the scope hierarchy) and still can't find what it's looking for, that's when your program crashes due to a **ReferenceError**.

<details>	
<summary>
❓ Would the function <code>foo</code> have access to the variable <code>c</code>?
</summary>
<hr>

**No, because `c` is not _up_ the scope chain**

<hr>
</details>

## 4. Further Study

### Block Scope

Both `let` and `const` define variables that can only be accessed within the **code block** they are defined in.

A _code block_ is created by using curly braces.

The following code from [MDN's docs about let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) demonstrates differences between `let` and `var`:

```js
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```

and another example of their differences:

<img src="https://i.imgur.com/K0uJx2P.jpg">

### More About Global Scope

In our browsers, the global scope is represented by the `window` object.

It is at the top of the scope chain and its properties are available to **every** function we write.

It is generally bad practice for our programs to create variables in the global scope.  Doing so risks us overwriting data in use by JS libraries/frameworks or other routines.

Creating lots of global variables is referred to as "polluting the global scope", and we all know that it's not nice to pollute!

If we define a variable (or a function) within the global scope, it becomes a property on the `window` object. You can see this in action by typing `var pollution = 'sucks'` in the console, then type `window.` (don't forget the dot), scroll down and find the pollution we have created - yuck!

> Although using both `var` and `let` in the global scope results in a global variable being created, interestingly, those created using `let` and `const` do not create properties on the `window` object like `var` does.

## References

[MDN Functions Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
