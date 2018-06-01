console.clear();
let i = 279689;
let o = i;
let total;
let teller = 24412;
function primes() {
  let j = 0;
  for (let g = 2; g < i; g++) {
    if (Number.isInteger(i / g) == true) {
      j = 1;
    }
  }
  if (j == 0) {
    total = i - o;

       // console.clear();
      console.log(`priemgetal: ${i}  'ste priem: ${teller} ratio: ${Math.round(i/teller)}`);
      teller++;
    o = i;
  }
  i = i + 2;
 
  setImmediate(primes);
}
primes();
