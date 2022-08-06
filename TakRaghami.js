let n = readline();
do {
  let x = String(n).split("");
  n = 0;
  for (i = 0; i < x.length; i++) {
    n += Number(x[i]);
  }
} while (n > 10);
console.log(n);