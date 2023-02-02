
const ARRAY_LENGTH = 5;
const MAX_INT = 100;

console.log('START: Generate Random Array');
const randomNumbers = generateRandomArray(ARRAY_LENGTH, MAX_INT);
printArray(randomNumbers);
console.log('END: Generate Random Array');

console.log('START: Adding counter to array values');
for (let counter = 0; counter < randomNumbers.length; counter++) {
    randomNumbers[counter] += counter;
}
console.log('RESULT: Adding counter to array values: ');
printArray(randomNumbers);
console.log('END: Adding counter to array values');

console.log('START: Printing Even or Odd - Stored Array');
logIsEvenOrOdd(randomNumbers);
console.log('END: Printing Even or Odd - Stored Array');

console.log('START: Printing Even or Odd - New Array');
logIsEvenOrOdd(generateRandomArray(ARRAY_LENGTH, MAX_INT));
console.log('END: Printing Even or Odd - New Array');

console.log('START: Manipulate Array');
randomNumbers.splice(2, 1);
printArray(randomNumbers);

randomNumbers.unshift("new start");
printArray(randomNumbers);

randomNumbers.push("new end");
printArray(randomNumbers);
console.log('END: Manipulate Array');

// Required Methods

function logIsEvenOrOdd(numberArray) {
    let i = 0;
    while (i < numberArray.length) {
        if (numberArray[i] % 2 == 0) console.log(`${numberArray[i]} is even`);
        else console.log(`${numberArray[i]} is odd`);
        i++;
    }   
}

// Helper Methods

function generateRandomArray(length, max) {
    return Array(length).fill().map(() => Math.round(Math.random() * max));
}

function printArray(numbers) {
    console.log('\t--Printing Array--');
    for (let i = 0; i < numbers.length; i++) {
        console.log(i + ': ' + numbers[i]);
    }
    console.log('\t--End of Array--');
}