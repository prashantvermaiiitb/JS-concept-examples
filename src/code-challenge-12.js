/** 
 * Objects and arrays 
 */
const demoObject = {
    questions: ['How are you ?', 'Who is that ?', 'why is that happening ?? '],
    categories: ['Pizza', 'Rissato', 'Lily'],
    order() {
        console.log(`This is order function !`);
    },
    hasCoffee: true,
    openingHours: {
        thur: {
            open: 11,
            close: 0
        },
        fri: {
            open: 10,
            close: 24
        }
    }
};

console.log(Object.keys(demoObject));
console.log(Object.values(demoObject));
console.log('-------------------------');
for (const key in demoObject) {
    console.log(demoObject[key]);
}

console.log(`object entries `, Object.entries(demoObject))
console.log(`object entries `, Object.entries(demoObject.openingHours))

console.log(`undefined property .. .`, demoObject.openingHours.mon);
// optional chaining 
console.log(`undefined property .. .`, demoObject.openingHours.mon?.open || 'Not opened !!');

const userArray = [
    { name: 'john', secondName: 'shorter' },
    { name: 'Jox' }
];

// todo if userArray[2]? is existing or not only then next property secondName will be evaluated 
console.log(userArray[2]?.secondName);







