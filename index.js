// Propt the user for the folder they wish to sort.
const promptUser = require('./prompt.js');

// run promptUser and store the result in userDir asynchonously.
// create async function to run promptUser and store the result in userDir.

// wrap the await in an async function.


(async () => {
  const userDir = await promptUser();
  console.log(typeof (userDir));
})();


// extract(getUserDir());

// Flatten all directories in the selected unsorted directory.




// Sort the selected directory and move it to the sorted directory.
