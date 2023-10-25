const bigIntVar = BigInt(100);
console.log("🚀 ~ file: time-date.js:2 ~ bigIntVar:", bigIntVar);

//! will give error 
try {
    console.log(bigIntVar * 199);
} catch (e) {
    console.error("🚀 ~ file: time-date.js:8 ~ e:", e)

}

console.log(bigIntVar * 100n);

console.log(2 ** 53 - 1)
console.log((2 ** 53 - 1) + 1)
console.log((2 ** 53 - 1) + 2)
console.log((2 ** 53 - 1) + 4)

console.log(new Date());
console.log(`${new Date(3 * 24 * 60 * 60 * 1000)}`);
console.log(new Date().getTime());

console.log(15_00)
console.log(1_5_00)
console.log(1_500)
console.log(35_599)

console.log(Number(15_00))
console.log(Number(1_5_00))
console.log(Number(1_500))
console.log(Number(35_599))


console.log(BigInt(287_564_000_000_00))

const date = new Date();
let formatDate = new Intl.DateTimeFormat('en-GB').format(Date.now());
console.log("🚀 ~ file: time-date.js:38 en-GB ~ formatDate:", formatDate)
formatDate = new Intl.DateTimeFormat('en-US').format(Date.now());
console.log("🚀 ~ file: time-date.js:38 en-US ~ formatDate:", formatDate)
formatDate = new Intl.DateTimeFormat('ar-SY').format(Date.now());
console.log("🚀 ~ file: time-date.js:38 ar-SY ~ formatDate:", formatDate)
/** 
 * to get this we have need ISO lang code table
 */

const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long'//2-digit , numeric
};

/**
 * https://saimana.com/list-of-country-locale-code/
 */
formatDate = new Intl.DateTimeFormat('bo_CN', options).format(Date.now());
console.log("🚀 ~ file: time-date.js:38 ar_AE ~ formatDate, with options :", formatDate);
