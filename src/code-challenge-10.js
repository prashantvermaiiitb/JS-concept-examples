/**
 * Idea of this file is to test the new JS concepts 
 * 1. Map 
 * 2. Iteration over Map
 * 3. Operation that are doable over maps
 */

/**
 * Creating map from the scratch again.
 */
const demoMap = new Map([
    ['question', `What's your name ?`],
    [1, 'C'],
    [2, 'java'],
    [3, 'javascript'],
    ['correct', 3],
    [true, 'correct 🎉'],
    [false, 'Try again !!']
]);

console.log("🚀 ~ file: code-challenge-10.js:20 ~ demoMap:", demoMap);

//iterator for the map
const demoMapIterator = demoMap.entries();
console.log("🚀 ~ file: code-challenge-10.js:24 ~ demoMapIterator:", demoMapIterator);
document.write(("🚀 ~ file: code-challenge-10.js:24 ~ demoMapIterator: This will be seen in console.log..", demoMapIterator));
document.write('<br/>');
document.write('<br/>');

//iterating over the map, Map is Array<[]>  
for (const [key, value] of demoMap) {
    console.log(`🚀 ~ file: code-challenge-10.js:30 ~ for key: ${key} value is ${value}.`);
    document.write(`🚀 ~ file: code-challenge-10.js:30 ~ for key: ${key} value is ${value}.<br/>`);
}

// Iterator for the Demo map values 
console.log(`demo Map values .. `, demoMap.values());
// Iterator for the Demo map keys 
console.log(`demo Map keys .. `, demoMap.keys());
// Iterator for the Demp map entries()
console.log(`demo map entries .. `, demoMap.entries());

/**
 * Get / Set for Map 
 */
console.log(`Fetching values from the map ${demoMap.get('question')}`);
demoMap.set('categories', ['Pizza', 'Italiano', 'Risotto']);

// Array can be the key
demoMap.set([1, 2], 'Array stored as the key..');

// boolean value can be fetched as the key
console.log(`Getting boolean key value : ${demoMap.get(true)}`);

// Getting size of the map
console.log(`Size of the map: ${demoMap.size}`);

// Creating an array from map
const demoArray = [...demoMap];
console.log("🚀 ~ file: code-challenge-10.js:60 ~ creating demoArray from the Map:", demoArray);
