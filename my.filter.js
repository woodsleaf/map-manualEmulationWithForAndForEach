// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Add your code below this line
  //console.log('this: ' + this);
  //console.log('callback: ' + callback);
  this.forEach((item, index, arr) => callback(item) ? newArray.push(item):false);
    /*{
      console.log(`item: ${item} index: ${index} arr: ${arr}`);
      console.log(`callback(item): ${callback(item)}`)
      //if (callback(item)) {
      //  newArray.push(item);
      //}
      callback(item) ? newArray.push(item):false;
    }*/
  
  // Add your code above this line
  //console.log(newArray);
   return newArray;
};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
console.log(new_s);
