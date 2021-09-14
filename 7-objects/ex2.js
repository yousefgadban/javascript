let myCountry = {
    country: 'Israel', 
    capital : 'jerusalem', 
    language: 'He', 
    population : '7', 
    neighbours: ['Lebanon', 'syria'] ,
    describe: function describe() {
        return `${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    }
}

console.log(myCountry.describe());