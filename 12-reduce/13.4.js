function step(n) {
    
    let str = '';
    for(let i = 1; i <= n ; i++) {
        console.log('|'+'#'.repeat(i) + ' '.repeat(n-i) + '|');
    }
}

step(3);
//console.log(step(2));