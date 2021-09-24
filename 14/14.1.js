


// console.log('sads');

// let btn = window.document.querySelector('#btn');  

// btn.innerHTML = 'btn1' 

// let i = 0 ;
// btn.addEventListener('click', () => {
//     i++;
//     console.log(i);
// })


console.log('debug');

function getSum(arr1, arr2){
    let sum = 0;

    for (let i=0; i < arr1.length; i++){
        sum += arr1[i];
    }

    for (let i=0; i < arr2.length; i++){
    sum += arr2[i];
    }
}

getSum([1,2,3],[5,66,23]);