const hero = {
    health: 5,
    power: 68,
    getStrength: function() {
        if (this.health <= 5) {
            return this.power - 10;
        } else {
            return this.power;
        }
    }
}

function whoIsStronger(getStrength) {
    const myStrength = 82;
    if (getStrength() < myStrength) {
        return "I am stronger";
    } else return "You are stronger";
}

let stronger = whoIsStronger.call(hero, hero.getStrength)
console.log(stronger);

//console.log(whoIsStronger(hero.getStrength.bind(hero)));



// const f = new Function( 'num,num2','return num+num2');

// console.log(f(100,200));

// if(f.apply(f,[200,200]) === 400){
//     console.log("success")
// }

