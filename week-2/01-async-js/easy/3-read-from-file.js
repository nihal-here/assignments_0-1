// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");

function readFile() {
  fs.readFile(
    "/Users/nihal/0-100_course/assignments_0-1/week-2/01-async-js/easy/4-write-to-file.md",
    "utf-8",
    (err, data) => {
      if (err) throw err;
      console.log(data);
    }
  );
}
function writeFile(data) {
  fs.appendFile(
    "/Users/nihal/0-100_course/assignments_0-1/week-2/01-async-js/easy/4-write-to-file.md",
    data,
    (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    }
  );
}

writeFile(
  "  sdjfbjkadfhjkadsfhkjsdhfkjsdfdfskjhfdskjhfdsjhfihdhdsfhi2190309fdjdlhkjfhsdkjhfdskjhf"
);
writeFile(
  "   dkslkjfhdshfdsiuufsdhsdafi DataTransfer;mfewoijefwpoiu 29[r3043029u23ou32r09u302[ruo3u0]] "
);

readFile();
