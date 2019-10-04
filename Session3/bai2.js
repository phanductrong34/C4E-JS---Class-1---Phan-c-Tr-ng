let a = ["comga","banh trung","banh trung thu"];
let i = Number(prompt('Enter position delete 0 1 2'));
let n = Number(prompt("How many"));
let b = a.splice(i,n);
alert(a);
alert(b);