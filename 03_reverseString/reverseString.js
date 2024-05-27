const reverseString = function(str) {
    let string = str.split('');
    let vissza = string.reverse();
    let vegso = vissza.join('');
    return vegso;
};

reverseString('hello');

// Do not edit below this line
module.exports = reverseString;
