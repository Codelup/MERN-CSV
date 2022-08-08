const fs = require("fs");
const CSVToJSON = require("csvtojson");

// convert users.csv file to JSON array
CSVToJSON()
  .fromFile("./Test_File.csv")
  .then((users) => {
    // console.log(users);
    // creating a file named sample.json
    fs.writeFile(
      "sample.json",
      JSON.stringify(users, null, 2),
      (err) => {
        if (err) {
          throw err;
        }
      }
    );
  })
  .catch((err) => {
    // log error if any
    console.log(err);
  });

// Read the Processed json file
let data;

try {
    // read the file
  data = JSON.parse(fs.readFileSync("./sample.json"));
  // Mapping through the JSON File
  let newData = [...new Map(data.map((item) => [item["name"], item])).values()];

  //console.log(Object.values(newData[1]));
  for (let index = 0; index < newData.length; index++) {
    // splitting the name key to two keys,
    let splitName = Object.values(newData[index].name.split(" "));
    Object.values(newData[index].firstName = splitName[0]);
    Object.values(newData[index].lastName = splitName[1]);
    // deleting the name key and its values
    Object.values(delete newData[index].name);
    // print the new generated objects
    //console.log(newData[index]);
    // Creating a new final with the required data
    fs.writeFile(
        "processedLearners.json",
        JSON.stringify(newData, null, 2),
        (err) => {
          if (err) {
            throw err;
          }
        }
      );
  }
} catch (err) {
  // handle your file not found (or other error) here
  console.log(err);
}
