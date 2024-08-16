const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const sortArray = ages.sort((a, b) => (a - b));
let min = sortArray[0]
let max = sortArray[sortArray.length - 1];
console.log("Min Age:", min);
console.log("Max Age:", max);

// task2
let length = ages.length;
let median
if (length % 2 == 0) {
    median = (sortArray[(length / 2) - 1] + sortArray[length / 2]) / 2
} else {
    median = sortArray[Math.floor(length / 2)]
}
console.log("Median Age:", median);


// task3
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
let average = sum / length;
console.log("Average Age:", average);

//task4
const ageRange = max-min;
console.log("Age Range:", ageRange);


const diffMinAvg = Math.abs(min - average);
const diffMaxAvg = Math.abs(max - average);

console.log("Difference between Min Age and Average:", diffMinAvg);
console.log("Difference between Max Age and Average:", diffMaxAvg);



