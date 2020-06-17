/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

// creating a constructor function
// it takes 3 properties name, and and stomach which is an empty array
function Person(name, age, stomach) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

// create an eat method that gives the person the ability to eat something edible - it has a param of something that we can pass food into
// if the stomach length is < 10, person can eat, otherise, they cant
// we want to push argument of something edible to the array(stomach)
Person.prototype.eat = function (edible){
  if (this.stomach.length < 10){
    this.stomach.push(edible);
  }
}

// we need to create a poop method
Person.prototype.poop = function() {
  this.stomach = []
  }

// method called to String - needs to return string with name and age
Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
}

//create my obj
const personOne = new Person('Chayce', 32);

console.log(personOne.toString());

personOne.eat('tacos');
personOne.eat('fried chicken');
personOne.eat('shashimi');
console.log(personOne.stomach); // check if the array is populating

personOne.poop(); // emptys the array

console.log(personOne.stomach); // checks empty array 

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

// creating a constructor function
// it takes 2 properties model, milesPerGallon. They also have a tank and odometer that initialize at 0.
function Car(model, milesPerGallon, tank, odometer) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;

}
// building a new car obj
const carOne = new Car('tacoma', 24);

console.log(carOne); //Checking if car object is built correctly

// Allows car to get filled up via .fill method
Car.prototype.fill = function (gallons){
  this.tank = this.tank + gallons;
}

carOne.fill(32); // initializing fill to fill 32 gallons into the car
console.log(carOne); // console log car object to check if tank was filled properly

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

// Creating function that creates Baby subclassing Person
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}

// Declares methods to inherit from Parent constrctor
Baby.prototype = Object.create(Person.prototype);

// creating play method
Baby.prototype.play = function (){
  return `Playing with ${this.favoriteToy}`;
}



// creating new object
const babyOne = new Baby('Bob', 1, 'rattle');
console.log(babyOne); //checking baby returns all values from parent correctly and updated toy
console.log(babyOne.play()); //checking if play method is working properly
console.log(personOne.toString()); 
console.log(babyOne.toString()); //checking to see if parent methods were inherited


/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. 
  2. 
  3. 
  4. 
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
