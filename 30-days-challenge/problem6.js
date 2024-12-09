// Filter Elements from Array

var filter = function(arr, fn) {
    var filteredArray = [];
    for (let i=0; i<arr.length; i++){
        if(fn(arr[i],i)) {
            filteredArray.push(arr[i]);
        }
    
    }
    return filteredArray;



    
};