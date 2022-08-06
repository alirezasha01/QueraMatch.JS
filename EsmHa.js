function removeDuplicates(num) {
    var x,
      len = num.length,
      out = [],
      obj = {};
  
    for (x = 0; x < len; x++) {
      obj[num[x]] = 0;
    }
    for (x in obj) {
      out.push(x);
    }
    return out;
  }
  n = readline();
  b = [];
  for (i = 0; i < n; i++) {
    a = readline();
    c = removeDuplicates(a.split(""));
    b.push(c.length);
  }
  
  console.log(Math.max.apply(Math, b));