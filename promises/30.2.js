function makeAllCaps(arr) {

    return new Promise((resolve, reject) => {

        let array = arr.map((word) => {

            if (typeof word != 'string') {
                return 0;
            } else {
                return word.toUpperCase();
            }
            
        });

        if (array.indexOf(0) != -1) {
            reject([])
        }
        
        resolve(array);

    });

}


function sortWords(arr) {

    return new Promise((resolve, reject) => {
        resolve(arr.sort());
    });

}


let arr = ['one', 'awo'];
//let arr = ['one', 'awo', 0];

makeAllCaps(arr).then((data) => {
    sortWords(data).then((data1) => {
        console.log(data1);
    }).catch((err1) => {
        console.log('error ' + err1);
    })
}).catch((err) => {
    console.log('error ' + err);
})

