while(true){
    
    let x = Number(prompt('x = '));
    let checkX = x % 2;
    if (checkX == 1){
        alert(`${x} is odd number`);
    } else if (checkX == 0) {
        alert(`${x} is even number`);
    } else{
        alert(` Wait, ${x} is not a natural number =))`);
    }

}
