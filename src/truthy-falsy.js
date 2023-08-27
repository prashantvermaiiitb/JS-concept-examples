/**
 * In JS there are 5 falsy values.
 * false -- Boolean. They are :
 * 1. 0
 * 2. null 
 * 3. undefined
 * 4. ''
 * 5. NaN
 * They will become false when they are converted to boolean.
 */
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('prashant'))
console.log(Boolean({}))

/**
 * JS will automatically do type coercion in 2 conditions : 
 * 1. using logical operator || , && , & ,| 
 * 2. Inside logical context e.g. in an if-else statement
 */
const money = 0;
if (money) {
    console.log(`Don't spend all the money !! `);
} else {
    console.log(`You have spent all the money !!`);
}