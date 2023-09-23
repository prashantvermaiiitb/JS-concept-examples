/**
 * This will work and print the message without error 
 */
hello()

/**
 * This will be giving an error that Undefined is not a function
 * given that helloVar is just declared.
 */
try {
    // Todo to make this line working putting it in try-catch
    helloVar();
} catch (e) {
    console.log("🚀 ~ file: hoisting-methods.js:13 ~ e:", e);
}

/**
 * The function definition are hoisted before the call of the function.
 * This is applicable to function defined this way
 */
function hello() {
    console.log(`Hello World !! from hello... `);
}

/**
 * This will be hoisted similar to the 'var', with helloVar having 
 * initiatlised to undefined. 
 */
var helloVar = function () {
    console.log(`Hello World !! from helloVar... `);
}
/**
 * This will give error as 'helloVarlet' will be accessible only after it's declaration
 * hoisting-methods.js:30 Uncaught ReferenceError: Cannot access 'helloVarlet' before initialization
 */
console.log(helloVarlet);

/**
 * This function will be accessible after this definition
 */
let helloVarlet = function () {
    console.log(`Hello World !! from helloVarlet... `);
}
