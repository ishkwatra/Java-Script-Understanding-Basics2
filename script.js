let country = 'Portugal';
let continent = 'Europe';
let population = 10;
console.log(country);
console.log(continent);
console.log(population);

let isIsland = false;
if (isIsland === false) console.log(isIsland);
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = 'portuguese';
const countryNew = 'Portugal';
const continentNew = 'Europe';
const isIslandNew = false;
// isIslandNew = true; -> not possible

console.log(population / 2);
population++;
console.log(population / 2);
console.log(population > 6);
console.log(population > 33);
const description1 = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description1);
let string = `ish`
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
if (1) console.log(description);
else {
    //pass
}

console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> '617'
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143
console.log(1 + '5' + '6' + 4 + 3 - 2 - 1 + '5' - '6' - 1 + 1)
console.log(1 + '5' + '6' + 4 + 3 - 2 - 1 + '6' - '5' - 1 + 1)
console.log('5' + 1 - 1 + 1)
console.log('5' + 0 + 1)

//const numNeighbours = prompt('How many neighbour countries does your country have?',);
// LATER : This helps us prevent bugs
const numNeighbours = Number(prompt('How many neighbour countries does your country have? '),);
console.log(numNeighbours); //gives NaN if not a number
if (numNeighbours === 1) {
    console.log('Only 1 border!');
}
else if (numNeighbours > 1) {
    console.log('More than 1 border');
}
else {
    console.log('No borders');
}

const languageNew = prompt("Language?")
switch (languageNew) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        //hence works fors for both chinese & mandarin
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

console.log(0 > 33 ? 1 : 0);