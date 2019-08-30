// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line
  //console.log(this);  // посмотреть данные
  //console.log(callback);  // посмотреть функцию сallback

  // var1 easy
  this.forEach(item => newArray.push(callback(item)));
    
  // var2 important "of" 
  /*
  for(let item of this) {
    newArray.push(callback(item));
  }
  */
  
  return newArray;
};

var new_s = s.myMap(function(item){
  return item * 2;
});

console.log(new_s);
