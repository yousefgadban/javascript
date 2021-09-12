function describeCountry(name, population, capitalCity) {
    return `${name} has ${population} million people and its capital city is ${capitalCity}`
}

let Finland = describeCountry('Finland', '6', 'Helsinki');
let Israel = describeCountry('Israel', '8', 'Jerusalem');
let Lebanon = describeCountry('Lebanon', '4', 'Beirut');

console.log(Finland);
console.log(Israel);
console.log(Lebanon);