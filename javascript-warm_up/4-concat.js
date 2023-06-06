#!/usr/bin/node

const arg1 = process.argv.slice(2)[0];
const arg2 = process.argv.slice(2)[1];

if (!arg1) {
  console.log('undefined is undefined');
} else if (!arg2) {
  console.log(arg1, 'is undefined');
} else {
  console.log(arg1, 'is', arg2);
}
