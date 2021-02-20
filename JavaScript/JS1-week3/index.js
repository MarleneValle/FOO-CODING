// 1. Strings!
let myString = "hello,this,is,a,difficult,to,read,sentence";
// console.log(myString);
// console.log(myString.length);
// let newString = myString.replace(/,/g, " ");
// console.log(newString);

// Solution 2
// let newString = myString.split(",").join(" ");
// console.log(newString);

// Solution 3
let newString = myString.replace(",", " ");
console.log(newString);

// 2. Arrays!
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);

favoriteAnimals.splice(1,0,"meerkat");
console.log("The next array values are my favorite animals plus Jim's favorite animal in the second position");
console.log(favoriteAnimals);
console.log("The array has a length of: " + favoriteAnimals.length);

favoriteAnimals.splice(3,1)
console.log(favoriteAnimals);

console.log("The item you are looking for is at index: ", favoriteAnimals.indexOf("meerkat"));
// if and item does not exist you will get -1 (which mean "the element does not exist")

favoriteAnimals.splice(1,1);
console.log(favoriteAnimals);


// More JavaScript 🎉
// Create a function that takes 3 arguments and returns the sum of the these arguments.

function sum(arg1, arg2, arg3) {
    return arg1 + arg2 + arg3;
}
console.log(sum(7,10,7));

// Create a function named colorCar that receives a color, and prints out, 'a red car' for example.

function colorCar(color) {
    return ('A ${color} car');
}
console.log(colorCar('yellow'));
colorCar('pink');

// Create an object and a function that takes the object as a parameter and prints out all of its properties and values.

let person = {
    firstName: "Marlene",
    lastName: "Valle",
    age: 30,
    haircolor: "black"};

let entries = Object.entries(person);
console.log(entries);


// function print(obj) {
//   for (key in obj) {
//     console.log(obj[key]);
//   }
// }
// console.log(person);


// Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)
function vehicleType(color, code) {
    if (code===1) {
        console.log('A ' + color + ' car' )
    } else if(code===2) {
        console.log('A ' + color + ' motorbike')
    } else {
        console.log("invalid code")
    }
}

vehicleType("black", 1);
vehicleType("red", 2);
vehicleType("pink",4)


// Can you write the following without the if statement, but with just as a single line with console.log(...);?
// if (3 === 3) {
//   console.log("yes");
// } else {
//   console.log("no");
// }
3 === 3? console.log('yes') : console.log('no');

// Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'
function vehicle(color, code, age) {
    if (code === 1 && age > 2) {
        console.log("A " + color + " used car");
    } 
    else if (code === 1 && age <= 2) {
        console.log("A " + color + " new car");
    }

    else if (code === 2 && age > 2) {
        console.log("A " + color + " used motorbike");
        }

    else if (code === 2 && age <= 2) {
            console.log("A " + color + " new motorbike" );
        }
    }


vehicle("black", 1, 2);
vehicle("white", 1, 2.1)
vehicle("green", 2, 2)
vehicle("yellow", 2, 5)

// Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
let vehicle =  [ "motorbike", "caravan", "bike"];



// How do you get the third element from that list?

// Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".

// Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

// Hint, the output should be correct English with all the punctuation in place (that's the challenge). So plurals for the vehicle types, commas followed by a single space, the word and to replace the final comma and closed off by a period.

// What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?

// Create an empty object.

// Create an object that contains the teachers that you have had so far for the different modules.

// Add a property to the object you just created that contains the languages that they have taught you.

// Write some code to test two arrays for equality using == and ===. Test the following:

// let x = [1, 2, 3];
// let y = [1, 2, 3];
// let z = y;
// What do you think will happen with x == y, x === y and z == y and z == x? Prove it!

// Don't cheat! Seriously - try it first.

// Check out this Fiddle. You need to open your browser’s Developer Tools to see the console output. Press the Run button in the upper right corner to run the code.

// More insights from this Stack Overflow question.

// Take a look at the following code:

// let o1 = { foo: "bar" };
// let o2 = { foo: "bar" };
// let o3 = o2;
// Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).

// Does the order that you assign (o3 = o2 or o2 = o3) matter?

// What does the following code return? (And why?)

// let bar = 42;
// typeof typeof bar;
// ‘Coerce' means to try to change - so coercing var x = '6' to number means trying to change the type to number temporarily.

