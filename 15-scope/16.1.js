
// block 1
// 5 


// block 2 
// 1

// block 3
// 3, 3, 3

let i;
for (i = 0; i < 3; i++) {
 const log = () => {
    console.log(i);
 }
 setTimeout(log, 0);
}