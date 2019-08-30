//data
var monday = [
        {
            'name'     : 'Write a tutorial',
            'duration' : 180
        },
        {
            'name'     : 'Some web development',
            'duration' : 120
        }
    ];
 
var tuesday = [
        {
            'name'     : 'Keep writing that tutorial',
            'duration' : 240
        },
        {
            'name'     : 'Some more web development',
            'duration' : 180
        },
        {
            'name'     : 'A whole lot of nothing',
            'duration'  : 240
        }
    ];
     
var tasks = [monday, tuesday];

//algoritm
                  // Concatenate our 2D array into a single list
var result = tasks.reduce((acc, current) => acc.concat(current))
                  // Extract the task duration, and convert minutes to hours
                  .map((task) => task.duration / 60)
                  // Filter out any task that took less than two hours
                  .filter((duration) => duration >= 2)
                  // Multiply each tasks' duration by our hourly rate
                  .map((duration) => duration * 25)
                  // Combine the sums into a single dollar amount
                  .reduce((acc, current) => [(+acc) + (+current)])
                  // Convert to a "pretty-printed" dollar amount
                  .map((amount) => '$' + amount.toFixed(2))
                  // Pull out the only element of the array we got from map
                  .reduce((formatted_amount) =>formatted_amount);
                  

// Remainder 1 omitted
/*
.reduce(function (accumulator, current) {
                    return [(+accumulator) + (+current)];
                })
1. Знак плюс перед accumulator и current конвертирует значению в число. Если этого не сделать, возвращаемое значение будет представлять из себя бесполезную строку, "12410075100".
2. Если не обернуть сумму в квадратные скобки, reduce вернёт обычное значение, а не массив. В результате вы получите TypeError, так как map может использоваться только для массива! 
*/

// Remainder 2 omitted
/*
map(function (dollar_amount) {
    return '$' + dollar_amount.toFixed(2);
}).reduce(function (formatted_dollar_amount) {
    return formatted_dollar_amount;
});

//Вызов map возвращает массив содержащий одно значение. Здесь мы вызываем reduce для получения значения.
// Другой способ сделать это - убрать вызов reduce и проиндексировать массив, который получается после работы map:
.map(function (dollar_amount) {
    return '$' + dollar_amount.toFixed(2);
})[0];
*/

/*  // with out ()=>
var result = tasks.reduce(function (accumulator, current) {
                    return accumulator.concat(current);
                }).map(function (task) {
                    return (task.duration / 60);
                }).filter(function (duration) {
                    return duration >= 2;
                }).map(function (duration) {
                    return duration * 25;
                }).reduce(function (accumulator, current) {
                    return [(+accumulator) + (+current)];
                }).map(function (dollar_amount) {
                    return '$' + dollar_amount.toFixed(2);
                }).reduce(function (formatted_dollar_amount) {
                    return formatted_dollar_amount;
                });
*/

/* //algoritm on forEach
var concatenated = monday.concat(tuesday),
    fees = [],
    formatted_sum,
    hourly_rate = 25,
    total_fee = 0;
 
concatenated.forEach(function (task) {
    var duration = task.duration / 60;
     
    if (duration >= 2) {
        fees.push(duration * hourly_rate);
    }
});
 
fees.forEach(function (fee) {
    total_fee += fee
});
 
 
var formatted_sum = '$' + total_fee.toFixed(2);
*/
