const person = {
    init(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    },

    get fullName() {
        return `<--Person fullname is : ${this.firstName}.${this.lastName}-->`;
    }
}


const employee = Object.create(person);

employee.init = function (firstName, lastName, profession) {
    person.init.call(this, firstName, lastName);
    this.profession = profession;
}
// employee.profession = 'manager';
employee.introduce = function () {
    return `I am ${this.fullName} with profession : ${this.profession}`
};
employee.__proto__.hello = function () { console.log('hello') }
employee.init('jasica', 'davis', 'sales-executive');
console.dir(employee);
// console.dir(employee.fullName);
console.log(employee.introduce());