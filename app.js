// function getType (data){
//     return typeof data;
// }
// var inputData = prompt('Введите значение:');
// var dataType = getType(inputData);
// console.log('тип данных:', dataType)


// function logData(data) {
//     console.log(typeof data);
// }
//     logData(34);
//     logData('hello');
//     logData(true);
//     logData(null);
//     logData(undefined);
//     logData({});
//     logData([]);
//     logData(function (){});


function reverseWord(word){
    return word.split('').reverse().join();
}
const word = 'JavaScript';
const reversedWord = reverseWord(word)
console.log(reversedWord)