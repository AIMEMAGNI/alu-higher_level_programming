#!/usr/bin/node

const arg1 = parseInt(process.argv[2]);
let result = 1;

function fact (num) {
  if (num == NaN) {
    console.log(1);
} else if (num == 0) {
    console.log(1);    
  
} else{
    for (let i = num; i > 1; i--){
      result = result * i;
    }
    console.log(result);
  }
}
fact(arg1);
