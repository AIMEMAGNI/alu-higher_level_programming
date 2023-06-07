#!/usr/bin/node

const arg1 = parseInt(process.argv[2]);
let i = 0;

if (arg1) {
  for (i = 0; i < arg1; i++) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of occurrences');
}
