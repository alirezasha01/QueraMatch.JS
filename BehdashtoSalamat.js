let x = readline();
let n = readline();
let m = 0;
if (n==0){
    m = 20;
}
else if (n==7){
    m = x;
}
else{
    m = x - n;
}
if (m<0){
    m=0;
}
console.log(m);