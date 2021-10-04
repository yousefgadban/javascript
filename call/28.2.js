let obj = {
    name : "yousef",
    print : function() {
        console.log('name is ' + this.name);
    },
    // printWithDelay : function() {
    //     setTimeout(() => {
    //         console.log('name is ' + this.name);
    //     }, 200)
    // }
}

let printWithDelay = function() {
    setTimeout(() => {
        console.log('name is ' + this.name);
    }, 200);
}


obj1 = {
    name: "name1"
}

printWithDelay.call(obj1)


//obj.print()
//obj.printWithDelay()