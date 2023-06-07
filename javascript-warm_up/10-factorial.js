#!/usr/bin/node

const arg1 = parseInt(process.argv[2]);

function fact (num) {
  if (isNaN(num)) {
    return 1;
  } else {
    return (num === 0) ? 1 : num * fact(num - 1);
  }
}
console.log(fact(arg1));
