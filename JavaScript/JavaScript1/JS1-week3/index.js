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
 // 1. Create a function that takes 3 arguments and returns the sum of the these arguments.

function sum(x, y, z) {
    return x + y + x;
}
console.log(sum(7, 10, 7));


    // const sum2 = (x,y,z) => x + y + z;

 // 2. Create a function named colorCar that receives a color, and prints out, 'a red car' for example.

function colorCar(color) {
    return ('A ${color} car');
}
console.log(colorCar('yellow'));
colorCar('pink');


// 3.  Create an object and a function that takes the object as a parameter and prints out all of its properties and values.

function printObject(obj) {
  console.log(obj);
  let output = [];
  for (const key in object) {
    console.log(`key ${key} value ${obj[key]}`);
    output.push(´key ${ key } value ${ obj[key]}´)
  }
  return output.join(`\n`);
  }

let person = { age: 30, name: "Tanya" }
console.log(printObject(person));


// 4. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)
function vehicleType(color, code) {
    if (code === 1) {
      console.log(`A ${color} car`);
    } else if (code === 2) {
        console.log(`A ${color} motorbike`)
    } else {
        console.log("invalid code")
    }
}

vehicleType("black", 1);
vehicleType("red", 2);
vehicleType("pink",4)


// 5. Can you write the following without the if statement, but with just as a single line with console.log(...);?
// if (3 === 3) {
//   console.log("yes");
// } else {
//   console.log("no");
// }
let yesOrNOt = 3 === 3 ? console.log('yes') : console.log('no');
console.log(yesOrNOt);

// 6. Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'
function vehicle(color, code, age) {
  if (code === 1) {
        age > 0 ? console.log(`A ${color} used car`) : console.log(`A ${color} new car`)
      } 
    else if (code === 2) {
        age > 0 ? console.log(`A ${color} new motorbike`) : console.log(`A ${color} new motorbike`);
      } else {
          console.log("Invalid code");
    }
  }

vehicle("black", 1, 2);
vehicle("white", 1, 2.1);
vehicle("green", 2, 2);
vehicle("yellow", 2, 5);


// 7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
let vehicles =  [ "motorbike", "caravan", "bike"];

// 8. How do you get the third element from that list?
console.log(vehicles[2]);


// 9. Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".
function vehicle(color, code, age) {
  for (let i = 0; i < vehicles.length; i++) {
    if (code === 1) {
      age > 0 ? console.log(`A ${color} used ${vehicles[i]}`) : console.log(`A ${color} new ${vehicles[i]}`)
    }
  }
}

vehicles("black", 1, 1);
vehiclea("blue", 0, 0);

    //second option
        
    // function vehicle(color, type, ege) {
    //   if (age > 1) {
    //     age = "used";
    //   } else if (age <= 1) {
    //     age = "new";
    //   };
    //   console.log(`A ${color} ${age} ${vehicles[type]}`);
    // }

    // vehicles("green, 2, 1");

// 10.  Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

function vehicle() {
  const listOfVehicle = ["motorbile", "caravan", "bike", "car", "boat", "trucks"];
  let msg = "Amazing Joe's Garage, we service";
  for (let i = 0; i < listOfVehicle.length; i++) {
    if (i === listOfVehicle.length - 1) {
      msg += `a ${listOfVehicle[i]}s`
    } else if (1 === 0) {
      msg += `${listOfVehicle[i]}s`
    } else {
      msg += `, ${listOfVehicle[i]}s`
    }
    
  }

  console.log(msg);
}

vehicles();


// 11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?

listOfVehicle.push("plane");
console.log(listOfVehicle);
console.log(msg);

// 12. Create an empty object.

let country = {};

// 13. Create an object that contains the teachers that you have had so far for the different modules.

let teachers = {
  firstTeacher: "Baraa",
  secondTeacher: "Seif",
  thirdTeacher: "Josef"
};

// 14. Add a property to the object you just created that contains the languages that they have taught you.
teachers.languages = ["HTML", "CSS", "JavaScript"];
console.log(teachers);


// 15. Write some code to test two arrays for equality using == and ===. Test the following:

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(z);
console.log(x == y);  //false
console.log(x === y);  //false
console.log(z == x);  //false
console.log(z == y);  //true



// 16. Take a look at the following code:

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

o1.number = 25;
o2.number = 50; //changing o2 changes o3

console.log(o1);
console.log(o2);
console.log(o3);



// 17.What does the following code return? (And why?)

let bar = 42;
console.log(typeof typeof bar) //typeof bar = number => typeof number => string