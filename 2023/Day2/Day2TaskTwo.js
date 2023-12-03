//Task 2

const fs = require("fs");

const filePath = "Day2.2.txt";
fs.readFile(filePath, "utf8", (err, data) => {
  const lines = data.split(/\n/);

  let a = lines.map((x) => x.split(":"));

  let counter = 0;

  for (let i = 0; i < a.length; i++) {
    let cubes;
    for (let z = 0; z < a[i].length; z++) {
      cubes = a[i][1].split(";");
    }

    let cub;

    const schema = {
      blue: 0,
      red: 0,
      green: 0,
    };

    for (let j = 0; j < cubes.length; j++) {
      cub = cubes[j].split(",");

      for (let k = 0; k < cub.length; k++) {
        let asd = cub[k].split(" ");

        if (schema.hasOwnProperty(asd[2].trim())) {
          if (schema[asd[2].trim()] < Number(asd[1])) {
            schema[asd[2].trim()] = Number(asd[1]);
          }
        }
      }
    }
    let res = Object.values(schema);
    let final = res.reduce((a, c) => {
      return (a *= Number(c));
    }, 1);

    counter += final;
  }
  console.log(counter);
});
