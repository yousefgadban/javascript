function boom(n) {

    let print = '';
    for (let i = 1 ; i <= n ; i++) {
        if (i % 7 == 0 ) {
            print += 'boom'
            if ((''+i).includes('7')) {
                print += '-boom'
            }
        } else {
            print += i+'';
        }
        if (i != n) {
            print += ',';
        }
    }

    return print;

}

console.log(boom(18));