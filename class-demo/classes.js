class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    /**
     * This is by default added in the prototype name. 
     * @returns 
     */
    getFullName() {
        return `From Person: ${this.firstName}.${this.lastName}`;
    }
    static introduce() {
        console.log(this);
        console.log(`I am ${this.firstName}.${this.lastName} working as ${this.profession}`);
    }
}

Person.prototype.getProfession = function () {
    return `Your profession from Person prototype : ${this.profession}`;
}

class Employee extends Person {
    constructor(firstName, lastName, profession) {
        super(firstName, lastName);
        this.profession = profession
    }
    /**
     * This will be added in the Employee prototype
     * @returns 
     */
    getFullName() {
        return `From Employee: ${this.firstName}.${this.lastName}`;
    }
}

const employee = new Employee('jacky', 'li', 'manager');
console.dir(employee);
console.dir(employee.getFullName());
console.dir(employee.getProfession());
/**
 * ! This is a static function, hence will not be called from the 
 * ! instance.
 */
// employee.introduce();
console.log(Person.introduce.bind(employee)())