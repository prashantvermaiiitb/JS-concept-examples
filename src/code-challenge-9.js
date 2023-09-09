const temperatures = [17, 21, 23];

const temperatureString = temperatures.map((temp, index) => `${temp}℃ in ${index + 1} days`).join('...')
console.log(`...${temperatureString}...`);