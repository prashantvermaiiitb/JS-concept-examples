const demoArray = ['first', 'second', [1, 2, 3]];

// destructing demo Array
let [first, second, ...rest] = demoArray;
console.log("🚀 ~ file: code-challenge-13.js:5 ~ first, second, ...rest:", first, second, ...rest);

// leaving second value
const [a, , c] = demoArray;
console.log("🚀 ~ file: code-challenge-13.js:9 ~ a, , c:", a, c);

// destructuring array within array
const [x, y, [x1, , y1]] = demoArray;
console.log("🚀 ~ file: code-challenge-13.js:13 ~ x, y, [x1, , y1]:", x, y, x1, y1);

//destructuring array with default value
const [a1, b1, [a2, b2, c2, d2 = 10]] = demoArray;
console.log("🚀 ~ file: code-challenge-13.js:17 ~ a1, b1, [a2, b2, c2, d2]", a1, b1, a2, b2, c2, d2);

// temporary switching value
[second, first] = [first, second];
console.log("🚀 ~ file: code-challenge-13.js:20 ~ second, first:", second, first)

// 
let a3 = 11, b3 = 12, c3 = [1, 2, 3, 4, 5, 6, 7];
let obj = {
    a3, b3, c3, openingHours: {
        mon: {
            open: 11,
            close: 9
        },
        tue: {
            open: 12,
            close: 10
        }
    }
};
console.log("🚀 ~ file: code-challenge-13.js:37 ~ obj:", obj)

// default value with de-structuring
let { openingHours: { mon: { }, wed = 'no' } } = obj;
console.log("🚀 ~ file: code-challenge-13.js:40 ~ wed:", wed);

// destructuring and picking only 2 values
let [a4, b4] = c3;
console.log("🚀 ~ file: code-challenge-13.js:44 ~ a4, b4:", a4, b4);

let day = {
    isSunday: true,
    isMonday: false
};
// Monday is falsy value hence || is working in all the conditions if first is false
console.log("🚀 ~ file: code-challenge-13.js:50 ~ day with || operator :", day.isMonday || 'Today is not monday');

// undefined or null is the value that it takes into account 
console.log("🚀 ~ file: code-challenge-13.js:50 ~ day with ?? operator :", day.isMonday ?? 'Today is not monday');

// || operator to define the value
day['isTuesday'] ||= `Next day is Tuesday`;

// this key will be assigned because && is used as operator 
day['isWednesday'] = day['isWednesday'] && `Next day is Tuesday`;

// this key will be assigned only when it's defined
day['isThursday'] &&= `Next day is Tuesday`;

console.log("🚀 ~ file: code-challenge-13.js:59 ~ day:", day);

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log("🚀 ~ file: code-challenge-13.js:69 ~ days:", days.entries());
for (const day of days.entries()) {
    //each entry will be [index, value at this index]
    console.log("🚀 ~ file: code-challenge-13.js:71 ~ day:", day);
}

// todo dynamic keys
obj[`${days.length}`] = days;

console.log("🚀 ~ file: code-challenge-13.js:37 ~ obj:", obj);

const days2 = [...days.entries()];
console.log("🚀 ~ file: code-challenge-13.js:81 ~ days2:", days2);

const demoMapFromArray = new Map(days2);
console.log("🚀 ~ file: code-challenge-13.js:84 ~ demoMapFromArray:", demoMapFromArray);
