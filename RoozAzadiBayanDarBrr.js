let k = readline();
let khashm = 0;
for (let i = 1; i < k; i++) {
  for (let j = 1; j < i; j++) {
    if (j % 2 == 0) {
      khashm = 1;
    } else {
      khashm = 0;
    }
  }
}
if (khashm == 0) {
  console.log("Payin Barare");
} else {
  console.log("Bala Barare");
}