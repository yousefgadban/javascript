const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
];

function loop(arr) {

    arr.forEach(element => {
        element.forEach(country => {
            console.log('country ' + country);
        });
    });
}

loop(listOfNeighbours);