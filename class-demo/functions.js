'use strict';

/**
 * Person class 
 * Employee class
 * Student class
 */

const Person = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    /**
     * Adding count to prototype of the Person object 
     */
    this.__proto__.id = typeof this.__proto__.id === 'undefined' ? 0 : (++this.__proto__.id);

    // todo : this will be used only in {} object literal 
    // ?? this is not valid in case of function expression.
    // get fullName(){
    //     return this._fullName;
    // }
    /**
     * This function is created and present in every object created from the Person.
     * @returns 
     */
    this.getFullName = function () {
        return `Inside Person Object call with ID: ${this.id} : ${this.firstName}.${this.lastName}`;
    }
}
/**
 * This is person object where in we have the method inside each of the 
 * object created from Person() constructor.
 */
const person1 = new Person('John', 'woo');
console.log(person1.getFullName());
console.dir(person1);


Person.prototype.getFullName = function () {
    return `Inside Person prototype: ${this.firstName}.${this.lastName}`;
}

/**
 * This is person object where in we have the method inside each of the 
 * object created from Person() constructor.
 */
const person2 = new Person('John-2', 'woo-2');
console.log(`Still function called from Object...`, person2.getFullName());
console.dir(person2);
// console.dir(person2.__proto__); //[[Prototype]] like this

Person.prototype.getFullNameViaPc = function () {
    return `Inside Person prototype: ${this.firstName}.${this.lastName}`;
}

/**
 * Now the function defined with different name will be called from the 
 * prototype chain.
 */
const person3 = new Person('John-3', 'woo-3');
console.log(`Still function called from Object...`, person3.getFullName());
console.log(`now function called from Prototype chain...`, person3.getFullNameViaPc());
console.dir(person2);

/**
 * Adding function to the constructor of JS, this will be 
 * acting as static function for all of the objects created 
 * from the person.
 */
Person.constructor = function introduce() {
    console.log(this);
    console.log(`I am ${this.firstName}.${this.lastName} working as ${this.profession}`);
}

console.log('-'.repeat(100));


/**
 * Sub-class creation for Person 
 * @param {*} firstName 
 * @param {*} lastName 
 * @param {*} profession 
 */
function Employee(firstName, lastName, profession) {

    /**
     * ?? If this is commented only then Employee.prototype will be called. 
     * ?? Otherwise Person Object's getFullName will be called.
     */
    Person.call(this, firstName, lastName);
    this.profession = profession;

    //?? overriding fullName function

    this.getFullName = function () {
        /**
         * 1. Proper prototype chain has to be corrected.
         * 2. You can then call this function as below.
         */
        // ?? how to call the person getFullName here and append it's response with derived class.
        return `Inside Employee object : ${this.__proto__.getFullName.call(this)} with profession : ${this.profession}`;
    }
}

Employee.prototype.getFullName = function () {
    return `From the Prototype chain inside Employee prototype: ${this.firstName}.${this.lastName}`;
}


const employee = new Employee('Jacky', 'li', 'manager');
/**
 * Employee is point to Object prototype 
 */
console.dir(employee);
console.log(employee.getFullName());

// Setting up proper prototype chain so that employee with point to Person
Employee.prototype.__proto__ = Person.prototype;
console.dir(employee);
console.log(employee.getFullNameViaPc());