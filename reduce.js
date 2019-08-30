var reduce = function (array, callback, initial) {
    var accumulator = initial || 0;
     
    array.forEach(function (element) {
       accumulator = callback(accumulator, array[i]);
    });
     
    return accumulator;
};
