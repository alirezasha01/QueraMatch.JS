let n = readline();
let s = "";
for (i = 1; i <= n; i++) {
  for (j = 1; j <= n; j++) {
    s += i * j + " ";
  }
  console.log(s);
  s = "";
}
