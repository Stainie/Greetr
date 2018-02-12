function modifyArray(arr, fn) {
    var newArr = [];
    
    for (var i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
            )
    };
    
    return newArr;
}

var arr1 = [1,2,3];

var wrapLimiter = function(limit) {
    return function(limit, item) {
        return item > limit
    }.bind(this, limit);
};

var arrFinal = modifyArray(arr1, wrapLimiter(1));

console.log(arr1);
console.log(arrFinal);
