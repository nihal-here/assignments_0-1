// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function clock() {
  setInterval(() => {
    const currTime = new Date().toTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });
    console.log(currTime.substring(0, 8));
  }, 1000);
}

function clock2() {
  setInterval(() => {
    const currTime = new Date().toLocaleTimeString();
    console.log(currTime);
  }, 1000);
}
clock2();
