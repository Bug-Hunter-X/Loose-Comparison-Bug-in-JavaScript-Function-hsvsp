function foo(x){
  if (x === null) {
    return 0; 
  } else if (x === undefined) {
    return -1; // Or handle undefined as needed
  } else {
    return x + 1;
  }
}
console.log(foo(null)); // output: 0
console.log(foo(undefined)); // output: -1