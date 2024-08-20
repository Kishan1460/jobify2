

let multiply = function(x) {
    return function(y) {
        console.log(x-y);
    }
}

let mydetail = multiply(12);


mydetail(3)