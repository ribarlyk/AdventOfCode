const { inputData } = require("./data.js");

let input = inputData.split("\n");

let time = input[1]
    .split("Time:        ")
    .splice(1)[0]
    .trim()
    .split("     ")
    .reduce((a, c) => a + c, "");
let distance = input[2]
    .split("Distance:   ")
    .splice(1)[0]
    .trim()
    .split("   ")
    .flat()
    .reduce((a, c) => a + c, "");

const waysToWin = (time, distance) => {
    let lessThanCount = 0;
    let pressTime = 1;
    while (pressTime * (time - pressTime) < distance) {
        lessThanCount++;
        pressTime++;
    }
    return time - lessThanCount * 2 - 1;
};

console.log(waysToWin(+time, +distance));
