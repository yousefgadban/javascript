const candyStore = {
    candies: [
        { 
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}

function getCandy(candyStore, id){

    let candiesArr = candyStore.candies;
    
    for (let i = 0 ; i < candiesArr.length ; i++) {
        if (candiesArr[i].id == id) {
            return candiesArr[i];
        }
    }

    return 'no such candy';
}

function getPrice(candyStore, id){
    
    let candiesArr = candyStore.candies;
    
    for (let i = 0 ; i < candiesArr.length ; i++) {
        if (candiesArr[i].id == id) {
            return candiesArr[i].price;
        }
    }

    return 'no such candy';

} 

function addCandy(candyStore, id, name, price){
    
    let newCandy = {
        name: name,
        id: id,
        price: price,
        amount: 1
    }
    candyStore.candies.push(newCandy);

}

function buy(candyStore, id){
    
    let candiesArr = candyStore.candies;
    
    for (let i = 0 ; i < candiesArr.length ; i++) {
        if (candiesArr[i].id == id) {
            candiesArr[i].amount--;
            candyStore.cashRegister += candiesArr[i].price;
        }
    }

}

// console.log(getCandy(candyStore, 'as12f'));

//console.log(getPrice(candyStore, '5hd7y'));

//addCandy(candyStore, '1111', 'newCandy', 20);

// buy(candyStore, '5hd7y')

// console.log(candyStore);