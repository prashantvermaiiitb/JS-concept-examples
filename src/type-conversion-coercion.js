/**
 * Type conversion is when we manually convert 1 type to another. -- explicitly
 * Type coercion javascript converts type automatically in background. -- impllicitly
 * ! JS can convert only couple of types like 
 * 1. to a number 
 * 2. to a string 
 * 3. to a boolean 
 */

// Type Conversion 
const year = '1991';
console.log("🚀 ~ file: type-conversion-coercion.js:7 ~ typeof year:", typeof year);
console.log("🚀 ~ file: type-conversion-coercion.js:8 ~ typeof year:", typeof Number(year));

console.log(Number(year));
/**
 * NaN is not a valid number but it's a number
 */
console.log("🚀 ~ file: type-conversion-coercion.js:11 ~ typeof NaN:", typeof NaN);

// Type coercion 

// e.g. inside console.log() we are making use of + operator to create a new string 
// Template literal are also working in the similar manner 
console.log('I am ' + 23 + ' programmer...');

// - operator triggers the conversion 
console.log('23' - 10 - '3'); // 10
console.log('23' ** 10 - '3'); // 41426511213646
console.log('23' / 10 - '3'); // -0.7000000000000002
