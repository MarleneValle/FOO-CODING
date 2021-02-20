// 1. Write a console.log statement saying "Hello World!" for each language that you know.
console.log("Hola, Mundo");
console.log("Hello, World");
console.log("Hej, Världen");
console.log("Salut, Monde");


// 2. Consider the following code and correct the ERROR (with "" intead of ´´):
console.log("I'm awesome");


// 3. Declare a variable
let x;
console.log("the value of my variable x will be: undefined");
console.log(x);
x = 3;
console.log("I have lived in Sweden for", x, "years");
console.log(x);


// 4. Declare a variable y and assign a string to it.
let y = "Malmö is the third largest city in Sweden";
console.log("The value of the string is going to be what I wrote about Malmö");
console.log(y);
y = "Gothenburg is the second";
console.log("The value will be the statement about Gothenburg");
console.log(y);


// 5. How do you round the number 7.25, to the nearest integer (i.e., whole number)?
let z = 7.25;
console.log(z);
let a = Math.round(z);
console.log(a);
let h = Math.max(a, z);
console.log("The highest value is " + h);

// 6. Arrays
let countries = [];
console.log("The value is an empty array")
console.log(countries);
let myFavAnimals = ["Dog", "Cat", "Pony", "Panda"]
console.log(myFavAnimals)
myFavAnimals.push("Baby pig")
console.log(myFavAnimals)


// 7. More strings

let myString = "This is a test.";
console.log(myString);
console.log(myString.length);


// 8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.
let age = 30;
let pets = 2;
let city = "Malmö";
let food = ["Pizza", "Tacos", "Burgers"];

 console.log("Age: " + age + " years old.");
 console.log("Pets at home: " + pets);
 console.log("City: " + city);
 console.log("Favorite food: " + food);

 console.log("Age is a number");
 console.log("Pets is number");
 console.log("City is a string");
 console.log("Food is an object");

 console.log(typeof age);
 console.log(typeof pets);
 console.log(typeof city);
 console.log(typeof food);


 if (typeof age === typeof pets) {
     console.log("SAME TYPE")
 } else { 
     console.log("DIFFERENT TYPE")
 };

  if (typeof city === typeof food) {
     console.log("SAME TYPE")
 } else { 
     console.log("DIFFERENT TYPE")
 };


// 9. If g equals 7, and the only other statement is g = g % 3, what would be the new value of g?
let g = 7;
g = g % 3;
console.log(g);

let m = 20;
m = m % 7;
console.log(m);

let r = -50;
r = r % 6;
console.log(r);

let j = 18;
j = j % 19;
console.log(j);

console.log ("% it’s the remainder operator. It obtains the remainder between two numbers.")


// 10.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.

array = ["drees", 25, undefined, "desk", 49, true, false]
console.log(array);

// 10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?
a = 6/0;
b = 10/0;
console.log(a);
console.log(b);
if (a === b) {
    console.log("Yes, we can compare infinities.");
} else {
    console.log("No,we can not compare infinities.");
}
