const { data } = require("./index.js");

const d = data.split("\n");
const directions = d.shift().split("");
let obj = {};

for (let i = 0; i < d.length; i++) {
    let s = d[i].split(" = ")[0];
    let first = d[i].split(" = ")[1].slice(1, 4);
    let second = d[i].split(" = ")[1].slice(6, 9);
    obj[s] = [first, second];
}

let res = "";
let counter = 0;
let key = "AAA";

for (let i = 0; i < directions.length; i++) {
    switch (directions[i]) {
        case "R":
            res = obj[key][1];
            key = obj[key][1];
            break;
        case "L":
            res = obj[key][0];
            key = obj[key][0];
            break;
    }
    counter++;
    if (res === "ZZZ") {
        break;
    }
    if (i === directions.length - 1) i = -1;
}
console.log(counter);
