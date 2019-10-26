
let sub = document.getElementById("sub");
let add = document.getElementById("add");

add.addEventListener("click",()=>{
    let x = Number(document.getElementById("num").innerHTML)
    x += 1;
    document.getElementById("num").innerHTML = x;
})

sub.addEventListener("click",()=>{
    let x = Number(document.getElementById("num").innerHTML)
    x -= 1;
    document.getElementById("num").innerHTML = x;
})