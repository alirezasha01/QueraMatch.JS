let arr = []
for(let i=0;i<3;i++){
    let a = readline();
    let b = readline();
    let c = b.split(" ");
    for (var j of c) {
        arr.push(j);
    }
}
let arr1 = [...new Set(arr)];
console.log(7-arr1.length);