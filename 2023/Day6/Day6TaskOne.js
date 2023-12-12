const { inputData } = require("./data.js");

let input = inputData.split("\n");

const time = input[1]
    .split("Time:        ")
    .splice(1)[0]
    .trim()
    .split("     ")
    .map((x) => +x);
const distance = input[2]
    .split("Distance:   ")
    .splice(1)[0]
    .trim()
    .split("   ")
    .map((x) => +x);

    let result = 1;
    for (let i = 0; i < time.length; i++) {
        let speed = 0;
        let winningPossibilities = 0;
        let accelerate = 0;
    while (speed <= time[i]) {
        if (speed * accelerate > distance[i]) {
            console.log(speed * accelerate);
            winningPossibilities++;
        }
        speed++;
        accelerate = time[i] - speed;
    }

    result *= winningPossibilities;
    console.log(winningPossibilities, "winp");
}

console.log(result);
