/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

// function wait(n) {
//   return new Promise((resolve) => setTimeout(resolve, n * 1000));
// }

async function wait2(n) {
  await new Promise((resolve) => setTimeout(resolve, n * 1000));
}

module.exports = wait2;
