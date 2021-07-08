// Add your functions here

function map(arr, func) {
    let r = [];
    for (let i = 0; i < arr.length; i++ ) {
        let element = arr[i];
        r.push(func(element));
    }
    return r;
};

function reduce(arr, func, startingValue) {
    let total;
    if (startingValue) {
        total = startingValue;
        for (let i = 0; i < arr.length; i++) {
            total = func(arr[i], total);
        }
        return total;
     }
    else {
        total = arr[0];
        for (let i = 1; i < arr.length; i++) {
            total = func(arr[i], total);
        }
        return total;
    }
};
