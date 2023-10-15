/**
 * Dogs age array is input -> 2 sets of data
 * 
 * 1. Calculte age of the dogs in human years 
 *   if age of dog is <= 2 rhen human year = 2 * age of the dog
 *   else age of dog is 16+ (4 * age of dog)
 * 
 * 2. Exclude all the minor dogs meaning < 18 human years 
 * 
 * 3. Calculate the average age of Dogs in human years
 */

const calculateDogAgeInHumanYears = function (dogAgeArray) {
    const dogAgeInHumanYears = dogAgeArray.map((dogAge) => dogAge <= 2 ? 2 * dogAge : 16 + (dogAge * 4));
    // console.log("🚀 ~ file: code-challenge-16.js:15 ~ calculateDogAgeInHumanYears ~ dogAgeInHumanYears:", dogAgeInHumanYears);

    const adultDogAges = dogAgeInHumanYears.filter(dogAge => dogAge > 18);
    // console.log("🚀 ~ file: code-challenge-16.js:18 ~ calculateDogAgeInHumanYears ~ adultDogAges:", adultDogAges);

    const totalDogAge = adultDogAges.reduce((acc, curr) => acc + curr, 0);
    return totalDogAge / adultDogAges.length;
}

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

let averageDogAge = calculateDogAgeInHumanYears(data1);
console.log("🚀 ~ file: code-challenge-16.js:25 ~ averageDogAge :", averageDogAge)

averageDogAge = calculateDogAgeInHumanYears(data2);
console.log("🚀 ~ file: code-challenge-16.js:31 ~ averageDogAge :", averageDogAge)
