console.log('-----------------------THIS STARTS-----------------------');
console.log('This at the very top most level of code .. appears to be Window object', this);
let person = {
    personFirstName: 'Prashant',
    personaLastName: 'shiv-bhakt',
    fullName: function () {
        console.log('printing this in person object ...', this);
        console.log(`FullName of person is ${this.personFirstName}.${this.personaLastName}`);
        /** 
         * This will be giving error because it will be reading thes properties on the window
         * object not on the person object.
         */
        // console.log(`FullName of person is ${personFirstName}.${personaLastName}`);
    },
    fullName2: () => {
        /**
         * TODO : this will be the window object, declaring object is not equivalent to a code block.
         */
        console.log('printing this in person object in arrow function...', this);
        /**
         * TODO: This will be accessing properties on the window object.
         * TODO: If they are present on window object then they will be printed. 
         */
        console.log(`FullName of person is ${this.personFirstName}.${this.personaLastName}`);
    }
}

person.fullName();
/**
 * Assigning the fullName function to a variable, Here this will be pointing to Window object.
 * Both the properties are undefined here, hence the error 
 * "Uncaught ReferenceError: personFirstName is not defined" because it's not deifned within window object.
 */
const fullName = person.fullName;
// fullName();

/**
 * This is an arrow function, hence this will not be having this of it's own.
 * This will be having this from the Lexical scope i.e. from where the function is defined which is  
 * ** > FullName of person is undefined.undefined
 */
person.fullName2();

let fullNameCopy = person.fullName.bind(this);
fullNameCopy();

console.log('-----------------------THIS ENDS-----------------------');