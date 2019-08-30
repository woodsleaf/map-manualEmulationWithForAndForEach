var map = function (array, callback) {
 
    var new_array = [];
 
    array.forEach(function (element, index, array) {
       new_array.push(callback(element)); 
    });
 
    return new_array;
 
};
 
var task_names = map(tasks, function (task) {
 
    return task.name;
 
});
