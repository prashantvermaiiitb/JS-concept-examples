/**
 * For  
 * 1. Set : not to have duplicates
 * 2. Array : when you need order for linear storage
 */
const orderedSet = new Set();

orderedSet.add('Pizza');
orderedSet.add('Rissato');
orderedSet.add('Italiano');

console.log("🚀 ~ file: code-challenge-11.js:11 ~ orderedSet:", orderedSet);
console.log("🚀 ~ file: code-challenge-11.js:11 ~ orderedSet:", orderedSet.has('Pizza'));
console.log("🚀 ~ file: code-challenge-11.js:11 ~ orderedSet:", orderedSet.has('orange'));
console.log("🚀 ~ file: code-challenge-11.js:11 ~ orderedSet:", orderedSet.add('orange'));
console.log("🚀 ~ file: code-challenge-11.js:11 ~ orderedSet:", orderedSet.delete('orange'));
console.log("🚀 ~ file: code-challenge-11.js:11 ~ orderedSet:", orderedSet.size);

for (const ingredient of orderedSet) {
    console.log("🚀 ~ file: code-challenge-11.js:19 ~ ingredient:", ingredient);

}

const demoArrayFromOrderedSet = [...orderedSet];
console.log("🚀 ~ file: code-challenge-11.js:24 ~ demoArrayFromOrderedSet:", demoArrayFromOrderedSet);

console.log(`new set size`, new Set(['a', 'b', 'c', 'a', 'd']).size);