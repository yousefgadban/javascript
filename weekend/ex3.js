function nb_year(p0, percent, aug, p) {

    let p1 = p0
    let i = 0;
    while (i >= 0) {
        p1 += Math.floor(p1 * (percent/100)) + aug;
        i++;
        if (p1 >= p) {
            break;
        }
        
    }

    return i;
}

//console.log(nb_year(1500000, 2.5, 10000, 2000000));
// nb_year(1500, 5, 100, 5000)


function bus(arr) {

    let n = arr[0][0];
    return arr.reduce((prev,curr) => {
        //console.log(n + curr[0] - curr[1]);
        n += curr[0] - curr[1];
        return n ;
    });

}

console.log(bus([[10,0],[1,2],[3,5],[6,3]]));
