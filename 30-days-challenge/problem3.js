// To Be Or Not To Be

var expect = function(val){
    return {
        toBe: function(compareVal){
            if(val !== compareVal){
                throw new Error("Not Equal");
            }
            return true;
        },
        notToBe: function(compareVal){
            if(val === compareVal){
                throw new Error("Equal");
            }
            return true;
        }
    }
}
