const { Select } = require('enquirer');
const fs = require("fs");
const path = require("path");

// function to get all directory names in the unsorted directory and return the resulting array.
const unsortedDirs = fs.readdirSync("./unsorted").filter((file) => {
  return fs.statSync(path.join("./unsorted", file)).isDirectory();
});

const prompt = new Select({
  name: 'Directory',
  message: 'Pick folder',
  choices: unsortedDirs
});

function promptUser() {
  prompt.run()
    .then(answer => { return answer })
    .catch(console.error);
}

module.exports = promptUser;