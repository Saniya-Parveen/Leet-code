//Apply Transform Over Each Element in Array

var map = function(arr, fn) {
    let transformedArray = [];
    for(let i=0; i< arr.length; i++ ) {
        transformedArray[i] = fn(arr[i], i);
    }
    return transformedArray;

    
};