// Counter II

var createCounter = function (init) {
  var count = init || 0;

  const increment = function () {
    count++;
    return count;
  };
  const decrement = function () {
    count--;
    return count;
  };
  const reset = function(){
    count = init || 0;
    return count;
  }
  return  {increment, decrement, reset}
};
