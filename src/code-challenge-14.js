/**
 * High order function is a function that takes a function as argument 
 * or return a function as return value.
 */

function greeter(greet) {
    return function (name) {
        return `${greet} ${name}`;
    }
}

console.log(greeter('Hi')('John'));
const greeterFunction = greeter('Hello');
console.log(greeterFunction('Martha !!'));

console.log('-'.repeat(20));

/**
 * Defining the HOC using arrow function
 * @param {*} greet 
 * @returns 
 */
const greeterArrow = greet => name => `${greet} ${name}`;
console.log(greeterArrow('Hi')('John'));

/**
 * add padding in the message string
 * @param {*} message 
 * @returns 
 */
function addPadding(message) {
    return message.padStart(25, '+');
}

function addEmoji(message, updatePadingFn) {
    return `${updatePadingFn(message)}${'🛩️'.repeat(5)}`
}

console.log(addEmoji('tom', addPadding));


const statusInput = '_Delayed_departure;txo9834923;axo9834324;11:25+_arrival;bho9834923;indr9834324;9:05+_Delayed_departure;hbj9834923;rkmp9834324;12:25'
const flights = statusInput.split('+');

const getAiportCode = (code) => code.slice(0, 3).toUpperCase();

for (const flight of flights) {
    let [type, from, to, time] = flight.toLowerCase().split(';');
    time = `(${time.split(':').join('h:')})`;
    from = getAiportCode(from);
    to = getAiportCode(to);
    type = `${type.startsWith('_delayed') ? '🔴' : ''}${type.replace(/_/g, ' ').replace(type[1], type[1].toUpperCase())}`;
    const finalStr = (`${type} from ${from} to ${to} at ${time}`).padStart(50, ' ');
    console.log(finalStr);
}

let inputString = `underscore_case
       fiRst_namE   
    Some_VARIable 
        calculate_AGE
deLayed_departURE`;

console.log(inputString.split(/\n/))

const capitalise = message => message.replace(message[0], message[0].toUpperCase());
for (const [index, input] of inputString.split(/\n/).entries()) {

    const [first, second] = input.trim().toLowerCase().split('_');
    console.log(`${(`${first}${capitalise(second)}`).padEnd(16, ' ')} ${'✅'.repeat(index + 1)}`);
}

let name = 'John shutller is on plane !!';
console.log('name.slice(4) --> ', name.slice(4));
console.log('name.slice(4, -2) --> ', name.slice(4, -2));
console.log('name.slice(-2) --> ', name.slice(-2));
console.log('name.slice(-2) --> ', name.slice(1, name.lastIndexOf('!')));

const ccNumber = Math.trunc(Math.random() * 1000000000000) + '';
console.log("🚀 ~ Credit Card Number:", ccNumber)
console.log("🚀 ~ Proper credit card number:", `${ccNumber.slice(0, 4)}-${'X'.repeat(8)}-${ccNumber.slice(-4)}`);

let sample = 'Tom is a good boy';
console.log(sample.replaceAll('a', '__'));

console.log('Tom '.concat('is a good').concat('boy'));
console.log('sample.substring(1)', sample.substring(1));
console.log('sample.substring(1, 5)', sample.substring(1, 5));
console.log('sample.substring(-5)', sample.substring(-5));

// negative has no impact in substring function
// only  thing it does is only 1 character
console.log('sample.substring(1, -4)', sample.substring(1, -1));
console.log('sample.substring(1, -4)', sample.substring(1, -4));
console.log('sample.substring(1, -5)', sample.substring(1, -5));


const createBooking = (flightNumber, numberOfPassengers = 1, price = 1.99 * numberOfPassengers) => {
    return {
        flightNumber,
        numberOfPassengers,
        price
    }
}

console.log(createBooking('LN345', 4));
console.log(createBooking('JK345', undefined));
console.log(createBooking('HM345', undefined, 2000));