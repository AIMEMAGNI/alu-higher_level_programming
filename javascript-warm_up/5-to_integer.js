#!/usr/bin/node

const arg1 = process.argv.slice(2)[0];

function isNumeric (str) {
  return /^\d+$/.test(str);
}

if (isNumeric(arg1)) {
  console.log('My number:', arg1);
} else {
  console.log('Not a number');
}
