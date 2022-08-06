let a = readline();
let x = a.split(" ");
let e = Number(x[0]);
let b = Number(x[1]);
let c = Number(x[2]);
y = [];
counter = 0;
for (i = 0; i < e; i++) {
  d = readline();
  y.push(d);
}
for (i = b; i < c + b; i++) {
  if (i % e == 0) {
    counter += 1;
  }
}
console.log(y[i - counter * e - 1]);