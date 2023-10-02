/**
 * if this is defined then use strict has no meaning 
 */
// function globalHello2() {
//     console.log('this should be windows before "use strict"... ', this);
// }
"use strict"
// this is the window object 
console.log('this in open ..--> ', this);

/**
 * global function for checking this pointer
 * in the strict mode this is undefined
 */
function globalHello() {
    console.log('this should be windows after "use strict"...--> undefined  ', this);
}
// globalHello2();
globalHello();

/**
 * Arrow function will use the context in which they are defined
 * Here this is window object
 */
const globalHelloArrow = () => {
    console.log('this is global hello Arrow will be windows..--> ', this);
}

globalHelloArrow();

const hello = {
    /**
     * this will be the object
     */
    objectHello(message) {
        console.log('this is ORIGINAL objectHello() ==>', this, message);
    },
    /**
     * Arrow function will have the lexical context in which they are defined 
     * defining object {...} is not a code block.
     */
    arrowHello: () => {
        console.log('this in the object in arrow function -->', this);
    }
}

hello.objectHello();
hello.arrowHello();

const myHello = hello.objectHello;
// this will be undefined because of the strict mode else will be window object
// because you are not calling that with an object hence no scope.
myHello();

/**
 * 1st argument : what we want this keyword points to
 * call will have comma separated values.
 */
myHello.call(hello, 'hi!');

// todo apply is not in use much because of the spread operator that can be used with call
myHello.apply(hello, ['Greetings !!']);

/**
 * bind() returns a new function where this keyword is bound.
 */
const myHelloCopy = myHello.bind({
    objectHello(...msg) {
        console.log('this is a function within dynamic object {}', this, ...msg);
    }
});
// !Dynamic object's objectHello is not called instead the original function is called
// ! hence only the 1st parameter is called.
myHelloCopy(1, 2, 3)
myHelloCopy('Hi', 'Jon');