let num = readline();
let counter = 0;
let keys = [];
let key = readline();
keys.push(key);
for (i = 0; i < Number(num) - 1; i++) {
  key = readline();
  keys.push(key);
  if (keys[i] != keys[i + 1]) {
    counter += 1;
  }
}
console.log(counter);
