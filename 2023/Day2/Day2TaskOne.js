//Task 1

const fs = require("fs");

const filePath = "Day2.1.txt";
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
      blue: 14,
      red: 12,
      green: 13,
    };
    const schemaResult = {
      blue: true,
      red: true,
      green: true,
    };

    for (let j = 0; j < cubes.length; j++) {

      cub = cubes[j].split(",");

      for (let k = 0; k < cub.length; k++) {
        let asd = cub[k].split(" ");
        console.log(schema[asd[2].trim()], Number(asd[1]));
        if (schema.hasOwnProperty(asd[2])) {
          if (schema[asd[2]] < Number(asd[1])) {
            schemaResult[asd[2]] = false;
          }
        }
      }
    }
    
    let res = Object.values(schemaResult);
    let final = res.filter((a) => {
      return a === true;
    });
    if (final.length === 3) {
      let as = a[i][0].split(" ");

      counter += Number(as[1]);
    }
  }
  console.log(counter);
});
