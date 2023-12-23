// <!-- ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ``` -->

const fs = require("fs");

function readFile() {
  fs.readFile(
    "/Users/nihal/0-100_course/assignments_0-1/week-2/01-async-js/easy/4-write-to-file.txt",
    "utf-8",
    (err, data) => {
      if (err) throw err;
      const newData = data.replace(/\s+/g, " ");
      console.log(newData);
    }
  );
}

readFile();
