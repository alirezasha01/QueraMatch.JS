let n = readline();
let z = 0;
for (let i=1 ; i<n+1 ; i++){
    if(n%i==0){
        z+=1
    }
}
if(z==2 && n%2==1){
    console.log("zoj")
}
else{
    console.log("fard")
}