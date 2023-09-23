/**
 * a will be hoisted and it will be declared to be undefined
 */
console.log("🚀 ~ file: scope.js:6 ~ a:", a);
/**
 * These are not hoisted. This is Temporary Dead zone. Both b and c are not accessible 
 * till the point of their declaration. They are equivalent as not defined
 * scope.js:9 Uncaught ReferenceError: Cannot access 'b' before initialization
 */
console.log("🚀 ~ file: scope.js:7 ~ b:", b);
console.log("🚀 ~ file: scope.js:8 ~ c:", c);

var a = 100;
let b = 100;
const c = 100;



