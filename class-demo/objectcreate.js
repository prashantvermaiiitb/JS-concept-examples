const person = {
    firstName: 'Jack',
    lastName: 'li',
    get fullName() {
        return `Person fullname is : ${this.firstName}.${this.lastName}`;
    }
}

// const employee = {
//     profession: 'manager',
//     get fullName() {
//         // return `Person fullname is : ${this.firstName}.${this.lastName}`;
//     }
// }

const employee = Object.create(person);
employee.profession = 'manager';
employee.introduce = function () {
    return `I am ${this.fullName} with profession : ${this.profession}`
};
employee.__proto__.hello = function () { console.log('hello') }
console.dir(employee);
console.dir(employee.fullName);
console.log(employee.introduce());