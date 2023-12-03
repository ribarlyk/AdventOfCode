// const fs = require("fs");

// const filePath = "Day3.1.txt";
// fs.readFile(filePath, "utf8", (err, data) => {
//   const arrOfData = data.split(/\n/);
//   console.log(arrOfData);
//   let result = 0;
//   for (let i = 0; i < arrOfData.length; i++) {
//     let indexes = [];
//     let number = "";
//     for (let j = 0; j < arrOfData[i].length; j++) {
//       if (
//         arrOfData[i][j].charCodeAt() >= 48 &&
//         arrOfData[i][j].charCodeAt() <= 57
//       ) {
//         console.log(arrOfData[i][j]);
//         number += arrOfData[i][j];
//         console.log(number, "shto slaga zvezda");
//         indexes.push(i, j);
//       } else if (arrOfData[i][j] === ".") {
//         let is = false;
//         for (let z = 0; z < indexes.length; z += 2) {
//           let f = indexes[z];
//           let s = indexes[z + 1];

//           console.log(number);
//           if (
//             f + 1 < arrOfData[i].length &&
//             s + 1 < arrOfData[i].length &&
//             number.length >= 2
//           ) {
//             console.log("first if", f + 1, s + 1, f - 1, s - 1);
//             if (arrOfData[f + 1][s] !== ".") {
//               result += Number(number);
//               is = true;
//               console.log(arrOfData[f + 1][s], "asd");
//             }
//             console.log(arrOfData[f][s + 1]);
//             if (
//               arrOfData[f][s + 1] !== "." &&
//               (arrOfData[f][s + 1].charCodeAt() < 48 ||
//                 arrOfData[f][s + 1].charCodeAt() > 57)
//             ) {
//               result += Number(number);
//               is = true;

//               console.log(arrOfData[f + 1][s + 1], "diagonal");
//             }
//             if (arrOfData[f + 1][s + 1] !== ".") {
//               result += Number(number);
//               is = true;

//               console.log(arrOfData[f + 1][s + 1], "diagonal");
//             }
//             if (arrOfData[f + 1][s - 1] !== ".") {
//               result += Number(number);
//               is = true;

//               console.log(arrOfData[f][s - 1], "diagonal");
//             }
//           }
//           if (f - 1 >= 0 && s - 1 >= 0) {
//             console.log("first if", f + 1, s + 1, f - 1, s - 1);
//             if (arrOfData[f - 1][s] !== ".") {
//               result += Number(number);
//               is = true;

//               console.log(arrOfData[f - 1][s], "asd");
//             }
//             if (arrOfData[f - 1][s - 1] !== ".") {
//               result += Number(number);
//               is = true;

//               console.log(arrOfData[f - 1][s - 1], "diagonal");
//             }
//             if (arrOfData[f - 1][s + 1] !== ".") {
//               result += Number(number);
//               is = true;

//               console.log(arrOfData[f][s - 1], "diagonal");
//             }
//           }
//           if (is) {
//             break;
//           }
//         }

//         // console.log(number);
//         console.log("-------");
//         console.log(result, "result");
//         number = "";
//         indexes = [];
//       } else {
//         result += Number(number);
//         number = "";
//       }
//     }
//   }
// });


const fs = require("fs");
const path = require("path");

function isPart(i, j) {
    const i_values = [-1, 0, 1];
    const j_values = [-1, 0, 1];
    const symbols = ['%', '#', '*', '/', '@', '$', '&', '=', '+', '-'];

    for (const iv of i_values) {
        for (const jv of j_values) {
            if (!(i+iv < 0 || i+iv >= input.length || j+jv < 0 || j+jv >= input[0].length)) {
                if (symbols.includes(input[i+iv][j+jv]))
                    return true; }}}
    return false;
}

const input = String(fs.readFileSync(path.join(__dirname, "input.txt"))).trim().split("\n");

const parts = [];
let tempBuilder = '';
let tempPart = false;

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
        if (Number.isInteger(+input[i][j])) {
            tempBuilder += input[i][j];
            tempPart = (tempPart || isPart(i, j));
        }
        if (!Number.isInteger(+input[i][j]) || j == input[i].length-1) {
            if (tempBuilder.length > 0) {
                if (tempPart)
                    parts.push(+tempBuilder);
                tempBuilder = '';
                tempPart = false; }}}}

console.log(parts.reduce((a,b)=>a+b));



