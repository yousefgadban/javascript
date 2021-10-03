function Pokemon(pokemonName, pokemonType, pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;

    this.callPokemon = () => {
        console.log(`I choose you, ${this.name}`);
    }

    this.attack = (i) => {
        console.log(`${this.name} used ${this.attackList[i]}`);
    }
}

p1 = new Pokemon('name1', 'type1', ['attack1', 'attack2'])
p2 = new Pokemon('name2', 'type2', ['attack2', 'attack3'])
p3 = new Pokemon('name3', 'type3', ['attack3', 'attack4'])

p1.callPokemon();
p2.attack(1);