

function greaterThan(input) {
    return new Promise((resolve, reject) => {

        if (input >= 10) {
            resolve({action: 'success'})
        } else {
            reject({action: 'failed'})
        }
    })
}

greaterThan(11).then((data)=> {
    console.log(data);
}).catch(err => {
    console.log(err);
})


